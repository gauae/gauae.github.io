// JavaScript Document
'use strict';

//quantity-box
var unit = 0;
var total;
// if user changes value in field
$('.field').change(function() {
  unit = this.value;
});
$('.add').click(function() {
  unit++;
  var $input = $(this).prevUntil('.sub');
  $input.val(unit);
  unit = unit;
});
$('.sub').click(function() {
  if (unit > 0) {
    unit--;
    var $input = $(this).nextUntil('.add');
    $input.val(unit);
  }
});

$(document).ready(function(){
	
	//top-bar
	//$('.border .sub-menu ul').hide();
//	$('.border .sub-menu ul.open').show();
//	$(".border .sub-menu a").click(function () {
//	  $(this).parent(".sub-menu").children("ul").slideToggle("300");
//	  $(this).find("i.fa").toggleClass("fa-angle-up fa-angle-down");	
//	});
	
	$('.top-bar .sub-menu ul , .search-bar .sub-menu ul').hide();
	$(".top-bar .sub-menu a , .search-bar .sub-menu a").click(function () {
	  $(this).parent(".sub-menu").children("ul").slideToggle("300");
	  $(this).find("i.fa").toggleClass("fa-angle-up fa-angle-down");
	});
	
	//quick-view-modal
	$('.quick-modal .sub-menu .toggle-ul').hide();
	$(".quick-modal .sub-menu .main-a").click(function () {
	  $(this).parent(".sub-menu").children(".toggle-ul").slideToggle("300");
	  $(this).find("i.fa").toggleClass("flaticon-3-signs flaticon-4-minus");
	});
	
	//login-modal
	$("#reg-m").click(function() {
			$('#myModal').modal('hide');  
	});
	
	$("#log-m").click( function() {
			$('#myModal2').modal('hide');  
	});
	
});

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 150) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(400);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(400);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 1500);
});

/* Starts Home page(index) inpage javascripts */
//Home page(index) scroll bottom to top center
$(document).ready(function(){
	$('a[href^="#top"]').click(function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1500, 'swing');
	});
});	

<!--Categories-menu-Home-page(index)-->
$('.manufacture .sub-menu ul').hide();
$('.manufacture .sub-menu ul.open').show();
$(".manufacture .sub-menu a").click(function () {
  $(this).parent(".sub-menu").children("ul").slideToggle("300");
  $(this).find("i.fa").toggleClass("fa-angle-right fa-angle-down");	
});
/* Ends Home page(index) inpage javascripts */