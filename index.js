'use strict';

const MochaJunitReporter = require('mocha-junit-reporter');
const Mochawesome = require('mochawesome');

/**
 * @param {Object} runner
 * @param {Object} options
 */
function MochawesomeJunitReporter(runner, options) {
  new MochaJunitReporter(runner, options);
  this.done = new Mochawesome(runner, options).done;
}

module.exports = MochawesomeJunitReporter;
