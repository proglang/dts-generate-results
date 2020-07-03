const Hapi = require('@hapi/hapi');
const H2o2 = require('@hapi/h2o2');


const start = async function() {

  const server = Hapi.server();
  try {
    await server.register(H2o2);
    await server.start();

    console.log(`Server started at:  ${server.info.uri}`);
  }
  catch(e) {
    console.log('Failed to load h2o2');
  }
}

start();
