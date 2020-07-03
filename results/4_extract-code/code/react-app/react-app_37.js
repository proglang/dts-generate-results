module.exports = () => {
  const [
    browserConfig,
    serverConfig,
  ] = require('react-app-tools/config/webpack');
  return [
    browserConfig,
    {
      ...serverConfig,
      plugins: {
        ...serverConfig.plugins.concat(
          new LimitChunkCountPlugin({ maxChunks: 1 })
        ),
      },
    },
  ];
};
