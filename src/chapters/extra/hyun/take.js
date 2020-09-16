
import store from './store';

export default function take(action){
  return new Promise(resolve => {
    store.actionDispatcher.subscribe(watchAction => {
      if (action === watchAction.type){
        resolve(watchAction);
      }
    });
  });
};