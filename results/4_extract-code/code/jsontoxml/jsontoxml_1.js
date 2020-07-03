var jsonxml = require('jsontoxml');

var xml = jsonxml({
	node:'text content',
	parent:[
		{name:'taco',text:'beef taco',children:{salsa:'hot!'}},
		{name:'taco',text:'fish taco',attrs:{mood:'sad'},children:[
			{name:'salsa',text:'mild'},
			'hi',
			{name:'salsa',text:'weak',attrs:{type:2}}
		]},
		{name:'taco',attrs:'mood="party!"'}
	],
	parent2:{
		hi:'is a nice thing to say',
		node:'i am another not special child node',
		date:function(){
			return (new Date())+'';
		}
	}
})

console.log(xml);

