(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
	
			//custom functions
//////////////////////////////////////
	//To change bg of navbar on clicking hamburger menu
	$(function (){
		$('.navbar-toggler-right').click(function() {
			var $nav = $(".navbar-fixed-top");
    		$nav.toggleClass('hamclick');
  		});
	})
		
	//To change bg of navbar on scroll
	$(function () {
  	$(document).scroll(function () {
    	var $nav = $(".navbar-fixed-top");
    		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  		});
	});
	
	// services js
	
$('.webDevHover').hover(function(){
    $(".descriptionText").html("<b>Web Development</b>: <br> We write our codes just the way harry porter swing his magical stick! Clean beautiful and fast! The final output of the projects is always the way our clients demand! And on a add-on to it, we work as we are our customer, and there by providing the most value for product! Equipped with the latest tech and as convenient it can get for the client!<br>    The codes are purely written on HTML, CSS, and JS and not using any links for external sites or repositories or libraries, because that increases the loading time of the website, and thus decreasing audience interaction on site and also poor SEO. We have developers who are covered with the basic of product management, so everytime we are concerned about the benefit of our customer. Also the websites get delivered only when they are approved by our product and design team, to assure the quality of visuals and technical things!<br>    We can also deliver to you if you need any specific technical changes like designing a website by no code platforms, and frameworks like React JS and Angular JS. We suggest talking to our sales team by scheduling a free call, but they will be biased on your side, and land you the best suggestions possible for you! Not from the point of our profitability!    ");
});
// $('.graphicsHover').hover(function(){
//     $(".descriptionText").html("<b>GRAPHIC DESIGN </b>:<br> One thing to clarify before you go ahead! Marketing is a part of the brands presence in social world! And selling anything to a customer which is completely baseless, is a ethic we believe in, we will be more than happy to work for you, but in a way which is real! No like selling online coding courses to 5yr old kids parents completely on hook of social status and money games!<br> Lets dive a bit into the way we work! We have learned the social media game completely on bases of our experimentation and our team has been in content world from 2019, not anywhere in front side of it, but in backend here and their silently observing all of it and the way it works most! We have people who have studies the nuances in human psychology, and neuroscience definitely not experts but little enough to know how to get eyeballs of your viewers! Our research team continuously works on the research of the things happening through, and get up with some amazing case studies and minute secretes to get ahead of the herd! <br> We deliver wide range of services from facebooks ads to google seo to content marketing! And no doubt we give 10000% everytime and everything we do, but we are proud to share that we are definitely good at all of them! And a main reason to that has been our senior management! They keeps a special eye on the work we do, and we are getting our clients good results or not! they analyse the process when not in favour and remove the barriers for the desired results, and also redesign the whole structure and process to get the necessary results.");
// });
$('.digiMarkHover').hover(function(){
    $(".descriptionText").html("<b> DIGITAL MARKETING </b>: <br> We believe design is a language older than humans! In olden times humans used design to depict the reality, it was in the restrictions of reality! Human might cam longer but the earth and the stories existed before that too! That???s why we say that design is a language older than humans! Just after the invention of camera design and art was free from the restrictions of reality! Now it was as free as it can be! And then the era of creative art in design started. <br> Well, very few things in us humans has not evolved from the savanas to the times we are in! And one of that few things is human mind and its way of approaching colours! There???s a thing caller colour psychology, and it is about how different colours have some silent messages in them, and it can approach and change your thinking when you see them! it can be used to position your brand in much more better way than it can be! Beside from the colour, theirs various things to look foe, when it???s about the design representing you! Aesthetics and type of art form used matters a lot! And here comes the role of our highly trained designers! Their design skills may be at a level where you can find more like them! But not the same goes with us! Like they have been taught things like marketing and psychology to get you the best results you need.<br> We understand the need of the customer; we track them the better replacements to it we can make and come up with better ideas and big thata the receipe of keeping your customers happy! We provide various design solutions like, logos social media templates, vectors, UI/UX and lot more other things! Do talk to our sales team before making your mind about our services!");
});
	
	
	
	
	
	
	
//////////////////////////////////////
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
