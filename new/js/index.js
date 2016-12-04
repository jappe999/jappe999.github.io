$(document).ready(function() {
	var actives = 'body,body>header,#hamburger,body>main,#menu,body>footer';	
	$('#hamburger').on('click', function() {
		if($('#hamburger').hasClass('active'))
			$(actives).removeClass('active');
		else
			$(actives).addClass('active');
	});
});