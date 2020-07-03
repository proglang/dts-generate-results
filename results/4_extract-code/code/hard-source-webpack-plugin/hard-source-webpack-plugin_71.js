    // HardSource includes an experimental plugin for parallelizing webpack
    // across multiple processes. It requires that the extra processes have the
    // same configuration. `mode` must be set in the config. Making standard
    // use with webpack-dev-server or webpack-serve is difficult. Using it with
    // webpack-dev-server or webpack-serve means disabling any automatic
    // configuration and configuring hot module replacement support manually.
    new HardSourceWebpackPlugin.ParallelModulePlugin({
      // How to launch the extra processes. Default:
      fork: (fork, compiler, webpackBin) => fork(
        webpackBin(),
        ['--config', __filename], {
          silent: true,
        }
      ),
      // Number of workers to spawn. Default:
      numWorkers: () => require('os').cpus().length,
      // Number of modules built before launching parallel building. Default:
      minModules: 10,
    }),
  ]
