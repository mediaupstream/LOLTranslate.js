## LOLTranslate - Javascript based LOLCat Translator
---

#### Usage:

Include this file in your project source and now you can translate a string
to LolSpeak like so  

	var catSays = LOLTranslate('Hello World'); 
	console.log(catSays); // outputs 'OH HAI WIRRLD'

You can pass false as a second param to return lowercase output:  

	var catSays = LOLTranslate('Hello World', false);
	console.log(catSays); // outputs 'oh hai wurrld'

Also check out the `bookmarklet.js` script, use it to LOLTranslate entire webpages on the fly :)

TRY IT OUT: <a href="javascript:(function(){if(typeof%20jQuery=='undefined'){var%20jQ=document.createElement('script');jQ.type='text/javascript';jQ.onload=bookmarklet;jQ.src='http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';document.body.appendChild(jQ);}else{bookmarklet();}function%20bookmarklet(){(function($){var%20LOLTranslate=function(h,g){var%20g=(typeof%20g===%22undefined%22||g==true)?true:false;var%20j=%22%22;var%20m={%22i%20can%20have%22:%22i%20can%20has%22,%22oh%20really%22:%22orly%22,seriously:%22srsly%22,uestion:%22wesjun%22,unless:%22unles%22,really:[%22rly%22,%22rily%22,%22rilly%22,%22rilley%22],%22you're%22:[%22yore%22,%22yr%22],buddah:%22ceiling%20cat%22,kitten:%22kitteh%22,cture:%22kshur%22,esque:%22esk%22,tious:%22shus%22,thank:[%22fank%22,%22tank%22,%22thx%22,%22thnx%22],world:[%22wurrld%22,%22whirld%22,%22wurld%22,%22wrld%22],hello:%22oh%20hai%22,howdy:%22oh%20hai%22,allah:%22ceiling%20cat%22,diety:%22ceiling%20cat%22,kitty:%22kitteh%22,%22this%22:%22thiz%22,eady:%22eddy%22,what:[%22wut%22,%22whut%22],more:%22moar%22,sion:%22shun%22,just:%22jus%22,want:%22waants%22,eese:%22eez%22,ucke:[%22ukki%22,%22ukke%22],sion:%22shun%22,like:[%22likes%22,%22liek%22],love:[%22loves%22,%22lub%22,%22lubs%22,%22luv%22],outh:%22owf%22,scio:%22shu%22,ture:%22chur%22,sure:%22shur%22,were:%22was%22,ease:%22eez%22,have:[%22has%22,%22hav%22,%22haz%20a%22],your:[%22yur%22,%22ur%22,%22yore%22,%22yoar%22],good:[%22gud%22,%22goed%22,%22guud%22,%22gude%22,%22gewd%22],ight:%22ite%22,tion:%22shun%22,ome:%22um%22,are:[%22r%22,%22is%22,%22ar%22],you:[%22yu%22,%22yous%22,%22yoo%22,%22u%22],the:%22teh%22,ose:%22oze%22,ead:%22edd%22,eak:%22ekk%22,age:%22uj%22,dog:%22slowpaw%22,who:%22hoo%22,ese:%22eez%22,too:[%22to%22,%222%22],tty:%22tteh%22,thy:%22fee%22,que:%22kwe%22,oth:%22udd%22,ing:[%22in%22,%22ins%22,%22ng%22,%22ing%22],ove:[%22oov%22,%22ove%22,%22uuv%22,%22uv%22,%22oove%22],%22for%22:[%22fore%22,%224%22,%22fr%22,%22fur%22,%22for%22,%22foar%22],%22i'm%22:%22im%22,hey:%22oh%20hai%22,god:%22ceiling%20cat%22,cat:%22kitteh%22,ph:%22f%22,as:%22az%22,my:[%22muh%22,%22mah%22],er:%22r%22,of:[%22of%22,%22ov%22,%22of%22],is:[%22ar%20teh%22,%22ar%22],nd:%22n%22,ok:[%22k%22,%22kay%22],ym:%22im%22,ly:%22li%22};h=h.toLowerCase();for(k%20in%20m){j+=%22(%22+k+%22)|%22;}j=j.slice(0,-1);var%20f=new%20RegExp(j,%22gm%22);var%20e=h.match(f);if(!e){return(g)?h.toUpperCase():h;}for(var%20d=0,b=e.length;d%3Cb;d++){var%20a=m[e[d]];if(typeof%20a!==%22string%22){a=a[Math.floor(Math.random()*a.length)];}h=h.replace(e[d],a);}return(g)?h.toUpperCase():h;};$('body').each(function(){traverseChildNodes(this);});function%20traverseChildNodes(node){var%20next;if(node.nodeType===1){if(node=node.firstChild){do{next=node.nextSibling;traverseChildNodes(node);}while(node=next);}}else%20if(node.nodeType===3){if(node.data.trim()!=''){node.data=LOLTranslate(node.data);}}}})(jQuery);}})();">Click Here to LOLTranslate this page</a>

---

`Copyright (C) 2011 by Derek Anderson / Media Upstream`

	MIT LICENSE

	PRMARSHUN AR TEH HREBY GRANTED, FREE OV CHARGE, TO ANY PRSON OBTAININS A COPY
	OV THIZ SOVTWAR AN AZSOCIATED DOCUMENTAZHUN FILES (TEH "SOVTWR"), TO DEAL
	IN TEH SOVTWAR WITHOUT RESTRICSHUN, INCLUDIN WITHOUT LIMITASHUN TEH RITES
	TO USE, COPY, MODIFY, MRGE, PUBLAR TEHH, DARTRIBUTE, SUBLICENSE, AN/OR SELL
	COPIES OV TEH SOVTWR, AN TO PRMIT PRSONS TO HOOM TEH SOFTWAR AR TEH
	FURNARHED TO DO SO, SUBJECT TO TEH FOLLOWNG CONARHUNS:

	TEH ABOOVE COPYRITE NOTICE AN THIZ PRMARSHUN NOTICE SHALL BE INCLUDED IN
	ALL COPIES OR SUBSTANTIAL PORSHUNS OF TEH SOFTWR.

	TEH SOFTWAR AR PROVIDED "AS AR", WITHOUT WARRANTY OF ANY KIN, EXPRESS OR
	IMPLIED, INCLUDIN BUT NOT LIMITED TO TEH WARRANTIES OF MRCHANTABILITY,
	FITNESS FOAR A PARTICULAR PURPOZE AN NONINFRNGEMENT. IN NO EVENT SHALL TEH
	AUTHORS OR COPYRITE HOLDRS BE LIABLE 4 ANY CLAIM, DAMUJS OR UDDR
	LIABILITY, WHETEHR IN AN ACSHUN OF CONTRACT, TORT OR UDDRWISE, ARISINS FROM,
	OUT OF OR IN CONNECSHUN WITH TEH SOFTWIS OR TEH USE OR UDDR DEALINGS IN
	TEH SOFTWAR.