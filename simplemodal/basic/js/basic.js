/*
 * SimpleModal Basic Modal Dialog
 * http://simplemodal.com
 *
 * Copyright (c) 2013 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

jQuery(function ($) {
	// Load dialog on page load
	//$('#basic-modal-content').modal();

	// Load dialog on click
	$('#basic-modal .basic').click(function (e) {
		$('#basic-modal-content').modal();

		return false;
	});
		$('.group .read-more').click(function (e) {
		//('.gr-description').modal();
// console.log($(this))
		$(this).closest('.group').find('.gr-description').modal({
			onClose: function (dialog) {
				dialog.data.fadeOut('slow', function () {
					dialog.container.hide('slow', function () {
						dialog.overlay.slideUp('slow', function () {
							$.modal.close();
						});
					});
				});
			},
			autoResize: true,
			maxWidth: 350,
			zIndex : 9999999999,
			focus : true,
			opacity : 60,
			modal :true,
			//overlayCss: {backgroundColor:"#fff"},
			overlayClose:true,
		});
		return false;

	});
});