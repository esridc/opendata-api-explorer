/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-arc-swag',
    environment: environment,
    rootURL: '/',
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "* 'unsafe-inline' 'unsafe-eval' use.typekit.net",
      'font-src': "* data: use.typekit.net",
      'connect-src': "*",
      'img-src': "*",
      'style-src': "* 'unsafe-inline' use.typekit.net",
    },

    APP: {
      swaggerRoot: 'https://opendata.arcgis.com/api/v2/swagger.json'
      // Here you can pass flags/options to your application instance
      // when it is created
    },

  };

  if (environment === 'development') {
    ENV.locationType = 'auto';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/ember-arc-swag';
  }

  return ENV;
};
