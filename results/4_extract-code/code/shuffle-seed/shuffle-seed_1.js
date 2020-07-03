var shuffleSeed = require('shuffle-seed');
var a = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var resp = shuffleSeed.shuffle(a,"Kappa");
// result always will be [f','y','p','i','r','v','a','x','q','e','c','b','n','j','t','z','o','l','w','m','k','g','h','u','d','s']

shuffleSeed.unshuffle(resp,"Kappa");
// result ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
