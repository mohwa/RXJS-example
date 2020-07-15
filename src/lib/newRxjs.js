// class Subject {
//   observers = [];
//   subscription = [];
//   constructor() {
//   }
//   static factory() {
//     return new Subject();
//   }
//   subscribe({ next, error, complete }) {
//     const observer = Observer.factory({ next });
//     const subscription = this.subscription = Subscription.factory(observer);
//
//     this.observers.push(observer);
//
//     observer.error = (v) => {
//       subscription.unsubscribe();
//       error(v);
//     };
//
//     observer.complete = () => {
//       subscription.unsubscribe();
//       complete();
//     };
//   }
//   notify(type, v) {
//     this.observers.forEach((o) => {
//       o?.[type](v);
//     });
//   }
//   unsubscribe() {
//     this.subscription.unsubscribe();
//   }
//   next(v) {
//     this.notify('next', v);
//     // this.notify('complete');
//   }
//   error(v) {
//     this.notify('error', v);
//   }
//   complete() {
//     this.notify('complete');
//   }
// }
//
// class Subscription {
//   observer = null;
//   observers = [];
//   constructor(observer) {
//     this.observer = observer;
//     this.observers = [observer];
//   }
//   static factory(v) {
//     return new Subscription(v);
//   }
//   add(subscription) {
//     this.observers = [...this.observers, subscription.observer];
//   }
//   unsubscribe() {
//     this.observers.forEach((v) => {
//       if (v.timer) {
//         clearInterval(v.timer);
//         v.intervalCount = 0;
//       }
//       v.next = () => {};
//     });
//
//     this.observer = null;
//     this.observers = [];
//   }
// }
//
// class Observer {
//   next = () => {};
//   error = () => {};
//   complete = () => {};
//   timer = null;
//   intervalCount = 0;
//   constructor({ next = () => {}, error = () => {}, complete = () => {}, timer } = {}) {
//     Object.assign(this, { next, error, complete, timer });
//   }
//   static factory(v) {
//     return new Observer(v);
//   }
// }
//
// class Observable {
//   action = null;
//   intervalTime = 0;
//   constructor({ action, intervalTime } = {}) {
//     this.action = action;
//     this.intervalTime = intervalTime;
//   }
//   static factory(v) {
//     return new Observable(v);
//   }
//   static create(action) {
//     return this.factory({ action });
//   }
//   static interval(intervalTime) {
//     return this.factory({ intervalTime });
//   }
//   subscribe(...args) {
//     const [next, error, complete] = args;
//     const observer = Observer.factory({ next, error });
//     const subscription = Subscription.factory(observer);
//
//     observer.complete = () => {
//       subscription.unsubscribe();
//       complete();
//     };
//
//     if (this.action) {
//       const unsubscribe = this.action(observer);
//       if (unsubscribe && unsubscribe instanceof Function) {
//         unsubscribe?.();
//       }
//     } else {
//       if (this.intervalTime) {
//         observer.timer = setInterval(() => {
//           next(++observer.intervalCount);
//         }, this.intervalTime);
//       }
//     }
//
//     return subscription;
//   }
// }
//
// const p1 = new Promise((resolve) => {
//   setTimeout(() => resolve(1), 2000);
// });
//
// const p2 = new Promise((resolve) => {
//   setTimeout(() => resolve(2), 6000);
// });
//
// const createdObservable = Observable.create(async (o) => {
//   const v = await p1;
//   o.next(v);
//
//   const vv = await p2;
//   o.next(vv);
//
//   o.complete();
// });
