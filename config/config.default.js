/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1618892255420_7799';

  // add your middleware config here
  config.middleware = [ 'errorHandler' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: 'egg-swagger',
      description: 'swagger-ui for egg',
      version: '1.0.0',
    },
    schemes: [ 'http', 'https' ],
    consumes: [ 'application/json' ],
    produces: [ 'application/json' ],
    securityDefinitions: {
      // apikey: {
      //   type: 'apiKey',
      //   name: 'clientkey',
      //   in: 'header',
      // },
      // oauth2: {
      //   type: 'oauth2',
      //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
      //   flow: 'password',
      //   scopes: {
      //     'write:access_token': 'write access_token',
      //     'read:access_token': 'read access_token',
      //   },
      // },
    },
    enableSecurity: false,
    // enableValidate: true,
    routerMap: true,
    enable: true,
  };

  config.mongoose = {
    url: 'mongodb://127.0.0.1/eggdb',
    options: {
      // useMongoClinet:true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      // autoReconnect: true,
      // reconnectTries: Number.MAX_VALUE,
      bufferMaxEntries: 0,
    },
    // mongoose global plugins, expected a function or an array of function and options
  };
  config.jwt = {
    secret: 'Great4-M',
    enable: true,
    match: /^\/api/,
  };
  return {
    ...config,
    ...userConfig,
  };
};
