$(document).ready(function(){
	var showed = false;
	var selected = "none";

	var descriptions = {
		crackplan: '<p>Crackplan is an app designed to share events with your closest friends! :)</p><p>Is very similar to instagram, but focused in events like parties, karts, movies, etc.</p>'
			+'<p>I\'m a co-founder of this startup. I developed and launched a web app, but our users decided that they would only use crackplan as a mobile app. Actually, the app is in development, and will be ready very soon.</p>'
			+'<p><strong>Technologies used: Ruby on Rails, Ionic, AngularJS</strong></p>'
			+'<p><strong>Website: www.crackplan.com</strong></p>',
		gourmetbox: '<p>In Gourmet box, we offered high-quality lunches throught our website. I was co-founder of this startup, and developed the full website, frontend and backend, from scratch.</p>'
			+'<p>I had a really good mentor, Hernán Aracena, who is a successful entrepreneur, founder of oja.la. He taught me a LOT about the entire process of how to build a succesful startup.</p>'
			+'<p><strong>Technologies used: HTML, CSS, jQuery, PHP (codeigniter), MySQL</strong></p>'
			+'<p><strong>Website: www.gourmetbox.co</strong></p>',
		homesquad: '<p>Homesquad is a startup that offers an awesome cleaning service, throught our website.</p>'
			+'<p>I have been helping in the development of the webpage, and also learned a lot about the process of how to build a startup, how to work with a remote team (we are all distributed) and technical stuff in rails. We are in growing phase, and offering service in Bogota and Mexico city.</p>'
			+'<p>Homesquad guys: if you are reading this, you are amazing. :)</p>'
			+'<p><strong>Technologies used: Ruby on Rails</strong></p>'
			+'<p><strong>Website: www.homesquad.co</strong></p>',
		pedalr: '<p>Pedalr is a marketplace for people who love bikes</p>'
			+'<p>Is a thoughtfully curated marketplace devoted to urban bikes and bike culture. We exhibit the best of new and used urban cycles, cycling gear, and fashion.</p>'
			+'<p>Pedalr is re-launching very soon, offering services in San Francisco.</p>'
			+'<p><strong>Technologies used: Ruby on Rails</strong></p>'
			+'<p><strong>Website: www.pedalr.com</strong></p>',
		solo1: '<p>So1o was a christian event. It took place in panama city, gathering christian students from all latinoamerica and the caribean</p>'
			+'<p>I developed a registration system for an event, which had ~2000 atendees. Every one of them choosed several workshops, and the web app helped to organize the logistics for the event.</p>'
			+'<p><strong>Technologies used: PHP (codeigniter), HTML, CSS</strong></p>'
			+'<p><strong>Website: http://vidaestudiantil.com/So1o</strong></p>',
		icfes: 
			'<p>ICFES is a Colombian governmental institution, dedicated to the evaluation of education in Colombia. Every year, they made a national test to ~2 millions of students between 8-16 years old. I worked for them as backend developer, helping to support 14 information systems.</p>'
			+'<p><strong>Technologies used: Java EE 6, Java server faces, oracle database</strong></p>'
			+'<p><strong>Website: http://www.icfesinteractivo.gov.co/</strong></p>'
	};

	var extraStuff = {
		perks: '<p><strong>Perks of hiring me:</strong></p>'
			+ '<ul>'
			+ '<li>I\'m passionate about learning</li>'
			+ '<li>I\'m a detail oriented person</li>'
			+ '<li>Bachelor in computer science</li>'
			+ '<li>I have high emotional intelligence qualities</li>'
			+ '<li>I\'ll find something meaningful to do if devoid of a task list given to me, </li>'
			+ '<li>Sometimes i\'m funny</li>'
			+ '</ul>',
		skills: '<p><strong>My skills:</strong></p>'
			+ '<ul>'
			+ '<li>HTML, CSS, LESS, SASS, javascript, jQuery</li>'
			+ '<li>AngularJS and Ionic</li>'
			+ '<li>Ruby on rails, PostgreSQL, heroku, AWS</li>'
			+ '<li>HAML, RSpec, Capybara, MySQL, PostgreSQL</li>'
			+ '<li>Github, bitbucket</li>'
			+ '<li>I can easily code pages from PSD files</li>'
			+ '<li>I love entrepreneurship and startups, and know a thing or two about the process</li>'
			+ '</ul>'
	};

	$(".img-portfolio").click(function(event) {
		$('.imac-screen').html('');
	  $('.imac-screen').css('background-image', 'url(assets/img/' + event.target.id + '-screen.jpg)');
		if(showed === true){
		  if(event.target.id === selected){
			  $(".project-description" ).slideUp("slow", function() {
		  		showed = false;
		  		selected = "none";
			  });
		  }
		  else{
		  	selected = event.target.id;
				$('.project-description').fadeOut(function() {
			  	$(this).html(descriptions[event.target.id]).fadeIn();
				});
		  }
		}
		else{
	  	$('.project-description').html(descriptions[event.target.id]);
		  $(".project-description").slideDown("slow", function() {
	  		showed = true;	
		  	selected = event.target.id;
		  });
		  $('.imac-screen').css('background-image', 'url(assets/img/' + event.target.id + '-screen.jpg)');
		}
	});

	$('.macbookair').click(function() {
		console.log("eneterin");
		$('.extra-stuff-container').css('background', 'url()');
  	$('.extra-buttons-wrapper').slideDown("slow", function() {});
	});

	$('.extra-button').click(function(event){
	  $('.imac-screen').css('background-image', 'url(assets/img/empty-screen.jpg)');
		$('.imac-screen').fadeOut(function() {
			if(event.target.id === "social"){
	  		$('.imac-screen').load('assets/js/social-pages.html').fadeIn();
			}
			else{
	  		$('.imac-screen').html('<div class="wrapper">' + extraStuff[event.target.id] + '</p>').fadeIn();
			}
		});
	});
});