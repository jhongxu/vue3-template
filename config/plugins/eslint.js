import eslint from 'vite-plugin-eslint';

const createEslint = () => eslint({
  cache: false
});


export default createEslint;
