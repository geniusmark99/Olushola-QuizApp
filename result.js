//========== The LoadStyles function is used to load CSS Styles ==========// 
LoadStyles(["../styles/Variable","../styles/web"]);

/*========== 
The __JsonRender Function is used create Multiple Content and the second paramter
(i.e: ddC-select-topics) passed targets the id attribute in the Html Page Content
(id="ddC-select-topics") as show below
 ========== */
__JsonRender("beforeend","ddC-select-topics",
[
{
subject:"maths",
subjectTopic:['Algebraic',"Sets","Venn Diagram",'Algebraic',"Sets","Venn Diagram",'Algebraic',
"Sets","Venn Diagram",'Algebraic',"Sets","Venn Diagram"],
subjectTitle:"Mathematics",
},
{
subject:"english",
subjectTopic:['Noun',"Verb","Sentence"],
subjectTitle:"English Language",
},
{
subject:"physic",
subjectTopic:['Motion',"Vector and Scalar","Elasticity"],
subjectTitle:"Physics",
},
{
subject:"chem",
subjectTopic:['Motion',"Vector and Scalar","Elasticity"],
subjectTitle:"Chemistry",
},


],
function(e){
return `
<div class="subject-content" id='${e.subject}-subject-content'>
<div id="${e.subject}-topics-selector" class="subjects-sub-topics">
<div class="subjects-sub-topics-desc">${e.subjectTitle}</div>
<div class="subjects-sub-topics-list">
<svg class="svg-sm collapse-arrow" id="${e.subject}-topics">
<use xlink:href="#collapse-arrow"></use>
</svg>
</div>
</div>
<div class="subject-topics-list" id="${e.subject}-subject-topics-list">
<ul>

${ (Array.isArray(e.subjectTopic)) ? 
(e.subjectTopic.map(function(i){
 return `
<li class="subject-topics-li">
<div>
<input type="checkbox" class="svg-checkbox-input"  name="${(i).toLowerCase()}-checkbox">
</div>
<div>${i}</div>
</li>`;
}).join(""))  : "No topics found"

}
</ul>
</div>
</div>
`
});



// ========== End Render Start Quiz Content ========== //


addEvent("[search-btn]",'click',function(){
addClass("[search-btn]","active");
addClass("[search-box]","active");
addClass("input","active");
addClass("[cancel-btn]","active");
addClass(".svg-icons","hide");
addClass("#logo","hide");
addClass("#search-desc-txt","hide");
// addClass("[desk-side-bar]","stay");
});


addEvent("[cancel-btn]",'click',function(){
removeClass("[search-btn]","active");
removeClass("[search-box]","active");
removeClass("input","active");
removeClass("[cancel-btn]","active");
removeClass(".svg-icons","hide");
removeClass("#logo","hide");
removeClass("#search-desc-txt","hide");
if(containClass('[mob-search-dropdown]',"show")) {
removeClass("[mob-search-dropdown]","show");
}else {
removeClass("[mob-search-dropdown]","show");
}
});


addEvent("[input-search-data]",'input',function(){
if($$("[input-search-data]").value === ""){
removeClass('[mob-search-dropdown]',"show");
}else {
addClass('[mob-search-dropdown]',"show")
}
});

addEvent(".more-menu","click",function(e){
addClass("[left-sidebar]","show");
addClass("body","hide-overflow");
removeClass("[search-btn]","active");
removeClass("[search-box]","active");
removeClass("input","active");
removeClass("[cancel-btn]","active");
removeClass(".svg-icons","hide");
removeClass("[mob-search-dropdown]","show");
removeClass("#logo","hide");
});


document.addEventListener('click',function(e){
if (!e.target.matches('[left-sidebar]')) return;
else{
removeClass("[left-sidebar]","show");
removeClass("body","hide-overflow");
}
});


addEvent("[close]",'click',function(){
removeClass("[left-sidebar]","show");
removeClass("body","hide-overflow");
});


// DARK MODE 
  // var app = document.getElementById("body");
    var app = document.getElementsByTagName("BODY")[0];

    if (localStorage.lightMode == "dark") {
        app.setAttribute("dark-mode", "dark");
    }

function DarkMode() {
    var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "dark") {
        localStorage.lightMode = "light";
        app.setAttribute("dark-mode", "light");
    } else {
        localStorage.lightMode = "dark";
        app.setAttribute("dark-mode", "dark");
    }
}

window.addEventListener(
    "storage",
    function () {
        if (localStorage.lightMode == "dark") {
            app.setAttribute("dark-mode", "dark");
        } else {
            app.setAttribute("dark-mode", "light");
        }
    },
    false
);
// END OF DARK MODE LOCALSTORAGE


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
addClass("[top-nav]","top-zero");
removeClass("[top-nav]","top-50px");
} else {
removeClass("[top-nav]","top-zero");
addClass("[top-nav]","top-50px");
}
prevScrollpos = currentScrollPos;
};

