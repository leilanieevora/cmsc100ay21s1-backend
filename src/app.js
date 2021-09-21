// Require the framework and instantiate it
import fastify from 'fastify';
import openApiGlue from 'fastify-openapi-glue';
import swagger from 'fastify-swagger';
import { Service } from './services/index.js';
import { specification } from './specifications/index.js';
// import { home } from './services/base/home.js';
/**
 * This function starts the server
 *
 * @param {*} options
 * @returns {*}
 *
 */
export async function server (options = { looger: true }) {
  const app = fastify(options);

  const service = new Service();

  const openApiOptions = {
    specification,
    service,
    noAdditional: true
  };

  const swaggerOptions = {
    openapi: specification,
    routePrefix: '/docs',
    exposedRoute: process.env.NODE_ENV !== 'production'
  };

  app.register(swagger, swaggerOptions);
  app.register(openApiGlue, openApiOptions);

  // app.get('/', home);
  // app.post('/', home);
  // app.get('/test', test);

  return app;
}
