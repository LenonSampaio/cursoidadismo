(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);


 document.body.onresize = function() {
  var largura = document.body.clientWidth;
  if (largura >= 1024) {
   $('#sidebar').addClass('active');
   $('.custom-menu').addClass('d-none');
  }else{
   $('#sidebar').removeClass('active');
   $('.custom-menu').removeClass('d-none');
  }
 };



		$(document).ready(function () {
			var largura = document.body.clientWidth;
			if (largura >= 1024) { 
				$('#sidebar').addClass('active');
				$('.custom-menu').addClass('d-none');
				
			   }else{
				$('#sidebar').removeClass('active');
				$('.custom-menu').removeClass('d-none');
			   }


		});
