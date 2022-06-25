//========== Preview Btn Event ==========//
addEvent("#preview-quiz-questions","click",function(){
addClass("#typed-question-preview","show");
});

//========== For Questions Typed Question Event ==========//
// addEvent("#type-textarea","keyup",function(){
// console.log(Id("type-textarea").value);
// });

addEvent("#type-textarea","keydown",function(){
 Id("question-preview").innerText  = Id("type-textarea").value;
 if("" === Id("type-textarea").value){
   Id("question-preview").innerHTML  = ` <h3>Typed Question will be previewed Here.</h3>`;
 }else{
 Id("question-preview").innerText  = Id("type-textarea").value;
   
 }
// console.log();
});



//========== For Subject Topic Event ==========//
addEvent("#topic-inputer","keydown",function(){
 let inpuTer = Id("topic-inputer").value;
 Id("topic-preview").innerText = inpuTer;
});


addEvent("#topic-inputer","keyup",function(){
 let inpuTer = Id("topic-inputer").value;
 Id("topic-preview").innerText = inpuTer;
});

//========== Textarea typig Event ==========//
addEvent("#type-textarea","keydown",function(){
 // Id("preview-board").innerText  = Id("type-textarea").value;
// select-selected
// console.log(Id("type-textarea").value);
// console.log($$(".select-selected").innerText);
});

/*========== For Closing the Preview Dialog ==========*/
addEvent("#close-preview-dialog","click",function(){
removeClass("#typed-question-preview","show");
});

/*========== For Selected Subject to be previewed in the Previewed Board ==========*/
var selectSubject = Id('select-subject');

/* ========== Event for Subject to be Previewed ==========*/
addEvent("#select-subject","change",function(){
  let options = selectSubject.options[selectSubject.selectedIndex].innerHTML;
  Id("subject-preview").innerText =  options;
});

/* ========== Event for Topic to be Previewed ==========*/
// addEvent("#select-topic","change",function(){
//   let options = selectTopic.options[selectTopic.selectedIndex].innerHTML;
//   Id("topic-preview").innerText =  options;
// });

/* ========== Event for adding options  ==========*/
addEvent("#options-adder","click",function(e){
 var optionInput =  Id("option-input").value,
optionView = Id("option-view"),
optionViewLength = optionView.getElementsByClassName("option-options").length;

optionView.insertAdjacentHTML("beforeend",`
<div class="option-options">
<div class="input-checkbox">
<input type="checkbox" name="quest_${optionViewLength}_option">
</div>
<div id="quest_1_option">${optionInput}</div>
</div>
`);

optionInput  = "";
console.log(optionViewLength);
});


// options-adder