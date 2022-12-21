import { visualizer } from 'rollup-plugin-visualizer';


const createVisualizer = () => visualizer({
  emitFile: true,
  file: 'stats.html',
  template: 'sunburst'
});

export default createVisualizer;
