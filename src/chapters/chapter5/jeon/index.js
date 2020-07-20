import Vue from '@chapters/chapter5/jeon/Vue';
import store from '@chapters/chapter5/jeon/store';

const X = {
  template: `<div>X</div>`,
  computed: {
    count () {
      return store.state.count
    }
  }
};

const Y = {
  template: `<div>Y</div>`,
  computed: {
    count () {
      return store.state.count
    }
  }
};

Vue.component('x', X);
Vue.component('y', Y);

Vue.factory({
  el: '#app'
});
