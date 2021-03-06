var config=require('../config');
global.__PRO=process.NODE_ENV==='production';
global.__DEV=!global.PRO;
global.__HOST=global.__PRO?config.server.productionUrl:(process.env.HOST || config.server.developmentUrl);
global.__PORT=global.__PRO?config.server.productionPort:(process.env.PORT || config.server.developmentPort);
global.__MONGO_HOST=config.mongo.host;
global.__MONGO_DB=config.mongo.db;
global.__SECRET=config.iron.secret;
global.__DIR_BUILD=config.webpack.outputPath;
