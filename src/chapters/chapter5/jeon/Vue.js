import Data from '@chapters/chapter5/jeon/Data';

class Component {
  tagName = '';
  opt = new Map();
  el = null;
  constructor(tagName, opt) {
    this.tagName = tagName;
    this.opt = Data.objectToMap(opt);

    this.createElement();
  }
  static factory(...args) {
    return new Component(...args);
  }
  createElement() {
    this.el = document.createElement(this.tagName);
    this.el.innerHTML = this.opt.get('template');
  }
}

export default class Vue {
  selector = '';
  static components = new Map();
  constructor({ el }) {
    this.selector = el;
  }
  static factory(v) {
    const o = new Vue(v);

    this.createComponents(o);

    return o;
  }
  static createComponents(_this) {
    const root = document.querySelector(_this.selector);
    const fragment = new DocumentFragment();

    this.components.forEach((v) => {
      const { el } = v;
      const hasElem = !!root.getElementsByTagName(el.tagName)[0];

      if (hasElem) {
        fragment.appendChild(el);
      }
    });

    root.appendChild(fragment);

    return _this;
  }
  static component(tagName, opt) {
    const com = Component.factory(tagName, opt);

    this.components.set(com, com);
  }
}
