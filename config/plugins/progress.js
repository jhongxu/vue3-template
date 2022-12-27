import progress from 'vite-plugin-progress';
import colors from 'picocolors';

const createProgress = () => progress({
  format: `${colors.green(colors.bold('Building'))} ${colors.cyan('[:bar]')} :percent`,
  total: 200,
  width: 60,
  complete: '=',
  incomplete: '',
});

export default createProgress;
