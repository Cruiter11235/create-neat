const PluginConfig = require("./generator/index.cjs");

const pluginAntd = (buildTool) => {
  return PluginConfig[buildTool] ?? console.warn(`Unsupported build tool: ${buildTool}`);
};

module.exports = {
  pluginAntd,
};
