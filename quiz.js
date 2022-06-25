addEvent("#mobile-question-tab","click",function(){
addClass("#maths-options","show");
});

/* ------- Close Math Question Option -------- */
addEvent("#close-math-options","click",function(){
removeClass("#maths-options","show");
});

/*------ QUESTIONS SETTER FOR MATHS -------- */
QuestionCreator("math-questions",[
{name:"math",
display:"show",
question:"Which of this is not a set",
options:["null","empty","newtonias","Zero"],
no:1,
btnCtl:`${this.name}-1`
},
{name:"math",
display:"",
question:"Who Invented Calculus",
options:["Albert Einstein","Micheal Faraday","Isaac Newton","Mark Okechukwu"],
no:2,
btnCtl:`${this.name}-2`
},
{name:"math",
display:"",
question:"Who Invented Calculus",
options:["Albert Einstein","Micheal Faraday","Isaac Newton","Mark Okechukwu"],
no:3,
btnCtl:`${this.name}-3`
}
],function(e){
return `
<div class="question-container-question ${e.display}" id="${e.name}-questions-${e.no}">
<h3>question ${e.no}</h3>
<div>${e.question}</div>
<ol class="question-options" type="A">	
${ (Array.isArray(e.options)) ? 
(e.options.map(function(i){
 return `<li><input type="radio" value="${i}" name="${e.name}-question-${e.no}">${i}</li>`;
}).join(""))  : "No Options found"

}
</ol>
</div>`
});


QuestionBtnController("maths-questions-list",[
{
btnNo:1,
on:"active"
},
{btnNo:2}

],function(e){
return `<button class="btn-question ${e.on}" id="math-btn-${e.btnNo}">${e.btnNo}</button>`
},
function(){
// console.log("e");
});


/*FOR NEXT MATH QUESTION*/
addEvent("#next-math-question","click",function(){

var questionCount = queryAll(".question-container-question");
var nextSibling  = Id("math-questions-1").nextElementSibling;
var previousSibling  = Id("math-questions-1");
var previousBtn =  Id("previous-math-question");
previousBtn.classList.remove("disabled");
previousSibling.classList.remove("show");
nextSibling.classList.add("show");



// questionCount.forEach(function(e,i){
// console.log(e)
// });

});



/*FOR PREVIOUS QUESTION*/

addEvent("#previous-math-question","click",function(){
var questionCount = queryAll(".question-container-question");
var previousSibling  = Id("math-questions-2").previousElementSibling;
var lastSibling = Id("math-questions-1");
previousSibling.classList.add("show");


// For Next Btn 
var nextSibling  = Id("math-questions-1").nextElementSibling;
var previousSibling  = Id("math-questions-1");
var previousBtn =  Id("previous-math-question");
previousBtn.classList.add("disabled");
previousSibling.classList.add("show");
nextSibling.classList.remove("show");

// var previousSibling  = Id("math-questions-1");
// var previousBtn =  Id("previous-math-question");
// console.log("Hello");
})

/*END OF PREVIOUS MATHS QUESTIONS */


/*END OF MATHS QUESTIONS */



