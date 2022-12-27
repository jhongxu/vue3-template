import { visualizer } from 'rollup-plugin-visualizer';


const createVisualizer = (mode) => visualizer({
  emitFile: true,
  file: 'stats.html',
  // template: 'sunburst',
  open: mode === 'production',
  gzipSize: true,
  brotliSize: true,
});

export default createVisualizer;
