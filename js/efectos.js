var somos = $('#somos').offset().top,
		productos = $('#nuestros').offset().top,
        ubicacion = $('#ubi').offset().top

$('#quienes-s').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: somos - 20
		}, 500);
	});

	$('#productos').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: productos - 40
		});
	});

    $('#ubicacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ubicacion - 40
		});
	});