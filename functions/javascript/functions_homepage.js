/**
* Core Javascript functions for ILance homepage
*
* @package      iLance\Javascript\Homepage
* @version	4.0.0.8059
* @author       ILance
*/
(function($){
	$.fn.ilhomepage = function() {
		if (jQuery('.slider').length)
		{
			jQuery('.slider').slides({
				preload: true,
				preloadImage: IMAGEBASE + 'working.gif',
				effect: 'slide',
				crossfade: true,
				play: 6500,
				slideSpeed: 350,
				fadeSpeed: 500,
				generateNextPrev: true,
				generatePagination: true,
				hoverPause: true,
				autoHeight: false
			});
		}
		if (jQuery('#recentviewedmidloader').length)
		{
			print_recently_viewed_items('load', 1, encodeURIComponent(PAGEURL));
		}
		if (jQuery('.carousel_home_featured_product').length)
		{
			jQuery(".carousel_home_featured_product").jCarouselLite({
				btnNext:"#c1r",
				btnPrev:"#c1l",
				easing:"easeOutQuad",
				visible:6, //jQuery(".carousel_home_featured_product ul li").length,
				scroll:6,
				speed:500
			});
		}
		if (jQuery('.carousel_home_seller_watchlist').length)
		{
			jQuery(".carousel_home_seller_watchlist").jCarouselLite({
				btnNext:"#c2r",
				btnPrev:"#c2l",
				easing:"easeOutQuad",
				visible:6, //jQuery(".carousel_home_seller_watchlist ul li").length,
				scroll:6,
				speed:500
			});
		}
		if (jQuery('.carousel_home_latest_product').length)
		{
			jQuery(".carousel_home_latest_product").jCarouselLite({
				btnNext:"#c3r",
				btnPrev:"#c3l",
				easing:"easeOutQuad",
				visible:6, //jQuery(".carousel_home_latest_product ul li").length,
				scroll:6,
				speed:500
			});
		}
		if (jQuery('.carousel_home_endingsoon_product').length)
		{
			jQuery(".carousel_home_endingsoon_product").jCarouselLite({
				btnNext:"#c4r",
				btnPrev:"#c4l",
				easing:"easeOutQuad",
				visible:6, //jQuery(".carousel_home_endingsoon_product ul li").length,
				scroll:2,
				speed:500
			});
		}
		if (jQuery(".carousel_home_featured_product ul li").length < 6)
		{
			jQuery("#c1r").addClass('disabled');
		}
		if (jQuery(".carousel_home_seller_watchlist ul li").length < 6)
		{
			jQuery("#c2r").addClass('disabled');
		}
		if (jQuery(".carousel_home_latest_product ul li").length < 6)
		{
			jQuery("#c3r").addClass('disabled');
		}
		if (jQuery(".carousel_home_endingsoon_product ul li").length < 6)
		{
			jQuery("#c4r").addClass('disabled');
		}
		if (jQuery(".carousel_recentviewed_1col ul li").length < 2)
		{
			jQuery("#c7r").addClass('disabled');
		}
	};
})(jQuery);
$(document).ready(function () {
	(function(){
		jQuery().ilhomepage();
	}());
});