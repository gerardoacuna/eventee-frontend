(function($) {
	
	$('#example').photobooth().on("image",function( event, dataUrl ){
		$( "#gallery" ).append( '<img src="' + dataUrl + '" >');
	});

	$('#example').popover(options)
		
})(jQuery);