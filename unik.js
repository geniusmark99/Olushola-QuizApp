document.head.insertAdjacentHTML('beforeend',"<style id='style'></style>");

var Unik = (function () {
'use strict';
var Constructor = function (selector="") {
this.selector = selector;
this.id = "style";
this.elems = selector;
if(this.selector){
var node = document.querySelector(this.selector) || document.body;
if(node.hasAttribute("style")){
node.removeAttribute("style");
}
if(node.hasAttribute("u-style")){
var str = node.getAttribute("u-style").trim();
const splitImp = str.split(",");
let splitsImp = splitImp.map(function(num) {
return num + "!important";
});
const replaceSplitsImp  = splitsImp.toString().replaceAll(',',";/");
document.getElementById(this.id).insertAdjacentText('beforeend',`${this.selector} { ${generateStyle(replaceSplitsImp)} }`);
}
// if(node.hasAttribute("unik")){
// var unik = node.getAttribute("unik");
// if(unik.startsWith("[") && unik.endsWith("]")){
//  var unikSubString = unik.slice(1,-1).split(",");
//  let splitsUnik = unikSubString.map(function(num) {
// return "unik-"+num;
// });

//   console.log(splitsUnik.toString());
//   // node.setAttribute(splitsUnik.toString());
// }
// }
else {return true;}
}

};



function commaRemover(stringToSplit="") {
var arrayOfStrings = stringToSplit.split(",");
return arrayOfStrings.join('');
}

function startReplaceWith(starts="",selector="",replacer="") {
if(starts.startsWith(selector)){
var res = starts.replace(selector,replacer);
return(res);
}else {
return(false);
}
}

function startWith(starts,selector) {
if(starts.startsWith(selector)){
return true;
}else {
return false;
}
}



function generateStyle(e=""){
var myString = e.split(`/`);
var add = myString.map(function(num) {
switch(true) {
case startWith(num,'bg:'):
return(startReplaceWith(num,'bg:','background:'));
break;
case startWith(num,'bg-col:'):
return(startReplaceWith(num,'bg-col:','background-color:'));
break;
case startWith(num,'bg-clip:'):
return(startReplaceWith(num,'bg-clip:','background-clip:'));
break;
case startWith(num,'bg-sz:'):
return(startReplaceWith(num,'bg-sz:','background-size:'));
break;
case startWith(num,'bg-origin:'):
return(startReplaceWith(num,'bg-origin:','background-origin:'));
break;
case startWith(num,'bg-repeat:'):
return(startReplaceWith(num,'bg-repeat:','background-repeat:'));
break;
case startWith(num,'bg-visible:'):
return(startReplaceWith(num,'bg-visible:','background-visible:'));
break;
case startWith(num,'bg-pos:'):
return(startReplaceWith(num,'bg-pos:','background-position:'));
break;
case startWith(num,'bg-pos-x:'):
return(startReplaceWith(num,'bg-pos-x:','background-position-x:'));
break;
case startWith(num,'bg-pos-y:'):
return(startReplaceWith(num,'bg-pos-y:','background-position-y:'));
break;
case startWith(num,'bg-attach:'):
return(startReplaceWith(num,'bg-attach:','background-attachment:'));
break;
case startWith(num,'bg-img:'):
return(startReplaceWith(num,'bg-img:','background-image:'));
break;
case startWith(num,'caret-col:'):
return(startReplaceWith(num,'caret-col:','caret-color:'));
break;
case startWith(num,'l:'):
return(startReplaceWith(num,'l:','left:'));
break;
case startWith(num,'r:'):
return(startReplaceWith(num,'r:','right:'));
break;
case startWith(num,'align-cont:'):
return(startReplaceWith(num,'align-cont:','align-content:'));
break;
case startWith(num,'align-items:'):
return(startReplaceWith(num,'align-items:','align-items:'));
break;
case startWith(num,'align-self:'):
return(startReplaceWith(num,'align-self:','align-self:'));
break;
case startWith(num,'anim:'):
return(startReplaceWith(num,'anim:','animation:'));
break;
case startWith(num,'anim-name:'):
return(startReplaceWith(num,'anim-name:','animation-name:'));
break;
case startWith(num,'anim-dur:'):
return(startReplaceWith(num,'anim-dur:','animation-duration:'));
break;
case startWith(num,'anim-play:'):
return(startReplaceWith(num,'anim-play:','animation-play-state:'));
break;
case startWith(num,'anim-timing:'):
return(startReplaceWith(num,'anim-timing:','animation-timing-function:'));
break;
case startWith(num,'anim-delay:'):
return(startReplaceWith(num,'anim-delay:','animation-delay:'));
break;
case startWith(num,'anim-dir:'):
return(startReplaceWith(num,'anim-dir:','animation-direction:'));
break;
case startWith(num,'anim-fill:'):
return(startReplaceWith(num,'anim-fill:','animation-fill-mode:'));
break;
case startWith(num,'anim-iteration:'):
return(startReplaceWith(num,'anim-iteration:','animation-iteration-count:'));
break;
case startWith(num,'box-sz:'):
return(startReplaceWith(num,'box-sz:','box-sizing:'));
break;
case startWith(num,'box-sha:'): 
return(startReplaceWith(num,'box-sha:','box-shadow:'));
break;
case startWith(num,'b:'): 
return(startReplaceWith(num,'b:','bottom:'));
break;
case startWith(num,'cont:'):
return(startReplaceWith(num,'cont:','content:'));
break;
case startWith(num,'clip-path:'):
return(startReplaceWith(num,'clip-path:','clip-path:'));
break;
case startWith(num,'dis:'):
return(startReplaceWith(num,'dis:','display:'));
break;
case startWith(num,'col:'): 
return(startReplaceWith(num,'col:','color:'));
break;
case (startWith(num,'just-self:')): 
return(startReplaceWith(num,'just-self:','justify-self:'));
break;
case (startWith(num,'just-items:')): 
return(startReplaceWith(num,'just-items:','justify-items:'));
break;
case (startWith(num,'just-cont:')): 
return(startReplaceWith(num,'just-cont:','justify-content:'));
break;
case (startWith(num,'w:')):
return(startReplaceWith(num,'w:','width:'));
break;
case (startWith(num,'max-w:')): 
return(startReplaceWith(num,'max-w:','max-width:'));
break;
case (startWith(num,'min-w:')): 
return(startReplaceWith(num,'min-w:','min-width:'));
break;
case (startWith(num,'h:')): 
return(startReplaceWith(num,'h:','height:'));
break;
case (startWith(num,'max-h:')): 
return(startReplaceWith(num,'max-h:','max-height:'));
break;
case (startWith(num,'min-h:')): 
return(startReplaceWith(num,'min-h:','min-height:'));
break;
case (startWith(num,'bor:')): 
return(startReplaceWith(num,'bor:','border:'));
break;
case (startWith(num,'bor-t:')): 
return(startReplaceWith(num,'bor-t:','border-top:'));
break;
case (startWith(num,'bor-l:')): 
return(startReplaceWith(num,'bor-l:','border-left:'));
break;
case (startWith(num,'bor-r:')): 
return(startReplaceWith(num,'bor-r:','border-right:'));
break;
case (startWith(num,'bor-b:')): 
return(startReplaceWith(num,'bor-b:','border-bottom:'));
break;
case (startWith(num,'bor-inline:')): 
return(startReplaceWith(num,'bor-inline:','border-inline:'));
break;
case (startWith(num,'bor-s:')): 
return(startReplaceWith(num,'bor-s:','border-style:'));
break;
case (startWith(num,'g-col:')): 
return(startReplaceWith(num,'g-col:','grid-column:'));
break;
case (startWith(num,'wri-mode:')): 
return(startReplaceWith(num,'wri-mode:','writing-mode:'));
break;
case (startWith(num,'g-row:')): 
return(startReplaceWith(num,'g-row:','grid-row:'));
break;
case (startWith(num,'g-tem-cols:')): 
return(startReplaceWith(num,'g-tem-cols:','grid-template-columns:'));
break;
case (startWith(num,'g-auto-cols:')): 
return(startReplaceWith(num,'g-auto-cols:','grid-auto-columns:'));
break;
case (startWith(num,'g-auto-rows:')): 
return(startReplaceWith(num,'g-auto-rows:','grid-auto-rows:'));
break;
case (startWith(num,'g-auto-flow:')): 
return(startReplaceWith(num,'g-auto-flow:','grid-auto-flow:'));
break;
case (startWith(num,'g-row-start:')): 
return(startReplaceWith(num,'g-row-start:','grid-row-start:'));
break;
case (startWith(num,'g-row-end:')): 
return(startReplaceWith(num,'g-row-end:','grid-row-end:'));
break;
case (startWith(num,'g-area:')): 
return(startReplaceWith(num,'g-area:','grid-area:'));
break;
case (startWith(num,'g-row-end:')): 
return(startReplaceWith(num,'g-row-end:','grid-row-end:'));
break;
case (startWith(num,'g-col-start:')): 
return(startReplaceWith(num,'g-col-start:','grid-column-start:'));
break;
case (startWith(num,'g-col-end:')): 
return(startReplaceWith(num,'g-col-end:','grid-column-end:'));
break;
case (startWith(num,'g-tem-rows:')): 
return(startReplaceWith(num,'g-tem-rows:','grid-template-rows:'));
break;
case (startWith(num,'g-tem-areas:')): 
return(startReplaceWith(num,'g-tem-areas:','grid-template-areas:'));
break;
case (startWith(num,'gap-y:')): 
return(startReplaceWith(num,'gap-y:','row-gap:'));
break;
case (startWith(num,'gap-x:')): 
return(startReplaceWith(num,'gap-x:','column-gap:'));
break;
// case (startWith(num,'r-gap:')): 
// return(startReplaceWith(num,'r-gap:','row-gap:'));
// break;
// case (startWith(num,'c-gap:')): 
// return(startReplaceWith(num,'c-gap:','column-gap:'));
// break;
case (startWith(num,'bor-w:')): 
return(startReplaceWith(num,'bor-w:','border-width:'));
break;
case (startWith(num,'bor-col:')): 
return(startReplaceWith(num,'bor-col:','border-color:'));
break;
case (startWith(num,'bor-rad:')): 
return(startReplaceWith(num,'bor-rad:','border-radius:'));
break;
case (startWith(num,'bor-tl-rad:')): 
return(startReplaceWith(num,'bor-tl-rad:','border-top-left-radius:'));
break;
case (startWith(num,'bor-tr-rad:')): 
return(startReplaceWith(num,'bor-tr-rad:','border-top-right-radius:'));
break;
case (startWith(num,'bor-bl-rad:')): 
return(startReplaceWith(num,'bor-bl-rad:','border-bottom-left-radius:'));
break;
case (startWith(num,'bor-br-rad:')): 
return(startReplaceWith(num,'bor-br-rad:','border-bottom-right-radius:'));
break;
case (startWith(num,'col:')): 
return(startReplaceWith(num,'col:','color:'));
break;
case (startWith(num,'cur:')): 
return(startReplaceWith(num,'cur:','cursor:'));
break;
case (startWith(num,'m:')): 
return(startReplaceWith(num,'m:','margin:'));
break;
case (startWith(num,'m-t:')): 
return(startReplaceWith(num,'m-t:','margin-top:'));
break;
case (startWith(num,'m-l:')): 
return(startReplaceWith(num,'m-l:','margin-left:'));
break;
case (startWith(num,'m-r:')): 
return(startReplaceWith(num,'m-r:','margin-right:'));
break;
case (startWith(num,'m-b:')): 
return(startReplaceWith(num,'m-b:','margin-bottom:'));
break;
case (startWith(num,'m-x:')): 
let mL = (startReplaceWith(num,'m-x:','margin-left:')),
 mR = (startReplaceWith(num,'m-x:','margin-right:'))
return [`${mR};`,mL];
break;
case (startWith(num,'m-y:')): 
let mT = (startReplaceWith(num,'m-y:','margin-top:')),
 mB = (startReplaceWith(num,'m-y:','margin-bottom:'))
return [`${mT};`,mB];
break;
case (startWith(num,'p:')): 
return(startReplaceWith(num,'p:','padding:'));
break;
case (startWith(num,'p-t:')): 
return(startReplaceWith(num,'p-t:','padding-top:'));
break;
case (startWith(num,'p-l:')): 
return(startReplaceWith(num,'p-l:','padding-left:'));
break;
case (startWith(num,'p-r:')): 
return(startReplaceWith(num,'p-r:','padding-right:'));
break;
case (startWith(num,'p-b:')): 
return(startReplaceWith(num,'p-b:','padding-bottom:'));
break;
case (startWith(num,'p-y:')): 
let pT = (startReplaceWith(num,'p-y:','padding-top:')),
 pB = (startReplaceWith(num,'p-y:','padding-bottom:'))
return [`${pT};`,pB];
break;
case (startWith(num,'p-x:')): 
let pR = (startReplaceWith(num,'p-x:','padding-right:')),
 pL = (startReplaceWith(num,'p-x:','padding-left:'))
return [`${pR};`,pL];
break;
case (startWith(num,'gap:')): 
return(startReplaceWith(num,'gap:','gap:'));
break;
case (startWith(num,'ft-sz:')): 
return(startReplaceWith(num,'ft-sz:','font-size:'));
break;
case (startWith(num,'ft-style:')): 
return(startReplaceWith(num,'ft-style:','font-style:'));
break;
case (startWith(num,'ft-fam:')): 
return(startReplaceWith(num,'ft-fam:','font-family:'));
break
case (startWith(num,'ft-w:')): 
return(startReplaceWith(num,'ft-w:','font-weight:'));
break;
case (startWith(num,'ft-k:')): 
return(startReplaceWith(num,'ft-k:','font-kerning:'));
break;
case (startWith(num,'ft-str:')): 
return(startReplaceWith(num,'ft-str:','font-stretch:'));
break;
case (startWith(num,'ft-var:')): 
return(startReplaceWith(num,'ft-var:','font-variant:'));
break;
case (startWith(num,'ft-var-lig:')): 
return(startReplaceWith(num,'ft-var-lig:','font-variant-ligatures:'));
break;
case (startWith(num,'flex-dir:')): 
return(startReplaceWith(num,'flex-dir:','flex-direction:'));
break;
case (startWith(num,'flex:')): 
return(startReplaceWith(num,'flex:','flex:'));
break;
case (startWith(num,'shrink:')): 
return(startReplaceWith(num,'shrink:','flex-shrink:'));
break;
case (startWith(num,'float:')): 
return(startReplaceWith(num,'float:','float:'));
break;
case (startWith(num,'flex-w:')): 
return(startReplaceWith(num,'flex-w:','flex-wrap:'));
break;
case (startWith(num,'opac:')): 
return(startReplaceWith(num,'opac:','opacity:'));
break;
case (startWith(num,'fill:')): 
return(startReplaceWith(num,'fill:','fill:'));
break;
case (startWith(num,'txt-align:')): 
return(startReplaceWith(num,'txt-align:','text-align:'));
break;
case (startWith(num,'txt-align-ls:')): 
return(startReplaceWith(num,'txt-align-ls:','text-align-last:'));
break;
case (startWith(num,'txt-transform:')): 
return(startReplaceWith(num,'txt-transform:','text-transform:'));
break;
case (startWith(num,'txt-orien:')): 
return(startReplaceWith(num,'txt-orien:','text-orientation:'));
break;
case (startWith(num,'t:')): 
return(startReplaceWith(num,'t:','top:'));
break;
case (startWith(num,'trans:')): 
return(startReplaceWith(num,'trans:','transition:'));
break;
case (startWith(num,'transform:')): 
return(startReplaceWith(num,'transform:','transform:'));
break;
case (startWith(num,'line-h:')): 
return(startReplaceWith(num,'line-h:','line-height:'));
break;
case (startWith(num,'list-s-type:')): 
return(startReplaceWith(num,'list-s-type:','list-style-type:'));
break;
case (startWith(num,'list-s-img:')): 
return(startReplaceWith(num,'list-s-img:','list-style-image:'));
break;
case (startWith(num,'list-s-pos:')): 
return(startReplaceWith(num,'list-s-pos:','list-style-position:'));
break;
case (startWith(num,'list-s:')): 
return(startReplaceWith(num,'list-s:','list-style:'));
break;
case (startWith(num,'line-h-step:')): 
return(startReplaceWith(num,'line-h-step:','line-height-step:'));
break;
case (startWith(num,'over:')): 
return(startReplaceWith(num,'over:','overflow:'));
break;
case (startWith(num,'over-x:')): 
return(startReplaceWith(num,'over-x:','overflow-x:'));
break;
case (startWith(num,'over-y:')): 
return(startReplaceWith(num,'over-y:','overflow-y:'));
break;
case (startWith(num,'out:')): 
return(startReplaceWith(num,'out:','outline:'));
break;
case (startWith(num,'out-s:')): 
return(startReplaceWith(num,'out-s:','outline-style:'));
break;
case (startWith(num,'out-col:')): 
return(startReplaceWith(num,'out-col:','outline-color:'));
break;
case (startWith(num,'out-w:')): 
return(startReplaceWith(num,'out-w:','outline-width:'));
break;
case (startWith(num,'out-o:')): 
return(startReplaceWith(num,'out-o:','outline-offset:'));
break;
case (startWith(num,'order:')): 
return(startReplaceWith(num,'order:','order:'));
break;
case (startWith(num,'txt-d:')): 
return(startReplaceWith(num,'txt-d:','text-decoration:'));
break;
case (startWith(num,'txt-d-line:')): 
return(startReplaceWith(num,'txt-d-line:','text-decoration-line:'));
break;
case (startWith(num,'txt-d-col:')): 
return(startReplaceWith(num,'txt-d-col:','text-decoration-color:'));
break;
case (startWith(num,'txt-d-style:')): 
return(startReplaceWith(num,'txt-d-style:','text-decoration-style:'));
break;
case (startWith(num,'txt-d-thick:')): 
return(startReplaceWith(num,'txt-d-thick:','text-decoration-thickness:'));
break;
case (startWith(num,'txt-d-line:')): 
return(startReplaceWith(num,'txt-d-line:','text-decoration-line:'));
break;
case (startWith(num,'txt-d-skip:')): 
return(startReplaceWith(num,'txt-d-skip:','text-decoration-skip:'));
break;
case (startWith(num,'txt-d-skip-ink:')): 
return(startReplaceWith(num,'txt-d-skip-ink:','text-decoration-skip-ink:'));
break;
case (startWith(num,'txt-indent:')): 
return(startReplaceWith(num,'txt-indent:','text-indent:'));
break;
case (startWith(num,'txt-render:')): 
return(startReplaceWith(num,'txt-render:','text-rendering    :'));
break;
case (startWith(num,'txt-sha:')): 
return(startReplaceWith(num,'txt-sha:','text-shadow:'));
break;
case (startWith(num,'txt-sz-adj:')): 
return(startReplaceWith(num,'txt-sz-adj:','text-size-adjust:'));
break;
case (startWith(num,'txt-just:')): 
return(startReplaceWith(num,'txt-just:','text-justify:'));
break;
case (startWith(num,'txt-over:')): 
return(startReplaceWith(num,'txt-over:','text-overflow:'));
break;
case (startWith(num,'txt-emp:')): 
return(startReplaceWith(num,'txt-emp:','text-emphasis:'));
break;
case (startWith(num,'txt-emp-off:')): 
return(startReplaceWith(num,'txt-emp-off:','text-emphasis-offset:'));
break;
case (startWith(num,'txt-emp-col:')): 
return(startReplaceWith(num,'txt-emp-col:','text-emphasis-color:'));
break;
case (startWith(num,'txt-under-off:')): 
return(startReplaceWith(num,'txt-under-off:','text-underline-offset:'));
break;
case (startWith(num,'txt-under-pos:')): 
return(startReplaceWith(num,'txt-under-pos:','text-underline-position:'));
break;
case (startWith(num,'txt-emp-style:')): 
return(startReplaceWith(num,'txt-emp-style:','text-emphasis-style:'));
break;
case (startWith(num,'txt-emp-pos:')): 
return(startReplaceWith(num,'txt-emp-pos:','text-emphasis-position:'));
break;
case (startWith(num,'txt-upright:')): 
return(startReplaceWith(num,'txt-upright:','text-combine-upright:'));
break;
case (startWith(num,'pos:')): 
return(startReplaceWith(num,'pos:','position:'));
break;
case (startWith(num,'pla-content:')): 
return(startReplaceWith(num,'pla-content:','place-content:'));
break;
case (startWith(num,'pla-items:')): 
return(startReplaceWith(num,'pla-items:','place-items:'));
break;
case (startWith(num,'pla-self:')): 
return(startReplaceWith(num,'pla-self:','place-self:'));
break;
case (startWith(num,'let-space:')): 
return(startReplaceWith(num,'let-space:','letter-spacing:'));
break;
case (startWith(num,'txt-space:')): 
return(startReplaceWith(num,'txt-space:','white-space:'));
break;
case (startWith(num,'web-ft-smooth:')): 
return(startReplaceWith(num,'web-ft-smooth:','-webkit-font-smoothing:'));
break;
case (startWith(num,'z:')): 
return(startReplaceWith(num,'z:','z-index:'));
break;
default:
// return console.error(`${num} selector "Does not exist"`);
return num;
break;


}


});
var uS = [...new Set(add)].toString();
return commaRemover(uS);
}


//COMING BACK


function CheckChild(child="",selector = ">"){
if(child === ""){
return "";
}else {
return `${selector}` + child;
}
}



Constructor.prototype.style = function(child="",el="",s=">") {
var app = this.elems
if("" === el){
   console.warn(`selector should not be empty in:`);
}else{
document.getElementById(this.id).insertAdjacentText('beforeend',`${app + CheckChild(child,s)}{${generateStyle(el)}}`);
}

return this;
};

Constructor.prototype.styleMultiple = function(child,el="",s=">") {
var app = this.elems;
var selector = this.selector;
if(Array.isArray(child) && child.length >= 1){
var childs = child.map(function(selectors) {
var sel = selector.startsWith(".") ? `.${app + CheckChild(selectors,s)}` : `${app + CheckChild(selectors,s)}`;
return sel;
});
var render = childs + `{${generateStyle(el)}}`;
document.getElementById(this.id).insertAdjacentText('beforeend',render);
}else {
   console.warn(`${child} is must be an Array and Array must contain one or more selectors`);
}
return this;
}


Constructor.prototype.selection = function(child="",el="",selectors="",s="") {
try {
var app = this.selector;
var x = document.querySelector(app).tagName.toLowerCase() || "";
if(Array.isArray(child)){
var childs = child.map(function(selectors) {
var sel = app.startsWith(".") ? `.${app + CheckChild(selectors,s)}::selection` : `${app + CheckChild(selectors,s)}::selection`;
return sel;
});
var render = childs + `{${generateStyle(el)}}`;
document.getElementById(this.id).insertAdjacentText('beforeend',render);
}else {
document.getElementById(this.id).insertAdjacentText('beforeend',(child)? 
`${app + CheckChild(child,selector)}::selection{${generateStyle(el)}}`
 : 
`::selection{${generateStyle(el)}}`
 );
}

}catch(err){
   console.warn(err);
}
return this;
};


Constructor.prototype.active = function(child="", el="",selector=">") { 
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',`${app + CheckChild(child,selector)}:active{${generateStyle(el)}}`);
return this;
};

Constructor.prototype.visited = function(child="", el="",selector=">") { 
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',
  `${app + CheckChild(child,selector)}:visited{${generateStyle(el)}}`);
return this;
};

Constructor.prototype.target = function(child="", el="",selector=">") { 
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',`${app + CheckChild(child,selector)}:target{${generateStyle(el)}}`);
return this;
};

Constructor.prototype.autofill = function(child="", el="") { 
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',
    `${app + CheckChild(child) }:autofill{${generateStyle(el)}}
    ${app + CheckChild(child) }:-webkit-autofill{${generateStyle(el)}}`);
return this;
};

