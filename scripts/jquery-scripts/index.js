$(function(){
	$('#button-barack-obama').on('click', function(){
		$("#barack-obama").toggleClass("hidden");
		$(this).toggleClass("btn-default btn-primary");
		$('#anchor-barack-obama').toggleClass("hidden");
		$('audio').each(function(){
			this.pause();
		});
	});

	$('#button-donald-trump').on('click', function(){
		$("#donald-trump").toggleClass("hidden");
		$(this).toggleClass("btn-default btn-warning");
		$('#anchor-donald-trump').toggleClass("hidden");
		$('video').each(function(){
			this.pause();
		});
	});

	$('#button-jack-ma').on('click', function(){
		$("#jack-ma").toggleClass("hidden");
		$(this).toggleClass("btn-default btn-danger");
		$('#anchor-jack-ma').toggleClass("hidden");
		$('video').each(function(){
			this.pause();
		});
	});

	$('#button-ho-chi-minh').on('click', function(){
		$("#ho-chi-minh").toggleClass("hidden");
		$(this).toggleClass("btn-default btn-success");
		$('#anchor-ho-chi-minh').toggleClass("hidden");
		$('video').each(function(){
			this.pause();
		});
	});
});

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top, .top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
			}, scroll_top_duration
		);
	});

	$('.go-top').on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
			}, scroll_top_duration
		);
	})

});