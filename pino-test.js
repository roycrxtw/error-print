'use strict';

const pino = require('pino')();
const pinoCaller = require('pino-caller')(pino);


module.exports = {
  start,
};
  
function start () {
  pinoCaller.info('Test for caller');
};

