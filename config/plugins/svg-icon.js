import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { resolve } from 'path';

const createSvgIcons = () => createSvgIconsPlugin({
  iconDirs: [resolve(process.cwd(), 'src/assets/icons/svg')],
  symbolId: 'icon-[dir]-[name]',
  svgoOptions: false
});

export default createSvgIcons;
