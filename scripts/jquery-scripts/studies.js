$(function(){

	$('.my-content').on('mouseover', function () {
		desc = $(this).text(); //get the description
		$('#get-content').show();
		$('#get-content').text(desc);
	});

	$('.my-content').on('mouseout', function () {
		$('#get-content').text('');
	});

});