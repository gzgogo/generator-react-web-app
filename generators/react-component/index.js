'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var inquirer = require('inquirer');
var utils = require("../utils");

module.exports = yeoman.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the amazing ' + chalk.red('generator-react-new-component') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'componentName',
        message: 'What\'s the name of the new component?',
        default: 'MyComponent'
      },
      {
        type: 'list',
        name: 'componentPath',
        message: 'Choose the path to create the component:',
        choices: [
          { name: 'current directory: "."', value: '.' },
          { name: 'component directory: "src/javascripts/components/"', value: 'src/javascripts/components/' },
          { name: 'container directory: "src/javascripts/containers/"', value: 'src/javascripts/containers/' }
        ],
        store: true,
        default: ''
      },
      {
        type: 'list',
        name: 'stylesheetExtension',
        message: 'Choose the css pre-processor you need:',
        choices: [
          { name: 'css', value: 'css' },
          { name: 'less', value: 'less' },
          { name: 'sass', value: 'sass' },
          { name: 'stylus', value: 'styl' }
        ],
        store: true,
        default: 'css'
      }];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: function () {
    var componentName = this.props.componentName;
    var jsName = componentName + '.' + 'js';
    var stylesheetName = componentName + '.' + this.props.stylesheetExtension;
    var jsFullPath = this.destinationPath(this.props.componentPath + "/" + componentName + '/' + jsName);
    var stylesheetFullPath = this.destinationPath(this.props.componentPath + "/" + componentName + '/' + stylesheetName);

    utils.debug(this, jsFullPath);
    utils.debug(this, stylesheetFullPath);

    this.fs.copyTpl(
      this.templatePath('componentFile'),
      this.destinationPath(jsFullPath),
      {
        componentName: componentName,
        stylesheetExtension: this.props.stylesheetExtension
      }
    );

    if (!!this.props.stylesheetExtension) {
      this.fs.copy(
        this.templatePath('stylesheetFile'),
        this.destinationPath(stylesheetFullPath)
      );
    }
  }
});
