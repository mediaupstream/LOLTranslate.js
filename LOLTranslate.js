/*----------------------------------------------------------
	* LOLTranslate - Javascript based LOLCat Translator
  ----------------------------------------------------------
	
	### Usage:
	
	Include this file in your project source and now you can translate a string
	to LolSpeak like so  
	
			var catSays = LOLTranslate('Hello World'); // outputs 'oh hai whirld'
	
	You can pass a second optional paramater true | false to make the output
	all uppercased:
	
			var catSays = LOLTranslate('Hello World', true); // outputs 'OH HAI WURRLD'
	
	that's about it... have fun!
	
	
  ----------------------------------------------------------
Copyright (C) 2011 by Derek Anderson / Media Upstream

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

var LOLTranslate = function(str, c){
	var c = (typeof c === 'undefined' || c == false) ? false : true;
	var regExp = '';
	var dictionary = 	{
		'i can have': "i can has",
		'oh really'	: "orly",
		'seriously'	: "srsly",
		'uestion'		: "wesjun",
		
		/* 6 */
		'unless'		: "unles",
		'really'		: ["rly", "rily", "rilly", "rilley"],
		"you're"		: ["yore", "yr"],
		'buddah'		: 'ceiling cat',
		'kitten'		: 'kitteh',
		
		/* 5 */
		'cture'			: "kshur",
		'esque'			: "esk",
		'tious'			: "shus",
		'thank'			: ["fank", "tank", "thx", "thnx"],
		'world'			: ["wurrld", "whirld", "wurld", "wrld"],
		'hello'			: 'oh hai',
		'howdy'			: 'oh hai',
		'allah'			: 'ceiling cat',
		'diety'			: 'ceiling cat',
		'kitty'			: 'kitteh',
		
		
		/* 4 */
		'this'			: "thiz",
		'eady'			: "eddy",
		'what'			: ["wut", "whut"],
		'more'			: "moar",
		'sion'			: "shun",
		'just'			: "jus",
		'want'			: "waants",
		'eese'			: "eez",
		'ucke'			: ["ukki", "ukke"],
		'sion'			: "shun",
		'like'			: ["likes", "liek"],
		'love'			: ["loves", "lub", "lubs", "luv"],
		'outh'			: "owf",
		'scio'			: "shu",
		'ture'			: "chur",
		'sure'			: "shur",
		'were'			: "was",
		'ease'			: "eez",
		'have'			: ["has", "hav", "haz a"],
		'your'			: ["yur", "ur", "yore", "yoar"],
		'good'			: ["gud", "goed", "guud", "gude", "gewd"],
		'ight'			: "ite",
		'tion'			: "shun",
		
		
		/* 3 */
		'ome'				: "um",
		'are'				: ["r", "is", "ar"],
		'you'				: ["yu", "yous", "yoo", "u"],
		'the'				: "teh",
		'ose'				: "oze",
		'ead'				: "edd",
		'eak'				: "ekk",
		'age'				: "uj",
		'dog'				: "slowpaw",
		'who'				: "hoo",
		'ese'				: "eez",
		'too'				: ["to", "2"],
		'tty'				: "tteh",
		'thy'				: "fee",
		'que'				: "kwe",
		'oth'				: "udd",
		'ing'				: ["in", "ins", "ng", "ing"],
		'ove'				: ["oov", "ove", "uuv", "uv", "oove"],
		'for'				: ["fore", "4", "fr", "fur", "for", "foar"],
		"i'm"				: "im",
		'hey'				: 'oh hai',
		'god'				: 'ceiling cat',
		'cat'				: 'kitteh',
		
		/* 2 */
		'ph'				: "f",
		'as'				: "az",
		'my'				: ["muh", "mah"],
		'er'				: "r",
		'of'				: ["of", "ov", "of"],
		'is'				: ["ar teh", "ar"],
		'nd'				: "n",
		'ok'				: ["k", "kay"],
		'ym'				: "im",
		'ly'				: "li"
	};
	str = str.toLowerCase();
	
	for(k in dictionary){
		regExp += '('+k+')|';
	}
	regExp = regExp.slice(0, -1);
	
	var match = new RegExp(regExp, 'g');
	var matches = str.match(match);
	// nothing to replace, return home...
	if(!matches){ return (c) ? str.toUpperCase() : str; }
	
	for(var i=0, l=matches.length; i<l; i++){
		var replace = dictionary[matches[i]];
		if(typeof replace !== 'string'){
			replace = replace[ Math.floor(Math.random() * replace.length) ];
		}
		str = str.replace(matches[i], replace);
	}
	return (c) ? str.toUpperCase() : str;
	
	
	/* --- old method, maybe slower ---
	for (key in dictionary){
		var re = new RegExp(key, "g");
		var replace = dictionary[key];
		if(typeof replace == 'object'){
			// pick a random one
			var i = Math.floor(Math.random() * replace.length);
			replace = replace[i];
		}
		str = str.replace(re, replace);
	}
	return str.toUpperCase();
	*/
	
};