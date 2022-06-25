/*FOR SIDEBAR LIST CONTENT */
__JsonRender("beforeend","side-bar-ul",[
{
active:"active",
icon:"tutorial-home-icon",
desc:"Home"
},
{
active:"",
icon:"e-learning-icon",
desc:"My Courses"
},
{
active:"",
icon:"favourite-icon",
desc:"Favourite"
},
{
active:"",
icon:"test-icon",
desc:"Test"
},
{
active:"",
icon:"achievement-icon",
desc:"Achievement"
},
{
active:"",
icon:"certificate-icon",
desc:"Certificate"
},
{
active:"",
icon:"settings-icon",
desc:"Settings"
}
],function(e){
return `
 <li class="sidebar-ul-list ${e.active}">
<div class="s-bar-icons">
<svg>
	<use href="#${e.icon}"></use>
</svg>
</div>
<div class="s-bar-icons-desc">${e.desc}</div>
</li> 
`
});

/********************* For user details info when clicked **********************/
addEvent("#user-log-details","click",function(){
addClass("body","overflow-hidden");
localStorage.setItem('tutorialUserShow', "show");
addClass("#user-details-pop",localStorage.getItem("tutorialUserShow"));
});

/********************* For closing user details info when clicked **********************/
addEvent("#close-user-details-pop","click",function(){
removeClass("body","overflow-hidden");
localStorage.removeItem("tutorialUserShow");
removeClass("#user-details-pop","show");
});

/*FOR USING KEY STROKE SHOTCUT FOR OPENIN USER DETAILED */

window.addEventListener("keydown", event => {
// Disable on Production Host to lock Key strokes for Security Reasons, Open for Development Purpose Only
/*if(event.ctrlKey  && event.code === "KeyS"){
event.preventDefault();
}
if(event.ctrlKey  && event.shiftKey && event.code === "KeyI"){
event.preventDefault();
}
if(event.code  === "F12"){
event.preventDefault();
}*/
if(event.code  === "Escape" ){
if(containClass("#user-details-pop","show")){
localStorage.removeItem("tutorialUserShow");
removeClass("#user-details-pop","show");	
}
return false;
}

if(event.ctrlKey  && event.code === "KeyU") {
event.preventDefault();
localStorage.setItem("tutorialUserShow","show");
addClass("#user-details-pop",localStorage.getItem("tutorialUserShow"));
}

});

/**************** For mobile click Sidebar ********************/
addEvent("#mob-hamburger","click",function(){
addClass("#side-bar","show");
addClass("#main-content","add-fixed-pos");
addClass("body","overflow-hidden");
});

/******************* For closing Mobile Sidebar ****************************/
addEvent("#close-mob-side","click",function(){
removeClass("#side-bar","show");
removeClass("#main-content","add-fixed-pos");
removeClass("body","overflow-hidden");
});

/*************** For Retaining User Pop UI even after Refresh *******************/
window.onload = function(){
addClass("#user-details-pop",localStorage.getItem("tutorialUserShow"));
};


