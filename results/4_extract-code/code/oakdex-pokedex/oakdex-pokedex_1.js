oakdexPokedex = require('oakdex-pokedex');

const eevee = oakdexPokedex.findPokemon('Eevee')
// returns data/pokemon/eevee.json
console.log(eevee.names.en); // Eeevee

const charmander = oakdexPokedex.findPokemon(4)
// returns data/pokemon/charmander.json
console.log(charmander.names.en); // Charmander

const tackle = oakdexPokedex.findMove('Tackle')
// returns data/move/tackle.json
console.log(m.names.en); // Tackle

const potion = oakdexPokedex.findItem('Potion')
// returns data/item/potion.json
console.log(m.names.en); // Potion

const contrary = oakdexPokedex.findAbility('Contrary')
// returns data/ability/contrary.json
console.log(a.names.en); // Contrary

const fairy = oakdexPokedex.findType('Fairy')
// returns data/type/fairy.json
console.log(fairy.names.en); // Fairy

const water1 = oakdexPokedex.findEggGroup('Water 1')
// returns data/egg_group/water_1.json
console.log(water1.names.en); // Water 1

const genVI = oakdexPokedex.findGeneration('Generation VI')
// returns data/generation/6.json
console.log(genVI.names.en); // Generation VI

const bold = oakdexPokedex.findNature('Bold')
// returns data/nature/bold.json
console.log(bold.names.en); // Bold

const allPokemon = oakdexPokedex.allPokemon()
console.log(allPokemon.length); // 809

const allItems = oakdexPokedex.allItems()
console.log(allItems.length); // 69, WIP

const darkPokemon = oakdexPokedex.allPokemon({ type: 'Dark' })
console.log(darkPokemon.length); // 46

const humanLike = oakdexPokedex.allPokemon({ egg_group: 'Human-Like' })
console.log(humanLike.length); // 52

const alola = oakdexPokedex.allPokemon({ dex: 'alola' })
console.log(alola.length); // 302

const moves = oakdexPokedex.allMoves({ type: 'Ground' })
console.log(moves.length); // 26
