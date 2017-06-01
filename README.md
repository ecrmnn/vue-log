# vue-log
> Shorthand function for logging clean view model data

[![Travis](https://img.shields.io/travis/ecrmnn/vue-log.svg?style=flat-square)](https://travis-ci.org/ecrmnn/vue-log.svg?branch=master)
[![npm version](https://img.shields.io/npm/v/vue-log.svg?style=flat-square)](http://badge.fury.io/js/vue-log)
[![npm downloads](https://img.shields.io/npm/dm/vue-log.svg?style=flat-square)](http://badge.fury.io/js/vue-log)
[![npm license](https://img.shields.io/npm/l/vue-log.svg?style=flat-square)](http://badge.fury.io/js/vue-log)

### Installation
```bash
npm install vue-log --save
```

### Usage
```javascript
const Vue = require('vue');
const VueLog = require('vue-log');

Vue.use(VueLog);

new Vue({
  data: function () {
    return {
      teams: [{
        name: 'Liverpool'
      }, {
        name: 'Arsenal'
      }, {
        name: 'Chelsea'
      }]
    }
  },

  methods: {
    consoleLog: function () {
      console.log(this.teams);
      //=> [ { name: [Getter/Setter] },
      //=>   { name: [Getter/Setter] },
      //=>   { name: [Getter/Setter] } ]
    },
    
    vueLog: function () {
      this.$log(this.teams);
      //=> [ { name: 'Liverpool' },
      //=>   { name: 'Arsenal' },
      //=>   { name: 'Chelsea' } ]
    }
  }
});
```

### Related
- [meta-ctrl-enter](https://github.com/ecrmnn/meta-ctrl-enter) - Trigger Vue methods by pressing cmd+enter, windows+enter or ctrl+enter

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)