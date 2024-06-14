  // -----------
  // Debugger that shows view port size. Helps when making responsive designs.
  // -----------

  function showViewPortSize(display) {
    if(display) {
      var height = $(window).height();
      var width = $(window).width();
      $('body').prepend('<div id="viewportsize" style="z-index:9999;position:fixed;top:40px;left:5px;color:#fff;background:#000;padding:10px">Height: '+height+'<br>Width: '+width+'</div>');
      $(window).resize(function() {
        height = $(window).height();
        width = $(window).width();
        $('#viewportsize').html('Height: '+height+'<br>Width: '+width);
      });
    }
}
//this is an example change
$(document).ready(function() {
//next line is for debugging
//	showViewPortSize(true);

/*	var nav_height = $('nav').height();
	$('nav').css("line-height", nav_height);
*/	
	$(window).resize(function(){
    	var bg_width = window.innerWidth;
    	var bg_height = window.innerHeight;

    	if (bg_width > 1.6*bg_height) {
    	//if viewport is longer than tall
    	    $(".background img").css("height", "auto");
    	    $(".background img").css("width", bg_width);
    	} else {
    	    $(".background img").css("width", "auto");
    	    $(".background img").css("height", bg_height);
    	}
	});
	$(window).trigger("resize");



});
