import vue from '@vitejs/plugin-vue';
import createEslint from './eslint';
import createVisualizer from './visualizer';
import createStylelint from './stylelint';
import createSvgIcons from './svg-icon';
import createComponents from './components';
import createAutoImport from './auto-import';
import createSetupExtend from './setup-extend';

const createVitePlugins = (mode) => {
  const vitePlugins = [vue()];
  vitePlugins.push(createEslint());
  vitePlugins.push(createStylelint());
  vitePlugins.push(createSvgIcons());
  vitePlugins.push(createComponents());
  vitePlugins.push(createAutoImport());
  vitePlugins.push(createSetupExtend());
  vitePlugins.push(createVisualizer());
  return vitePlugins;
};

export default createVitePlugins;
