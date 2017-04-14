
// $(document).ready(function() {

// 	$( '#slideshow' ).on( 'click', '#rightControl', function() {
// 		if($('.slide').last().hasClass('active')){
// 			$('.slide').removeClass('active').hide();
// 			$('.slide').first().addClass('active').show();
// 		} else {
// 			$('.slide.active').removeClass('active').hide().next().addClass('active').show();
// 		}

// 	});

// $( '#slideshow' ).on( 'click', '#leftControl', function() {
// 		if($('.slide').first().hasClass('active')){
// 			$('.slide').removeClass('active').hide();
// 			$('.slide').last().addClass('active').show();
// 		} else {
// 			$('.slide.active').removeClass('active').hide().prev().addClass('active').show();
// 		}

// 	});

// });


$(document).ready(function() {
	$( '#slideshow' ).on( 'click', '#rightControl', function() {
		$('.slide.active').removeClass('active').next().addClass('active').show();

			if ( $('.slide.active').is(':first') ) {
				$("#rightControl").show();
				$("#leftControl").hide();
				console.log('first')
			} else if ( $('.slide.active').index() == $('.slide').size() - 1 ) {
				$("#rightControl").hide();
				$("#leftControl").show();
				console.log('last')
			} else {
				console.log('else')
				$("#rightControl").show();
				$("#leftControl").show();
			}
	});


	$( '#slideshow' ).on( 'click', '#leftControl', function() {
	$('.slide.active').removeClass('active').prev().addClass('active').show();
				if ( $('.slide.active').index() == $('.slide').size() - 3 ) {
				$("#rightControl").show();
				$("#leftControl").hide();
				console.log('first')
			} else {
				console.log('else')
				$("#rightControl").show();
				$("#leftControl").show();
			}	
	});
});


$(document).ready(function() {
	$(function(){
$("<p>Hi there!</p>").append(".simplemodal-wrap");
});
// $("#sample").modal({onClose: function (dialog) {
// 	dialog.data.fadeOut('slow', function () {
// 		dialog.container.hide('slow', function () {
// 			dialog.overlay.slideUp('slow', function () {
// 	overlayClose:true
// 				$.modal.defaults.closeClass = "modalClose";
// 			});
// 			$("#element-id").modal({options});
// $.modal("<div><h1>SimpleModal</h1></div>", {options});
// 		});
// 	});
// }});

// Display an external page using an iframe
// var src = "http://365.ericmmartin.com/";
// $.modal('<iframe src="' + src + '" height="450" width="830" style="border:0">', {
// 	closeHTML:"",
// 	containerCss:{
// 		backgroundColor:"#fff", 
// 		borderColor:"#fff", 
// 		height:450, 
// 		padding:0, 
// 		width:830
// 	},
// 	// overlayClose:true
// });
// $.extend($.modal.defaults, {
// 	closeClass: "modalClose",
// 	closeHTML: "<a href='#'>Close</a>"
// });

// Opening animations
// $("#sample").modal({onOpen: function (dialog) {
// 	dialog.overlay.fadeIn('slow', function () {
// 		dialog.data.hide();
// 		dialog.container.fadeIn('slow', function () {
// 			dialog.data.slideDown('slow');	 
// 		});
// $.modal("<div><h1>SimpleModal</h1></div>", {options});
// 		// $("#element-id").modal({options});
// 	});

// }});
});