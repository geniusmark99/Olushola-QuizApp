var Id = (e)=> document.getElementById(e);
var $$ = (e)=> document.querySelector(e);
var queryAll = (e)=> document.querySelectorAll(e);

function html(dom,funct){
return Id(dom).innerHTML = funct();
}

function addEvent(dom,evt,func,bool=true){
if(window === dom ){
return dom.addEventListener(evt,func,bool);
}else{
return $$(dom).addEventListener(evt,func,bool);
}
}

function Click(dom,func){
if(window === dom ){
return dom.addEventListener("click",func);
}else{
return Id(dom).addEventListener("click",func);
}
}


function addClass(dom,classes){
return $$(dom).classList.add(classes);
}

function removeClass(dom,classes){
return $$(dom).classList.remove(classes);
}

 function toggleClass(dom,classes){
return $$(dom).classList.toggle(classes);
}

function containClass(dom,classes){
return $$(dom).classList.contains(classes);
}

function __JsonRender(pos,dom,json,func){
if(Array.isArray(json)){
Id(dom).insertAdjacentHTML(`${pos}`,`${json.map(func).join("")}`);
}else{
 console.warn(`please ${json} is not an array`);
}
}

function __miniRender(json,func){
if(Array.isArray(json)){
return(`${json.map(func).join("")}`);
}
}

function LoadStyles(styles){
if(Array.isArray(styles)){
styles.map(function(style){
document.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" type="text/css" href="${style}.css">`);
});
}
}


/* THIS IS A CUSTOM  FUNCTION FOR CREATING THE QUESTION AND THE BUTTON OPTIONS
i.e question 1 will automatically to assigned to button 1 for a particular subject
*/
function QuestionCreator(dom,domCont,func){
if(Array.isArray(domCont)){
Id(dom).insertAdjacentHTML("beforeend",`${domCont.map(func).join("")}`);
}
else{
 console.warn(`please ${domCont} is not an array`);
}

// document.getElementById(dom).insertAdjacentHTML('beforeend',domCont);
}


function QuestionBtnController(dom,domCont,func,scriptFunc){
if(Array.isArray(domCont)){
Id(dom).insertAdjacentHTML("beforeend",`${domCont.map(func).join("")}`);
scriptFunc()
}
else{
 console.warn(`please ${domCont} is not an array`);
}

// document.getElementById(domBtn).insertAdjacentHTML("beforeend",domContBtn)
}




