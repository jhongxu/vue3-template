import vue from '@vitejs/plugin-vue';
import createEslint from './eslint';
import createVisualizer from './visualizer';
import createStylelint from './stylelint';
import createSvgIcons from './svg-icon';
import createComponents from './components';
import createAutoImport from './auto-import';
import createSetupExtend from './setup-extend';
import createProgress from './progress';
import createRemoveConsole from './remove-console';

const createVitePlugins = (mode) => {
  const vitePlugins = [vue()];
  vitePlugins.push(createEslint());
  vitePlugins.push(createStylelint());
  vitePlugins.push(createSvgIcons());
  vitePlugins.push(createComponents());
  vitePlugins.push(createAutoImport());
  vitePlugins.push(createSetupExtend());
  // 打包插件
  vitePlugins.push(createRemoveConsole());
  // vitePlugins.push(createProgress());
  vitePlugins.push(createVisualizer(mode));
  return vitePlugins;
};

export default createVitePlugins;
