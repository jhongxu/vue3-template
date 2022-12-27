/**
 * @type {import('vite').UserConfig}
 */
const devConfig = {
  server: {
    // 是否开启 https
    https: false,
    // 端口号
    // port: 80,
    // 监听所有地址 127.0.0.1  localhost   192.168.1.x
    host: '0.0.0.0',
    // 服务启动时是否自动打开浏览器
    open: true,
    // 允许跨域
    cors: true,
    // 自定义代理规则
    proxy: {},
  },
};

export default devConfig;
