
import call from './call';
import store from './store';

export default function takeEvery(action, generator){
  store.actionDispatcher.subscribe(watchAction => {
    if (action === watchAction.type){
      call(generator.bind(null, watchAction));
    }
  });
};