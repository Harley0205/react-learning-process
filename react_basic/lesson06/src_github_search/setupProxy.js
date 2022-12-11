const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api1',{     // ajax中遇见/api1的前缀请求，就会触发该代理配置
      target: 'http://localhost:5000',  // 请求转发给谁
      changeOrigin: true,               // 控制服务器收到的响应头中Host字段的值
      pathRewrite:{'^/api1':''}         // 重写请求路径(必须要做的事情，否则请求送不过去)
    })
  );
};