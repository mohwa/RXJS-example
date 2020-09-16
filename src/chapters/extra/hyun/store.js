

import { Subject, BehaviorSubject } from 'rxjs';
import { scan } from 'rxjs/operators';

export const createStore = (rootReducer, initialState) => {

  const actionDispatcher$ = new Subject();
  const store$ = new BehaviorSubject(initialState);

  const dispatch = actionDispatcher$.next.bind(actionDispatcher$);
  const subscribe = store$.subscribe.bind(store$);
  const getState = store$.getValue.bind(store$);

  actionDispatcher$
    .pipe(scan(rootReducer, initialState))
    .subscribe(store$);

  return {
    dispatch,
    subscribe,
    getState,
    actionDispatcher: actionDispatcher$
  };
};

const rootReducer = (state, actions) => {

  console.log('reducer', state, actions);

  return state;
};

const store = createStore(rootReducer, {});

export default store;