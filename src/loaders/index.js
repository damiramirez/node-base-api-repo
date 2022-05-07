const ExpressServer = require('./server/expressServer');
const config = require('../config');

module.exports = async () => {
  const server = new ExpressServer();
  console.log('Express loader');

  await server.start();
  console.log('###########################################');
  console.log(`Server up! Running on port${config.port}`);
  console.log('###########################################');
};
