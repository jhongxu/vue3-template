import devConfig from './dev';
import buildConfig from './build';

const envResolver = {
  development: () => devConfig,
  production: () => buildConfig
};
export default envResolver;