Constructor.prototype.checked = function(child="", el="") { 
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',`${app + CheckChild(child) }:checked{${generateStyle(el)}}`)
return this;
}

Constructor.prototype.checkedChild = function(child="", el="",selector=">") { 
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',`${(app)+":checked" + CheckChild(child,selector) }{${generateStyle(el)}}`)
return this;
}


Constructor.prototype.hover = function(child="", el="",selector=">") { 
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',`${app + CheckChild(child,selector) }:hover{${generateStyle(el)}}`)
return this;
};


Constructor.prototype.hoverChild = function(child="",el="",selector=">") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',`${(app)+":hover " + CheckChild(child,selector)  }{${generateStyle(el)}}` );
return this;
};



Constructor.prototype.focus = function(child="",el="",selector=">") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',
    `${app + CheckChild(child,selector) }:focus{${generateStyle(el)}}`);
return this;
};


Constructor.prototype.focusWithin = function(child="",el="",selector=">") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',`${app + CheckChild(child,selector) }:focus-within{${generateStyle(el)}}` );
return this;
};

Constructor.prototype.focusVisible = function(child="",el="",selector=">") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',`${app + CheckChild(child) }:focus-visible{${generateStyle(el)}}`);
return this;
};

Constructor.prototype.focusChild= function(child="",el="",selector=">") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',`${(app)+":focus " + child}{${generateStyle(el)}}`);
return this;
};


