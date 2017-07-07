// Custom Scripts for Primal Template //

jQuery(function($) {
    "use strict";


/* --------- Wow Init ------ */

  new WOW().init();




/*----- Preloader ----- */

    $(window).onload = function() {
  		setTimeout(function() {
        $('#loading').fadeOut('slow', function() {
        });
      }, 500);
    };
/*----- owl-carousel ----- */
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
		navigation : false, 
		 autoHeight : false,
		 items : 1,
    margin : 0,
      paginationSpeed : 400,
      singleItem: true,
	  pagination: false,
      rewindSpeed: 500
	});

});
});
