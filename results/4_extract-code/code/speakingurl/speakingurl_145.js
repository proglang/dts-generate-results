var options = {
	    titleCase: [
	        "a","an","and","as","at","but",
	        "by","en","for","if","in","nor",
	        "of","on","or","per","the","to","vs"
	    ]
	};

var mySlug = require('speakingurl').createSlug(options);
// in browser:
// var mySlug = createSlug(options);

var slug = mySlug('welcome to the jungle');
console.log(slug); // Output: Welcome-to-the-Jungle
