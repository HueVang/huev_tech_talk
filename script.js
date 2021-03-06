sliderInt = 1;
sliderNext = 2;

$(document).ready(function(){
	$("#slideshow > img#1").fadeIn(500);
	startSlider();

	$("#slideshow > img").hover(
	function() {
		stopLoop();
	},
	function() {
		startSlider();
	}
);
});

function startSlider() {
	count = $("#slideshow > img").size();

	loop = setInterval(function() {

		if(sliderNext > count) {
			sliderNext = 1;
			sliderInt = 1;
		}

		$("#slideshow > img").fadeOut(500);
		$("#slideshow > img#"+sliderNext).fadeIn(500);

		sliderInt = sliderNext;
		sliderNext = sliderNext + 1;

	}, 3000)
}

function prev() {
	newSlide = sliderInt - 1;
	showSlide(newSlide);
}

function next() {
	newSlide = sliderInt + 1;
	showSlide(newSlide);
}

function stopLoop() {
	window.clearInterval(loop);
}

function showSlide(id) {
	stopLoop();
	if(id > count) {
			id = 1;
		}else if(id < 1){
			id = count;
		}

		$("#slideshow > img").fadeOut(500);
		$("#slideshow > img#"+id).fadeIn(500);

		sliderInt = id;
		sliderNext = id + 1;
		startSlider();
}
