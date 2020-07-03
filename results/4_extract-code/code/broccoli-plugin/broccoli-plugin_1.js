const Plugin = require('broccoli-plugin');

class MyPlugin extends Plugin {

  constructor(inputNodes, options = {}) {
    super(inputNodes, {
      annotation: options.annotation
      // see `options` in the below README to see a full list of constructor options
    });
  }

  build() {
    // Read files from this.inputPaths, and write files to this.outputPath.
    // Silly example:

    // Read 'foo.txt' from the third input node
    const input = fs.readFileSync(`${this.inputPaths[2]}/foo.txt`);
    const output = someCompiler(input);

    // Write to 'bar.txt' in this node's output
    fs.writeFileSync(`${this.outputPath}/bar.txt`, output);
  }
};
