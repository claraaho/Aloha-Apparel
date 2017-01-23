$(function () {

function scrollNav() {
 $('.nav a').click(function(){  
   //Toggle Class
   // debugger;
   console.log("alsjfla");
   $(".active").removeClass("active");      
   $(this).closest('li').addClass("active");
   var theClass = $(this).attr("class");
   $('.'+theClass).parent('li').addClass('active');
   //Animate
   $('html, body').stop().animate({
       scrollTop: $( $(this).attr('href') ).offset().top - 160
   }, 4000);
   return false;
 });
 $('.scrollTop a').scrollTop();
}
scrollNav();


})

$('#button').on('click', function() {
	var userEmail = $('#email').val();
	if (userEmail != '') {
		var valid = validateEmail(userEmail);
		if (valid) {
			alert("Thanks for subscribing!");
		} else {
			alert("Please include an '@' in email address. " + userEmail + " is missing an '@'.");
		  }
	} else {
		alert("Please submit a valid email address.");
	  }	
});

function validateEmail(email) {
  var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(email);
}
