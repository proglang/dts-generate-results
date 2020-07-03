// a function
partials.register('.j',require('jade').render); 

// module (or object with a .render() function)
partials.register('.j',require('jade')); 

// string (= require(str))
partials.register('.j','jade'); 
