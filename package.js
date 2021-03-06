Package.describe({
  name: 'd4nyll:moment',
  version: '0.0.8',
  // Brief, one-line summary of the package.
  summary: 'Meteor wrapper for Moment and Moment Timezone',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/d4nyll/moment.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
    'moment': '2.10.6',
    'moment-timezone': '0.4.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use(['cosmos:browserify@0.5.0'], 'client');
  api.addFiles('moment.browserify.js', 'client');
  api.export('moment', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('d4nyll:moment');
  api.addFiles('moment-tests.js');
});
