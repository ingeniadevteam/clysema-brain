"use strict";

const brain = require('brain.js');

module.exports = async (app) => {
  // get a validated config object
  try {
    app.config.brain = await app.modules.jsonload(`${app.path}/config/brain.json`);
  } catch (e) {
    throw e;
  }
  // create a new net
  const net = new brain.NeuralNetwork();
  // return configured net
  return net.fromJSON(app.config.brain);
};
