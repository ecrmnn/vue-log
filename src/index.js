'use strict';

module.exports = {
  install: Vue => {
    Vue.prototype.$log = function (value) {
      const copy = JSON.parse(JSON.stringify(value));

      console.log(copy);
      return copy;
    }
  }
};