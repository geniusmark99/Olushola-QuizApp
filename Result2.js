
function searchInput() {
var input, filter, studentInfo, studentInfoCont, studentN, i;
input = document.getElementById("search-input");
filter = input.value.toUpperCase();
studentInfo = document.getElementById("students-info");
studentInfoCont = studentInfo.getElementsByClassName("students-info-content");
for (i = 0; i < studentInfoCont.length; i++) {
studentName = studentInfoCont[i].getElementsByClassName("students-name")[0];
if (studentName) {
if (studentName.innerHTML.toUpperCase().indexOf(filter) > -1) {
studentInfoCont[i].style.display = "";
} else {
studentInfoCont[i].style.display = "none";
}
}
}
}

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
