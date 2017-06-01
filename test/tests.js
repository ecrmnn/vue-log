'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const Vue = require('vue');
const VueLog = require('../src');

Vue.use(VueLog);

describe('VueLog Test Suite', function () {
  it('Logs clean objects', function () {
    const component = new Vue({
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
        withoutLogger: function () {
          return this.teams;
        },

        useLogger: function () {
          return this.$log(this.teams);
        }
      },

      render: function () {
        return '<div></div>';
      }
    }).$mount();

    const defaultPropertyNames = Object.getOwnPropertyNames(component.withoutLogger());
    const vueLogPropertyNames = Object.getOwnPropertyNames(component.useLogger());

    expect(defaultPropertyNames.indexOf('__ob__')).to.not.eql(-1);
    expect(vueLogPropertyNames.indexOf('__ob__')).to.eql(-1);
  });
});