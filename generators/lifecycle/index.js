'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  // 此行会报错： this.log is not a function
  // constructor: function () {
  //   this.log("constructor");
  // },

  initializing: function () {
    this.log("initializing");
  },

  prompting: function () {
    this.log("prompting");
  },

  configuring: function () {
    this.log("configuring");
  },

  default: function () {
    this.log("default");
  },

  writing: function () {
    this.log("writing");
  },

  conflicts: function () {
    this.log("conflicts");
  },

  install: function () {
    this.log("install");
  },

  end: function () {
    this.log("end");
  }
});