Constructor.prototype.after = function(el="") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',`${app}::after{${generateStyle(el)}}`);
return this;
};


Constructor.prototype.before = function(el="") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',`${app}::before{${generateStyle(el)}}` );
return this;

};


Constructor.prototype.keyframes = function(keyframesName="",el="") {
document.getElementById(this.id).insertAdjacentText('beforeend',`
@keyframes ${keyframesName} {${el}}
`);
return this;
};

Constructor.prototype.portrait = function(child="",el="",selector=">") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',`
@media(orientation: portrait) {
${`${app + CheckChild(child,selector)}`}{
${generateStyle(el)}
}
}
`);
return this;
};

Constructor.prototype.landscape = function(child="",el="") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',`
@media(orientation: landscape) {
${`.${app + CheckChild(child)}`}{
${generateStyle(el)}
}
}
`);
return this;
};



Constructor.prototype.mediaQueryMaxWidth = function(mediaQ="",child="",el="",selector=">") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',`
@media screen and (max-width: ${mediaQ}) {
${`${app + CheckChild(child,selector)}`}{
${generateStyle(el)}
}
}
`);
return this;
};

Constructor.prototype.mediaQueryMinWidth = function(mediaQ="",child="",el="",selector=">") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',`
@media screen and (min-width: ${mediaQ}) {
${`${app + CheckChild(child,selector)}`}{
${generateStyle(el)}
}
}
`);
return this;
};



Constructor.prototype.firstLetter = function(el="") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',`${app}::first-letter{${generateStyle(el)}}`);
return this;
};

Constructor.prototype.is = function(el="",child="",style="",selector="") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',`${`:is(${el})` + CheckChild(child,selector)}{${generateStyle(style)}}`);
return this;
};

// Where pseudo-class is same as is pseudo-class except it has 0 specificity  
Constructor.prototype.where = function(el="",child="",style="",selector="") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend', 
 `${`:where(${el})` + CheckChild(child,selector)}{${generateStyle(style)}}`);
return this;
};

Constructor.prototype.lastChild = function(el="") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',`${app}:last-child{${generateStyle(el)}}`);
return this;
};


Constructor.prototype.firstChild = function(el="") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',`${app}:first-child{${generateStyle(el)}}`);
return this;
};

Constructor.prototype.firstLine = function(el="") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',`${app}:first-line{${generateStyle(el)}}`);
return this;
};


Constructor.prototype.marker = function(el="") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',`${app}:marker{${generateStyle(el)}}`);
return this;
};

Constructor.prototype.placeholder = function(child="",el="",selector=">") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',
    `${app + CheckChild(child,selector)}::placeholder{${generateStyle(el)}}`);
return this;
};

Constructor.prototype.placeholderShown = function(child="",el="",selector=">") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',`${app + CheckChild(child,selector)}::placeholder-shown{${generateStyle(el)}}`);
return this;
};



Constructor.prototype.fileSelectorButton = function(child="",el="",selector=">") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',(
`${app + CheckChild(child,selector)}::file-selector-button{${generateStyle(el)}}
${app + CheckChild(child,selector)}::-webkit-file-upload-button{${generateStyle(el)}}
${app + CheckChild(child,selector)}::-ms-browse{${generateStyle(el)}}
`));
return this;
};


Constructor.prototype.fileSelectorButtonHover = function(child="",el="",selector=">") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',(
`${app + CheckChild(child,selector)}::file-selector-button:hover{${generateStyle(el)}}
${app + CheckChild(child,selector)}::-webkit-file-upload-button:hover{${generateStyle(el)}}
${app + CheckChild(child,selector)}::-ms-browse:hover{${generateStyle(el)}}
`));
return this;
};


Constructor.prototype.fileSelectorButtonFocus = function(child="",el="",selector=">") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',(
`${app + CheckChild(child,selector)}::file-selector-button:focus{${generateStyle(el)}}
${app + CheckChild(child,selector)}::-webkit-file-upload-button:focus{${generateStyle(el)}}
${app + CheckChild(child,selector)}::-ms-browse:focus{${generateStyle(el)}}
`));
return this;
};


Constructor.prototype.nthChild = function(nth="",el="") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',(`${app}:nth-child(${nth}){${generateStyle(el)}}`));
return this;
};

Constructor.prototype.nthLastOfType = function(nth="",el="") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',(`${app}:nth-last-of-type(${nth}){${generateStyle(el)}}`));
return this;
};

Constructor.prototype.nthOfType = function(nth="",el="") {
var app = this.elems;
document.getElementById(this.id).insertAdjacentText('beforeend',(
`${app}:nth-of-type(${nth}){${generateStyle(el)}}`));
return this;
};

Constructor.prototype.reset = function(el) {
document.head.insertAdjacentHTML('afterbegin',`<style type="text/css" id="unik-normalize-$%000">
${el ? `*,html,body{${generateStyle(el)}}` : ""}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}</style>`);
return this;
};


Constructor.prototype.root = function(root,comment=`${this.elems} root variable`) {
document.getElementById(this.id).insertAdjacentText('afterbegin',`:root {${"\n/*" +comment +"*/"}${(root)}}`)
return this;
};



Constructor.prototype.darkMode = function(darkMode="",child="",style="",selector=">") {
var app = this.selector;
try {
var x = document.querySelector(app).tagName.toLowerCase() || "";
document.getElementById(this.id).insertAdjacentText('beforeend',` ${(child)?
   `${x + darkMode + CheckChild(child,selector)}{${generateStyle(style)}}`:
  `${x + darkMode} {${generateStyle(style)}}`}`);

}catch(err){
console.warn(`${darkMode} DarkMode tag Selector is passed to the declared tag: Pass the declared ${(darkMode.startsWith('.')? `class attribute ("${darkMode}") to the tag` : `id attribute ("${darkMode}") to the tag`)}`);
}
return this;
};






var instantiate = function (selector) {
return new Constructor(selector);
};
return instantiate;
})();
