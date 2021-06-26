
$( window ).on( "load", function() {
	$( 'div.header-cover' ).css( 'opacity', 1);
});

$( function() {



	/*$( '#header-pianist' ).hover( function() {
		$( 'div.header-cover' ).css( 'background-image', "url( 'images/ld-jesse-warehouse-full.jpg' )" );
	}, function() {
		$( 'div.header-cover' ).css( 'background-image', "url( 'images/ld-jesse-prophet-full.jpg' )" );	
		});
		*/

	/*
	$( "#header-pianist" ).hover(
	  function() {
	    $( "#header-short-pianist-bio" ).addClass( "fadeIn");
	  }, function() {
	    $( "#header-short-pianist-bio" ).removeClass( "fadeIn" );
	  }
	);

	$( "#header-producer" ).hover(
	  function() {
	    $( "#header-short-producer-bio" ).addClass( "fadeIn");
	  }, function() {
	    $( "#header-short-producer-bio" ).removeClass( "fadeIn" );
	  }
	);

	$( "#header-engineer" ).hover(
	  function() {
	    $( "#header-short-engineer-bio" ).addClass( "fadeIn");
	  }, function() {
	    $( "#header-short-engineer-bio" ).removeClass( "fadeIn" );
	  }
	);

	*/

	

    /* To add to releases: Myoshi Marilla, Exenia, Laura Izibor, Anthony Hamilton, Kat Webb, Rachel Eckroth, PVD, deftrio, Julie Kathryn, Ezra Brown, Evan x Dana
    Manuals, Lakecia Monet Andre Henry 
    Exact Change Project, Wali Sanga, Michael Bennett
    Joseph Webb, Chris Rob
    https://www.jessefischer.com/discography/
    */



	/* TODO
		for each div.gig
		if data.date is in the future,
		fade in
	*/


	/* Add click handler for expand-truncate button on EPK */

	$('.expand-truncated').click( function( e ) {
		$('.truncated').removeClass( 'truncated' );
		$(this).hide();
	});

	/* Add click handler for mobile nav */

	$("button.hamburger").click( function( e ) {
		e.preventDefault();
		$("body").toggleClass( "mobile-nav-open");
		$("button.hamburger").toggleClass( "is-active" );
		return false;
	});

	// Initialize Press Quotes slider

	$('#press-quotes-slider').slick({
		dots: true,
		autoplay: true,
  		autoplaySpeed: 4000, // 5 sec
  		speed: 500, // 0.5 sec
  		cssEase: 'linear',
  		arrows: false,
  		draggable: false,
  		accessibility: false,
  		fade: true,
  		waitForAnimate: false
  		/*customPaging: function( slider, i ) {
  			return $('<a href="#"/>').text(i + 1);
  		},
  		appendDots: '#press-quotes-logos-container'*/
	});

	$('#press-quotes-slider').on( 'beforeChange', function( event, slick, currentSlide, nextSlide ) {
		$('div.logo-container').eq( currentSlide ).toggleClass( 'active' );
		$('div.logo-container').eq( nextSlide ).toggleClass( 'active' );
	});

	$('div.logo-container').each( function( i ) {
		$( this ).click( function() {
			$( '#press-quotes-slider' ).slick( 'slickGoTo', i );
		});
		$( this ).hover( function() {
			$( '#press-quotes-slider' ).slick( 'slickPause' ); // on mouseenter
		}, function() {
			$( '#press-quotes-slider' ).slick( 'slickPlay'); // on mouseleave
		});
	});



});
