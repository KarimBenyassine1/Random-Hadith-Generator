const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        createProxyMiddleware("/random", {
            target: "https://api.sunnah.com/v1/hadiths",
            changeOrigin: true
        })
    )
}