const ApiFactory = require('openapi-factory');
// The default path resolver is the one contained in the PathResolver. It parses the registered paths, stores them in a dictionary, and then looks them up later when necessary.
options.pathResolver = new PathResolver();
let api = new ApiFactory(options);

// However this can be replaced by a custom implementation which includes storePath and resolvePath
class PathResolver {
	constructor() {
		this.currentPathDictionary = {
			'GET': {},
			'POST': {},
			...
		};
	}
	// will get in the current dicitonary object as well, there is a specific dictionary for each verb
	// * the current path string
	// * the object associated with that path
	// and returns the updated dictionary
	storePath(currentVerbPathDictionary, dynamicPath, storageObject) {
		return new PathDictionary();
	}

	// Later resolvePath is called to get back the currentPathDictionary and raw path, and expect to return the pre-stored storageObject
	resolvePath(currentPathDictionary, resolvedPath) {
		return storageObject;
	}
}
