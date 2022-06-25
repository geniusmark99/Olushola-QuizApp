var subjectChart = queryAll(".subject-charts");

addEvent(".more-menu","click",function(e){
    subjectChart.forEach(function (elem) {
	elem.classList.add('hide');
});
})

document.addEventListener('click',function(e){
if (!e.target.matches('[left-sidebar]')) return;
else{
subjectChart.forEach(function (elem) {
	elem.classList.remove('hide');
});
}
});
    
/*========== 
The __JsonRender Function is used create Multiple Content and the second paramter
(i.e: students-title-types) passed targets the id attribute in the Html Page Content
(id="students-title-types") as show below
 ========== */
__JsonRender("beforeend","students-title-types",[
{desc:"Student name",icon:true},
{desc:"Passed / Failed",icon:true},
{desc:"Score",icon:true},
{desc:"Grade",icon:true},
{desc:"Time Spent",icon:true},
{desc:"Submitted / Timeout",icon:true}],function(e){
return `
<div class="ST-t-sub">
<div class="ST-t-sub-desc">${e.desc}</div>
</div> 
`
});


__JsonRender("beforeend","students-info",[{
name:"Mark Okechukwu",
gender:"M",
grade:true,
scores:"49/50(98%)"
},
{
name:"Otuba Jayeoba",
gender:"M",
grade:false,
scores:"20/50(45%)"
},
{
name:"Mary Okechuku",
gender:"F",
grade:true,
scores:"45/50(90%)"
},
{
name:"Chinonye Okechuku",
gender:"F",
grade:true,
scores:"45/50(90%)"
},
{
name:"Chidera Okechukwu",
gender:"M",
grade:true,
scores:"40/50(45%)"
},

{
name:"Otuba Jayeoba",
gender:"M",
grade:false,
scores:"20/50(45%)"
}


],function(e){
return`
<div class="students-info-content">
<div class="students-pics-name">
  <div class="students-img">
    <img src="../images/${(e.gender === "M") ? "/male-user.svg" : "/female-user.svg"}" />
  </div>
  <div class="students-name">${e.name}</div>
</div>
<div class="students-${(e.grade) ? "pass":"fail"}">${(e.grade) ? "Passed":"Failed"}</div>
<div class="students-scores-${(e.grade) ? "pass":"fail"}">${e.scores}</div>
<div class="students-grade-${(e.grade) ? "pass":"fail"}">${(e.grade) ? "Excellent":"poor"}</div>
<div class="students-time-spent">22MIN</div>
<div class="students-submit-timeout">09 Feb 2022, 9:00AM</div>
</div>
`
})