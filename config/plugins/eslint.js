import eslint from 'vite-plugin-eslint';

const createEslint = () => eslint({
  cache: false,
  include: ['src/**/*.js', 'src/**/*.vue'],
  emitWarning: false,
});


export default createEslint;