function ShowNotification() {
if(containClass("#notification-dropdown","show")) {
removeClass("#notification-dropdown","show");
removeClass(".notification","active");
}
else {
addClass("#notification-dropdown","show");
addClass(".notification","active");
}
}


addEvent("#notification-close","click",function(){
removeClass("#notification-dropdown","show");
removeClass(".notification","active");
});


function StartQuiz(){
addClass("#start-quiz-selected-subjects","show");
addClass("body","hide-overflow");
addClass(".start-quiz-class","active");
removeClass("[left-sidebar]","show");

}

function RemoveStartQuiz(){
removeClass("body","hide-overflow");
removeClass("#start-quiz-selected-subjects","show");
removeClass(".start-quiz-class","active");
}

addEvent("#close-quiz-selected-subjects","click",function(){
removeClass("body","hide-overflow");
removeClass("#start-quiz-selected-subjects","show");
removeClass(".start-quiz-class","active");
});

addEvent("#select-subject","click",function(){
if(containClass("#select-subject-arrow","rotate")) {
removeClass("#select-subject-arrow","rotate");
removeClass("#ddC-select-subject","show");
}else {
addClass("#select-subject-arrow","rotate");    
addClass("#ddC-select-subject","show");
}
});

// addEvent("#select-subject-close","click",function(){
// alert("ok");
// });

addEvent("#select-topics","click",function(){
if(containClass("#select-topics-arrow","rotate")) {
removeClass("#select-topics-arrow","rotate");
removeClass("#ddC-select-topics","show");
}else {
addClass("#select-topics-arrow","rotate");    
addClass("#ddC-select-topics","show");
}
});


addEvent("#set-time","click",function(){
if(containClass("#set-time-arrow","rotate")) {
removeClass("#set-time-arrow","rotate");
removeClass("#ddC-set-time","show");
}else {
addClass("#set-time-arrow","rotate");    
addClass("#ddC-set-time","show");
}
});

// ========== Select Subjects ========== //
var mathCheck = Id("maths-checkbox"),
englishCheck = Id("english-checkbox"),
physicsCheck = Id("physic-checkbox"),
chemCheck = Id("chem-checkbox");


//For Maths Checkbox
function AllSubjectClick(e,ele) {
 addEvent(`input[id='${e}-checkbox']`,"click",function(){
 if(ele.checked) {
addClass(`#${e}-topics-selector`,"show");
addClass("#no_subject_selected","hide");
addClass(`#${e}-subject-content`,"show");
 }else {
removeClass(`#${e}-topics-selector`,"show");
removeClass(`#no_subject_selected`,"hide");
removeClass(`#${e}-topics`,"rotate");
removeClass(`#${e}-subject-topics-list`,"show");
removeClass(`#${e}-subject-content`,"show");
 }
});
}


function AllTopicClick(e){
addEvent(`#${e}-topics`,"click",function(){
 if(containClass(`#${e}-topics`,"rotate")) {
removeClass(`#${e}-topics`,"rotate");
removeClass(`#${e}-subject-topics-list`,"show");
}else {
addClass(`#${e}-topics`,"rotate");
addClass(`#${e}-subject-topics-list`,"show");
}
});
}

// COME BACK

AllSubjectClick("maths",mathCheck);
AllTopicClick("maths");

AllSubjectClick("english",englishCheck);
AllTopicClick("english");

AllSubjectClick("physic",physicsCheck);
AllTopicClick("physic");

AllSubjectClick("chem",chemCheck);
AllTopicClick("chem");

function CreateQuiz() {
addClass("#create-quiz-content","show");
}

function RemoveCreateQuiz() {
removeClass("#create-quiz-content","show");
}



// ========== End Of Select Subjects ========== //

// ========== For Selecting All  ========== //
addEvent("#select-all-subject","click",function(){
mathCheck.checked = true;    
englishCheck.checked = true;
physicsCheck.checked = true;
chemCheck.checked = true;
addClass("#maths-topics-selector","show");
addClass("#english-topics-selector","show");
addClass("#physic-topics-selector","show");
addClass("#chem-topics-selector","show");
addClass("#no_subject_selected","hide");
});

// ========== End Of Selecting All  ========== //
window.addEventListener("keydown", event => {
if(event.code  === "Escape" ){
removeClass("body","hide-overflow");
RemoveStartQuiz();
if(containClass("[search-box]","active")) {
removeClass("[search-btn]","active");
removeClass("[search-box]","active");
removeClass("input","active");
removeClass("[cancel-btn]","active");
removeClass(".svg-icons","hide");
removeClass("#logo","hide");
removeClass("#search-desc-txt","hide");
}
}

if(event.ctrlKey  && event.code === "KeyS") {
event.preventDefault();
addClass("body","hide-overflow");
StartQuiz();
}

// if(event.ctrlKey  && event.code === "KeyC") {
// event.preventDefault();
// CreateQuiz();
// }

// if(event.code === "KeyR") {
// alert("you clicked on R");
// }

// if(event.code === "KeyS") {
// alert("you clicked on S");
// }
});
