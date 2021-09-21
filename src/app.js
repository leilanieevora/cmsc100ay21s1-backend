// Require the framework and instantiate it
import fastify from "fastify";
import { home } from './services/base/home.js';
import { test } from './services/base/test.js';

/**
 * This function starts the server
 * 
 * @param {*} options
 * @returns {*}
 * 
 */
export async function server (options = { looger: true}){
  const app = fastify(options);

  app.get('/', home);
  app.post('/', home);
  app.get('/test', test);

  return app;
}