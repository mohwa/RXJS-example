
import call from './call';
import store from './store';

export default function takeLatest(action, generator){

  let execGenerator = null;

  store.actionDispatcher.subscribe(watchAction => {
    if (action === watchAction.type && !execGenerator){
      execGenerator = generator;
      execGenerator = new Promise(resolve => {
        call(generator.bind(null, watchAction));
        resolve(null);
      });
    }
  });
};