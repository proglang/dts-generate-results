const mbxClient = require('@mapbox/mapbox-sdk');
const mbxStyles = require('@mapbox/mapbox-sdk/services/styles');
const mbxTilesets = require('@mapbox/mapbox-sdk/services/tilesets');

const baseClient = mbxClient({ accessToken: MY_ACCESS_TOKEN });
const stylesService = mbxStyles(baseClient);
const tilesetsService = mbxTilesets(baseClient);
