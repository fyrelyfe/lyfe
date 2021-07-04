//= link_tree ../images
//= link_directory ../stylesheets .css
	$(document).ready(function(){
		alert('sdfsdfdsfsdf');
	});
	$(".fos_user_registration_register input").focus(function(){
		$(this).addClass('is-focused');
	});
	$(".fos_user_registration_register input").focusout(function(){
		$(this).removeClass('is-focused');
	});
	$('.fos_user_registration_register input').blur(function(){
		tmpval = $(this).val();
		if(tmpval == '' && !$(this).hasClass('whatsappinput')) {
			$(this).addClass('is-empty');
		} else {
			$(this).removeClass('is-empty');
		}
	});