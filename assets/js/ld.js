/* Demo Scripts for Making Twitter Bootstrap 3 Tab Play Nicely With The Masonry Library
* on SitePoint by Maria Antonietta Perna
*/

//Initialize Masonry inside Bootstrap 3 Tab component 

(function( $ ) {

	var $container = $('.masonry-container');
	$container.imagesLoaded( function () {
		$container.masonry({
			columnWidth: '.item',
			itemSelector: '.item'
		});
	});
	
	//Reinitialize masonry inside each panel after the relative tab link is clicked - 
	$('a[data-toggle=tab]').each(function () {
		var $this = $(this);

		$this.on('shown.bs.tab', function () {
		
			$container.imagesLoaded( function () {
				$container.masonry({
					columnWidth: '.item',
					itemSelector: '.item'
				});
			});

		}); //end shown
	});  //end each
	
})(jQuery);
