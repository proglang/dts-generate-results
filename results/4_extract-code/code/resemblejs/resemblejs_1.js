const compare = require("resemblejs").compare;

function getDiff() {
    const options = {
        // stop comparing once determined to be > 5% non-matching; this will
        // also enable compare-only mode and no output image will be rendered;
        // the combination of these results in a significant speed-up in batch processing
        returnEarlyThreshold: 5
    };

    // The parameters can be Node Buffers
    // data is the same as usual with an additional getBuffer() function
    compare(image1, image2, options, function(err, data) {
        if (err) {
            console.log("An error!");
        } else {
            console.log(data);
            /*
            {
            misMatchPercentage : 100, // %
            isSameDimensions: true, // or false
            dimensionDifference: { width: 0, height: -1 }, // defined if dimensions are not the same
            getImageDataUrl: function(){}
            }
            */
        }
    });
}
