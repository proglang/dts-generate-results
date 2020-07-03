var options = {
	    maintainCase: true,
	    separator: '_'
	};

var mySlug = require('speakingurl').createSlug(options);
// in browser:
// var mySlug = createSlug(options);

var slug = mySlug("Schöner Titel läßt grüßen!? Bel été !");
console.log(slug); // Output: Schoener_Titel_laesst_gruessen_Bel_ete
