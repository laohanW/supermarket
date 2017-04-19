var config = require('./config');

global.__DEV=process.env.NODE_ENV==='development';
global.__PRO=process.env.NODE_ENV==='production';
global.__HOST=process.env.HOST || (__DEV?config.server.developmentUrl:config.server.productionUrl);
global.__PORT=process.env.PORT || (__DEV?config.server.developmentPort:config.server.productionPort);

