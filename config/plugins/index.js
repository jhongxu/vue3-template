import vue from '@vitejs/plugin-vue';
import createEslint from './eslint';
import createVisualizer from './visualizer';
import createStylelint from './stylelint';
import createSvgIcons from './svg-icon';

const createVitePlugins = (mode) => {
  const vitePlugins = [vue()];
  vitePlugins.push(createEslint());
  vitePlugins.push(createStylelint());
  vitePlugins.push(createSvgIcons());
  vitePlugins.push(createVisualizer());
  return vitePlugins;
};

export default createVitePlugins;
