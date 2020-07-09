class Observer {
  constructor(f = () => {}, state = []) {
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
  if (state.length) {
    let changedObserver = null;

    this.observers.some((ob) => {
      const v = ob.state.find((ov, ii) => {
        const nv = state[ii];
        return nv !== ov;
      });

      if (v) {
        changedObserver = Observer.factory(f, state);
        return true;
      }
    });

    if (changedObserver) {
      this.observers = [changedObserver];
      changedObserver.notify();
    } else {
      this.observers.push(Observer.factory(f, state));
    }
  } else {
    let unloadCallback = null;

    window.addEventListener('DOMContentLoaded', () => {
      unloadCallback = f();
    });

    window.addEventListener('beforeunload', () => {
      if (unloadCallback instanceof Function) {
        unloadCallback();
      }
    });
  }
};

const el = document.createElement('el');

el.useEffect(() => {
  console.log('LOAD 1');

  return () => {
    console.log('UNLOAD 1');
  }
}, []);

el.useEffect(() => {
  console.log('LOAD 2');

  return () => {
    console.log('UNLOAD 2');
  }
}, []);

el.useEffect(() => console.log('A'), [1, 4]);
el.useEffect(() => console.log('B'), [3, 4]);
el.useEffect(() => console.log('C'), [3, 4]);
el.useEffect(() => console.log('D'), [5, 7]);
el.useEffect(() => console.log('E'), [5, 7]);
el.useEffect(() => console.log('F'), [5, 7]);
el.useEffect(() => console.log('G'), [1, 7]);
el.useEffect(() => console.log('H'), [1, 8]);
el.useEffect(() => console.log('I'), [1, 8]);
