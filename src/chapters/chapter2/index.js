import { Observable, interval } from 'rxjs';
class Observer {
  constructor(f, state) {
    this.f = f;
    this.state = state;
  }
  static factory(...args) {
    return new Observer(...args);
  }
  notify(){
    this.f();
  }
}

Object.defineProperty(Element.prototype, 'map', {
  value: new Map(),
  writable: true,
});

Object.defineProperty(Element.prototype, 'observer', {
  value: {},
  writable: true,
});

Element.prototype.useEffect = function(f = () => {}, item = []) {
  if (this.observer instanceof Observer) {
    this.observer.state.map((ov, i) => {
      const nv = item[i];

      if (nv !== ov) {
        f();
      }
    })
  } else {
    this.observer = Observer.factory(f, item);
  }
};

const el = document.createElement('el');

function callUseEffect(x, y) {
  el.useEffect(() => console.log(x, y), [x, y]);
}

callUseEffect(1, 2);
callUseEffect(3, 4);


// document.documentElement.unregisterObserver = function(eventName, f){
//   this.observers = this.observers.filter((v) => {
//     const { eventName: _eventName, notify } = v;
//
//     return !(_eventName === eventName && notify === f);
//   });
// };
//
// document.documentElement.notifyObservers = function(){
//   this.observers.forEach((v) => {
//     v.notify();
//   });
// };
//
// document.documentElement.registerObserver('changedid', () => {
//   console.log('OBSERVER A');
// });
//
// const bObserver = () => {
//   console.log('OBSERVER B');
// };
//
// const cObserver = () => {
//   console.log('OBSERVER C');
// };
//
// document.documentElement.([, bObserver);
// document.documentElement.registerObserver('changedid', cObserver);
//
// // document.documentElement.unregisterObserver('changedid', bObserver);
// // document.documentElement.unregisterObserver('changedid', cObserver);
//
// document.documentElement.hasChangedId = true;
// document.documentElement.hasChangedId = false;
