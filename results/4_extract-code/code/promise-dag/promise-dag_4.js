var promiseDag = require('promise-dag');

// describe the computation as steps which depend on previous steps.
// in this cooking example, functions which return a promise are prefixed with `p_`.
var mushroomPastaRecipe = {
  hotWater: [function(){
    return p_boilWater("1L");
  }],
  rawPasta: [function(){ return p_pickIngredient("pasta"); }],
  cookedPasta: ['hotWater','rawPasta', function(hotWater, rawPasta){
    return p_boil(hotWater, rawPasta, "10 minutes");
  }],
  
  slicedOnion: [function(){ return p_pickIngredient("onion").then(slice); }],
  slicedMushroom: [function(){ return p_pickIngredient("mushroom").then(slice); }],
  friedOnionAndMushroom: ['slicedOnion','slicedMushroom', function(slicedOnion, slicedMushroom){
    return p_fry([slicedOnion, slicedMushroom], "3 min");
  }],
  cream: [function() { return p_pickIngredient("cream"); }],
  
  sauce: ['friedOnionAndMushroom','cream', function(friedOnionAndMushroom, cream){
    return mix(friedOnionAndMushroom, cream);
  }],
  
  meal: ['cookedPasta', 'sauce', mix]
};

// returns an object mapping each step name to a promise of the completed step
promiseDag.run(mushroomPastaRecipe);
// {hotWater: Promise{...}, rawPasta: Promise{...}, ...}

// you can specify which output steps you want to return. Only the dependencies of those steps will be run.
promiseDag.run(mushroomPastaRecipe, ['cookedPasta', 'sauce']);
// {cookedPasta: Promise{...}, sauce: Promise{...}}

// Example 1: eating the whole meal
promiseDag.run(mushroomPastaRecipe, ['meal']).meal.then(eat);

// Example 2: if you are lazy, you can just cook the pasta. The rest of the cooking won't occur.
promiseDag.run(mushroomPastaRecipe, ['cookedPasta']).cookedPasta.then(eat);

// Example 3: if you don't feel like cooking the sauce yourself, you can buy it at the store instead
var lazyRecipe = _.extend({},mushroomPastaRecipe, {
  sauce: [function(){ return p_buyAtStore('mushroomSauce'); }]
});
promiseDag.run(lazyRecipe, ['meal']).meal.then(eat);

