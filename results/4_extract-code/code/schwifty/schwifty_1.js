// First, ensure your project includes knex, objection, and sqlite3

// To get started you might run,
// npm install --save hapi joi schwifty knex objection sqlite3

'use strict';

const Hapi = require('hapi');
const Joi = require('joi');
const Schwifty = require('schwifty');

(async () => {

    const server = Hapi.server({ port: 3000 });

    server.route({
        method: 'get',
        path: '/dogs/{id}',
        handler: async (request) => {

            const { Dog } = request.models();

            return await Dog.query().findById(request.params.id);
        }
    });

    await server.register({
        plugin: Schwifty,
        options: {
            knex: {
                client: 'sqlite3',
                useNullAsDefault: true,
                connection: {
                    filename: ':memory:'
                }
            }
        }
    });

    // Register a model with schwifty...

    server.schwifty(
        class Dog extends Schwifty.Model {
            static get tableName() {

                return 'Dog';
            }

            static get joiSchema() {

                return Joi.object({
                    id: Joi.number(),
                    name: Joi.string()
                });
            }
        }
    );

    await server.initialize();

    // ... then make a table ...

    const knex = server.knex();

    await knex.schema.createTable('Dog', (table) => {

        table.increments('id').primary();
        table.string('name');
    });

    // ... then add some records ...

    const { Dog } = server.models();

    await Promise.all([
        Dog.query().insert({ name: 'Guinness' }),
        Dog.query().insert({ name: 'Sully' }),
        Dog.query().insert({ name: 'Ren' })
    ]);

    // ... then start the server!

    await server.start();

    console.log(`Now, go find some dogs at ${server.info.uri}!`);
})();
