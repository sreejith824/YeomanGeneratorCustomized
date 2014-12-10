'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the superb' + chalk.red('Khulayeoman') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'featureName',
      message: 'Feature you want to develop : ',
      default: 'Sales'
    }];

    this.prompt(prompts, function (props) {
      this.scriptAppName = props.featureName;
      this.featureName = props.featureName;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.destinationDir = this.options.env.cwd;
      this.templateDir  = this._sourceRoot;
      this.camelCasedName  = this.featureName.toLocaleLowerCase().charAt(0).toUpperCase()+this.featureName.slice(1);

      this.fs.copy(
        this.templateDir+'/_package.json',
        this.destinationDir+'/package.json'
      );
      this.fs.copy(
        this.templateDir+'/_bower.json',
        this.destinationDir+'/bower.json'
      );

      this.fs.copyTpl(
        this.templateDir+'/javascript/app.js',
        this.destinationDir+'/features/'+this.featureName+'/app.'+this.featureName+'.js',
        {scriptAppName : this.featureName,
          classedName : this.camelCasedName}
      );
      this.fs.copyTpl(
        this.templateDir+'/javascript/controller.js',
        this.destinationDir+'/features/'+this.featureName+'/'+this.featureName+'.controller.js',
        {scriptAppName : this.featureName,
          classedName : this.camelCasedName}
      );
      this.fs.copyTpl(
        this.templateDir+'/javascript/service.js',
        this.destinationDir+'/features/'+this.featureName+'/'+this.featureName+'.service.js',
        {scriptAppName : this.featureName,
          classedName : this.camelCasedName}
      );
      this.fs.copyTpl(
        this.templateDir+'/javascript/factory.js',
        this.destinationDir+'/features/'+this.featureName+'/'+this.featureName+'.factory.js',
        {scriptAppName : this.featureName,
          classedName : this.camelCasedName}
      );
      this.fs.copyTpl(
        this.templateDir+'/views/view.html',
        this.destinationDir+'/features/'+this.featureName+'/'+this.featureName+'.html',
        {name : this.featureName}
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
