var jobs = {
  "add": {
    plugins: [ require('Myplugin').Myplugin ],
    pluginOptions: {
      MyPlugin: { thing: 'stuff' },
    },
    perform: (a,b) => {
      let answer = a + b;
      return answer
    },
  },
}
