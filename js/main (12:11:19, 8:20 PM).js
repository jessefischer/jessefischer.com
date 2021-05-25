$( function() {

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

	$( ".release-cover-play-btn" ).click( function() {
		console.log( "hello" );
	});

    var releases = {
    	artist: [ 
		    {
		    	name: '<em>Cross Currents</em> EP',
		    	artistName: 'Jesse Fischer',
		    	year: '2019',
		    	coverImgUrl: 'https://f4.bcbits.com/img/a1133777961_2.jpg',
		    	extUrl: 'https://jessefischer.bandcamp.com/album/cross-currents'
		    },
		    {
		    	name: '<em>Flipped II</em>',
		    	artistName: 'Jesse Fischer',
		    	year: '2018',
		    	coverImgUrl: 'https://f4.bcbits.com/img/a2431327082_2.jpg',
		    	extUrl: 'https://jessefischer.bandcamp.com/album/flipped-ii'
		    },
		    {
		    	name: '<em>Day Dreamer</em>',
		    	artistName: 'Jesse Fischer',
		    	year: '2015',
		    	coverImgUrl: 'https://f4.bcbits.com/img/a0051261748_2.jpg',
		    	extUrl: 'https://jessefischer.bandcamp.com/album/day-dreamer'
		    },
		    {
		    	name: '<em>Vein Melter</em>',
		    	artistName: 'Jesse Fischer & Sly5thAve',
		    	year: '2015',
		    	coverImgUrl: 'https://f4.bcbits.com/img/a3117390578_2.jpg',
		    	extUrl: 'https://tru-thoughts.bandcamp.com/album/vein-melter'
		    },
		    {
		    	name: '<em>Retro Future</em>',
		    	artistName: 'Jesse Fischer & Soul Cycle',
		    	year: '2012',
		    	coverImgUrl: 'https://f4.bcbits.com/img/a0509965788_2.jpg',
		    	extUrl: 'https://jessefischer.bandcamp.com/album/retro-future'
		    },
		    {
		    	name: '<em>Homebrew</em>',
		    	artistName: 'Jesse Fischer & Soul Cycle',
		    	year: '2011',
		    	coverImgUrl: 'https://f4.bcbits.com/img/a3461640601_2.jpg',
		    	extUrl: 'https://jessefischer.bandcamp.com/album/homebrew'
		    },
		    {
		    	name: '<em>Flipped</em> EP',
		    	artistName: 'Jesse Fischer',
		    	year: '2010',
		    	coverImgUrl: 'https://f4.bcbits.com/img/a2683827745_2.jpg',
		    	extUrl: 'https://jessefischer.bandcamp.com/album/flipped'
		    },
		    {
		    	name: '<em>Mosaic</em>',
		    	artistName: 'Soul Cycle',
		    	year: '2009',
		    	coverImgUrl: 'https://f4.bcbits.com/img/a0374860851_2.jpg',
		    	extUrl: 'https://jessefischer.bandcamp.com/album/mosaic'
		    },

		],
		remix: [
		    {
		    	name: '“Saffron Yellow (Jesse Fischer Remix)”',
		    	artistName: 'Bryony Jarman-Pinto',
		    	year: '2019',
		    	coverImgUrl: 'https://f4.bcbits.com/img/a2065529439_2.jpg',
		    	extUrl: 'https://bryonyjarman-pinto.bandcamp.com/album/saffron-yellow-jesse-fischer-remix-all-about-life-wonky-logic-remix',
		    	label: 'Tru Thoughts'
		    },
		    {
		    	name: '“Loveline (Jesse Fischer Remix)”',
		    	artistName: 'Space Captain',
		    	year: '2018',
		    	coverImgUrl: 'https://f4.bcbits.com/img/a2012745360_16.jpg',
		    	extUrl: 'https://spacecaptainofficial.bandcamp.com/album/loveline-jesse-fischer-remix',
		    	label: 'Tru Thoughts'
		    },
		    {
		    	name: '“Breathing Underwater (Jesse Fischer Remix)”',
		    	artistName: 'Hiatus Kaiyote',
		    	year: '2017',
		    	coverImgUrl: 'https://i1.sndcdn.com/artworks-000235156730-k5s6tk-t500x500.jpg',
		    	extUrl: 'https://soundcloud.com/jessefischer/breathing-underwater-remix'
		    },
		    {
		    	name: '“Believer (Jesse Fischer Remix)”',
		    	artistName: 'Emily King',
		    	year: '2016',
		    	coverImgUrl: 'https://i1.sndcdn.com/artworks-000171413044-izd2f3-t500x500.jpg',
		    	extUrl: 'https://soundcloud.com/jessefischer/believer-remix'
		    }
		],
		sideman: [
			{
		    	name: '<em>War Chant</em> EP',
		    	artistName: 'Ajoyo',
		    	year: '2019',
		    	coverImgUrl: 'https://f4.bcbits.com/img/a0652481731_2.jpg',
		    	extUrl: 'https://ajoyo.bandcamp.com/album/war-chant-ep',
		    	label: 'Shems Records',
		    	description: 'Producer, Engineer, Mixing, Keyboards, Co-Writer'
		    },
		    {
		    	name: '<em>Unlearning</em>',
		    	artistName: 'C R O W N',
		    	year: '2019',
		    	coverImgUrl: 'https://f4.bcbits.com/img/a1110087840_2.jpg',
		    	extUrl: 'https://sheiscrown.bandcamp.com/album/unlearning',
		    	description: 'Producer, Engineer, Co-Writer, Keyboards, Bass, Guitar (&ldquo;Time Again&rdquo;, &ldquo;Drug&rdquo;, &ldquo;Fooling Everyone&rdquo;)'
		    },
		    {
		    	name: '<em>This Is Love</em>',
		    	artistName: 'Elise Testone',
		    	year: '2019',
		    	coverImgUrl: 'https://f4.bcbits.com/img/a1637207226_2.jpg',
		    	extUrl: 'https://elisetestonemusic.bandcamp.com/album/this-is-love',
		    	description: 'Producer, Engineer, Co-Writer, Keyboards'
		    },
		    {
		    	name: '“Let Me Unlove You”',
		    	artistName: 'August Moon',
		    	year: '2019',
		    	coverImgUrl: 'https://m.media-amazon.com/images/I/81j8busFLdL._SS500_.jpg',
		    	extUrl: 'https://open.spotify.com/track/440bEi1v9gZaLgASJJzk7T',
		    	description: 'Producer, Engineer, Mixing, Co-Writer, Keyboards'
		    },
		    {
		    	name: '“Knowbody Knows”',
		    	artistName: 'Darius Christian',
 		    	year: '2019',
		    	coverImgUrl: 'https://m.media-amazon.com/images/I/916O6n47CkL._SS500_.jpg',
		    	extUrl: 'https://open.spotify.com/track/7By4PQuzyPOmVG77Cv8Y4p',
		    	description: 'Producer, Engineer, Mixing, Co-Writer, Keyboards'
		    },
		    {
		    	name: '<em>Hawk Eyes</em>',
		    	artistName: 'Sanah Kadoura',
 		    	year: '2018',
		    	coverImgUrl: 'https://f4.bcbits.com/img/a2211425979_16.jpg',
		    	extUrl: 'https://open.spotify.com/album/3IsOJE6T0KrcrKCAti9hMT',
		    	description: 'Mixing'
		    },
		    {
		    	name: '“Spaceship”',
		    	artistName: 'Darius Christian',
 		    	year: '2018',
		    	coverImgUrl: 'https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/38/c0/2e/38c02e5c-fca7-321d-6210-7d63d327f38c/5054526480773_1.jpg/313x0w.jpg',
		    	extUrl: 'https://open.spotify.com/track/2FMOw66lBusddepe3y1ub3',
		    	description: 'Mixing'
		    },
		    {
		    	name: '“Feels Like”',
		    	artistName: 'Jazze Belle',
 		    	year: '2018',
		    	coverImgUrl: 'https://i.scdn.co/image/02329f24caaaf367fc8f974efcad99bfddb84933',
		    	extUrl: 'https://open.spotify.com/track/7CJrQMmLmzioFN4W550kFc',
		    	description: 'Mastering'
		    },
		    {
		    	name: '<em>NYEUSI</em>',
		    	artistName: 'Justin Brown',
 		    	year: '2018',
		    	coverImgUrl: 'https://f4.bcbits.com/img/a1313799600_16.jpg',
		    	extUrl: 'https://justinbrowndrums.bandcamp.com/album/nyeusi',
		    	label: 'Biophilia',
		    	description: 'Engineering, Mixing (“Replenish”, “FYFO”)'
		    },

		    {
		    	name: '“Forever Don‘t Exist”',
		    	artistName: 'Jazze Belle',
 		    	year: '2018',
		    	coverImgUrl: 'https://i1.sndcdn.com/artworks-000384952353-bqlehk-t500x500.jpg',
		    	extUrl: 'https://open.spotify.com/track/2QANWA6hOg9u289reRLs3x',
		    	description: 'Mixing'
		    },
		    {
		    	name: '<em>Reaching for Chiron</em>',
		    	artistName: 'BIGYUKI',
 		    	year: '2018',
		    	coverImgUrl: 'https://assets.rbl.ms/17323090/300x.jpg',
		    	extUrl: 'https://open.spotify.com/album/1ljHbAf0MThW7jEEYJQaiI?si=AUZ4NoBqQG66d9aLzAKH1w',
		    	description: 'Engineering (“Pom Pom”, “Eclipse”, “Nunu”, “Simple Like You”), Additional Production (“Simple Like You”)'
		    },
		    {
		    	name: '“Will Love Come Another Day”',
		    	artistName: 'Darius Christian',
 		    	year: '2018',
		    	coverImgUrl: 'https://m.media-amazon.com/images/I/A1WVKPbkZFL._SS500_.jpg',
		    	extUrl: 'https://open.spotify.com/track/5BUSZ3FRQ6nTaZe4zwoNZZ',
		    	description: 'Engineering, Mixing, Keyboards'
		    },
		    {
		    	name: '<em>The Centennial Trilogy</em>',
		    	artistName: 'Christian Scott aTunde Adjuah',
 		    	year: '2017',
		    	coverImgUrl: 'https://f4.bcbits.com/img/a0262555324_16.jpg',
		    	extUrl: 'https://christianscott.bandcamp.com/album/the-centennial-trilogy',
		    	description: 'Additional Engineering (“The Walk”, “Phases”)'
		    },

		    {
		    	name: '<em>The Saga II</em>',
		    	artistName: 'Morgan Guerin',
 		    	year: '2017',
		    	coverImgUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music127/v4/17/c2/1e/17c21e3a-4962-e988-2c38-9871011d8e11/191061611318.jpg/939x0w.jpg',
		    	extUrl: 'https://morganguerin.bandcamp.com/album/the-saga-ii',
		    	description: 'Engineering, Mastering'
		    },
		    
		    {
		    	name: '<em>Reckless Abandon</em>',
		    	artistName: 'Morgan James',
 		    	year: '2017',
		    	coverImgUrl: 'https://m.media-amazon.com/images/I/81bxQdLptSL._SS500_.jpg',
		    	extUrl: 'https://open.spotify.com/album/3gmLXuJwU0Kda1BJtOIrNm',
		    	description: 'Production, Co-Writer, Keyboards (“No Faith”)'
		    },
		    
		    {
		    	name: '<em>Brand New Heart</em>',
		    	artistName: 'Brenda Nicole Moorer',
 		    	year: '2017',
		    	coverImgUrl: 'https://www.soultracks.com/files/images/albums5/brendanicolemoorer-heart.jpg',
		    	extUrl: 'https://open.spotify.com/album/59mEHhFSw0HyazeZCqYALc',
		    	description: 'Producer, Engineer, Mixing, Co-Writer, Keyboards'
		    },

		]
	};

	var releaseTemplate = _.template(
    	$('script#release-template').html()
    );

	for (var category in releases) {
		releases[category].forEach( function( release ) {
		    $('#' + category + '-discog').append( releaseTemplate( release ));		
		});

	}




});
