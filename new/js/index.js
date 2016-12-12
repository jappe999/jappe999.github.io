$(document).ready(function() {
	var actives = 'body,.app header,#hamburger,.app main,#menu,.app footer';	
	$('#hamburger').on('click', function() {
		if($('#hamburger').hasClass('active'))
			$(actives).removeClass('active');
		else
			$(actives).addClass('active');
	});
});
