const { rm } = require('fs').promises;
const { applyPlugins } = require('./template/plugins');

applyPlugins().then(async () => {
  await rm('./plugins', { recursive: true });
});
