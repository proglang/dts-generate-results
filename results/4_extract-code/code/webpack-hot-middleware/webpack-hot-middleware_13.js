app.use(require("webpack-hot-middleware")(compiler, {
    log: false,
    path: "/__what",
    heartbeat: 2000
}));
