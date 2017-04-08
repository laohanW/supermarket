var config=require('../config');
global.__PRO=process.NODE_ENV==='production';
global.__DEV=!global.PRO;
global.__HOST=global.__PRO?config.server.productionUrl:config.server.developmentUrl;
global.__MONGO_HOST=config.mongo.host;
