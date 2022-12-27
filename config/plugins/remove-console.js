import removeConsole from 'vite-plugin-remove-console';

const createRemoveConsole = () => removeConsole({
  external: ['src/main.js']
});

export default createRemoveConsole;
