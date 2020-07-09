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

Object.defineProperty(Element.prototype, 'observers', {
  value: [],
  writable: true,
});

Element.prototype.useEffect = function(f = () => {}, state = []) {
  this.observers.push(Observer.factory(f, state));

  if (this.observers.length > 1) {
    this.observers.map((ov, i) => {
      const nv = item[i];

      if (nv !== ov) {
        this.observer.notify();
      }
    });
  }
};

const el = document.createElement('el');

el.useEffect(() => console.log(1), [1, 2]);
// el.useEffect(() => console.log(2), [3, 4]);
// el.useEffect(() => console.log(3), [3, 4]);


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
