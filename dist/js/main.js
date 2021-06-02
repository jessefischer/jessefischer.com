
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

	// $( ".release-cover-play-btn" ).click( function() {
	// 	console.log( "hello" );
	// });

    

    /* To add to releases: Myoshi Marilla, Exenia, Laura Izibor, Anthony Hamilton, Kat Webb, Rachel Eckroth, PVD, deftrio, Julie Kathryn, Ezra Brown, Evan x Dana
    Manuals, Lakecia Monet Andre Henry 
    Exact Change Project, Wali Sanga, Michael Bennett
    Joseph Webb, Chris Rob
    https://www.jessefischer.com/discography/
    */


	/* Add English abbreviated month name method to JS Date object */

	Date.prototype.getMonthName = function() {
		var i = this.getUTCMonth();
		if ( i >= 0 && i < 12 ) {
			return ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'][i];
		}
		else {
			return 'NaM';
		}
	}


	/* Load gig and release info from respective JSON files */

	if ( $('script#gig-template').length ) {
		$.getJSON( "/data/gigs.json", function( gigs ) {
			console.log( gigs );
			var $el = $('div.gig-wrapper');
			if ( $el ) {
				$el.hide();
				var gigTemplate = _.template( $('script#gig-template').html() );
				var limit = $el.data( 'limit' ) || gigs.length;
				gigs.slice( 0, limit ).forEach ( function( gig ) {
					gig.date = new Date( gig.date );
					if ( gig.date >= Date.now() ) {
						$el.append( gigTemplate( gig ));
					}
				});
				$el.fadeIn();
			}
		});
	}

	if ( $('script#release-template').length ) {
		$.getJSON( "/data/releases.json", function( releases ) {
			for (var category in releases) {
				var $el = $('#' + category + '-discog');
				if ( $el ) {
					$el.hide();	
					var releaseTemplate = _.template( $('script#release-template').html() );
					var limit = $el.data( 'limit' ) || releases[category].length;
					releases[category].slice(0, limit).forEach( function( release ) {
					    $el.append( releaseTemplate( release ));		
					});
					$el.fadeIn();	
				}		
			}
		});
	}

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