/********************* For Rendering id="app-cont-sub-1" html **************************/
html("app-cont-sub-1",function(){return `
	<div id="mob-user-name">Hi Mark,</div>
	<div class="what-questiion-txt"><h2>What will you learn today?</h2></div>
	<div id="main-slider">
	<div id="course-slider">
	<!-- style="background-image: url('../Trash/download.png');" -->
    <div  id="course-slider-inner">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
      <div class="swiper-slide">Slide 5</div>
      <div class="swiper-slide">Slide 5</div>
      <div class="swiper-slide">Slide 5</div>
      
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
   
  </div>
    </div>
	
	</div>
	<div id="learning-path">
	<div id="learning-path-txt-desc">
	<h3>Your learning path</h3>
	</div>
	<div id="learning-path-cont">
	<div class="L-path-C-sub">
	<div class="L-path-C-sub-1">
	<h3>Intro to React</h3>
	<p class="learning-path-txt">12 hours of<br/>
	Video Tutorials</p>
	</div>
	<div class="L-path-C-sub-2">
	<div class="comment-no">
	433 Comments
	</div>
	<div class="L-path-C-sub-star-img">
	<div class="L-path-C-sub-img">
	<img src="../images/user-img.svg">
	<img src="../images/user-img.svg">
	<img src="../images/user-img.svg">
	<img src="../images/user-img.svg">
	</div>
	<div class="star-rating">
	<div class="icons">
	<svg id="big-star-icon">
	<use href="#big-star"></use>
	</svg>
	</div>
	<div class="small-icons">
	<div class="small-icons-cont">
	<svg id="small-star-icon">
	<use href="#small-star"></use>
	</svg>
	</div>
	<div class="small-icons-cont">
	<svg id="small-star-icon">
	<use href="#small-star"></use>
	</svg>
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>
	<div class="L-path-C-sub">
	<div class="L-path-C-sub-1">
	<h3>Become a Manager</h3>
	<p class="learning-path-txt">8 hours of<br/>
	Video Tutorials</p>
	</div>
	<div class="L-path-C-sub-2">
	<div class="comment-no">
	485 Comments
	</div>
	<div class="L-path-C-sub-star-img">
	<div class="L-path-C-sub-img">
	<img src="../images/user-img.svg">
	<img src="../images/user-img.svg">
	<img src="../images/user-img.svg">
	<img src="../images/user-img.svg">
	</div>
	<div class="star-rating">
	<div class="icons">
	<svg id="big-star-icon">
	<use href="#big-star"></use>
	</svg>
	</div>
	<div class="small-icons">
	<div class="small-icons-cont">
	<svg id="small-star-icon">
	<use href="#small-star"></use>
	</svg>
	</div>
	<div class="small-icons-cont">
	<svg id="small-star-icon">
	<use href="#small-star"></use>
	</svg>
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>
	<div class="L-path-C-sub">
	<div class="L-path-C-sub-1">
	<h3>Sketch from A to Z</h3>
	<p class="learning-path-txt">24 hours of<br/>
	Video Tutorials</p>
	</div>
	<div class="L-path-C-sub-2">
	<div class="comment-no">
	433 Comments
	</div>
	<div class="L-path-C-sub-star-img">
	<div class="L-path-C-sub-img">
	<img src="../images/user-img.svg">
	<img src="../images/user-img.svg">
	<img src="../images/user-img.svg">
	<img src="../images/user-img.svg">
	</div>
	<div class="star-rating">
	<div class="icons">
	<svg id="big-star-icon">
	<use href="#big-star"></use>
	</svg>
	</div>
	<div class="small-icons">
	<div class="small-icons-cont">
	<svg id="small-star-icon">
	<use href="#small-star"></use>
	</svg>
	</div>
	<div class="small-icons-cont">
	<svg id="small-star-icon">
	<use href="#small-star"></use>
	</svg>
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>`});


/*****************For Courses *****************/
__JsonRender("beforeend","coures-in-progress-list",[
{
courseName:"Build Your First Application",
courseSubject:"Codenighter",
bgColor:"FE9BB7"
},
{
courseName:"Build something beautiful",
courseSubject:"Sketch",
bgColor:"F7CE73"
},
{
courseName:"Firebase on Android:Cloud Fire",
courseSubject:"Firebase",
bgColor:"92D4E3"
},
{
courseName:"Create Custom Animations",
courseSubject:"Priniple",
bgColor:"B9E3D5"
},

],function(e){
	return `
    <div class="coures-in-progress-list-sub">

		<div class="C-list-1">
			<div class="C-list-1-cont" style="--bg:#${e.bgColor}">
				icon
			</div>
			<div class="course-progress-desc-txt">
				<h4>${e.courseName}</h4>
				<span>${e.courseSubject}</span>
			</div>
		</div>
    		
    		<div class="C-list-2 icon">
    			<svg>
    				<use href="#arrow-right"></use>
    			</svg>
    		</div>

    	</div>
    </div>
	`

});

/*FOR SWIPER SLIDER*/
 var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
/*END OF SWIPER SLIDER*/