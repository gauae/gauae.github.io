var revapi3,
	tpj=jQuery;
			
tpj(document).ready(function() {
	if(tpj("#rev_slider_3_1").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_3_1");
	}else{
		revapi3 = tpj("#rev_slider_3_1").show().revolution({
			sliderType:"standard",
			jsFileLocation:"//localhost/shreekar/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout:"fullwidth",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
				onHoverStop:"on",
				touch:{
					touchenabled:"on",
					touchOnDesktop:"off",
					swipe_threshold: 75,
					swipe_min_touches: 50,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
				,
				bullets: {
					enable:true,
					hide_onmobile:true,
					hide_under:600,
					style:"uranus",
					hide_onleave:false,
					direction:"vertical",
					h_align:"right",
					v_align:"center",
					h_offset:30,
					v_offset:30,
					space:15,
					tmp:'<span class="tp-bullet-inner"></span>'
				}
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1500,1024,778,480],
			gridheight:[625,625,500,400],
			lazyType:"smart",
			scrolleffect: {
				fade:"on",
				blur:"on",
			},
			parallax: {
				type:"mouse",
				origo:"slidercenter",
				speed:2000,
				speedbg:0,
				speedls:0,
				levels:[2,3,4,5,6,7,12,16,10,50,47,48,49,50,51,55],
			},
			shadow:0,
			spinner:"off",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			shuffle:"off",
			autoHeight:"off",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
	
});	


var revapi5,
	tpj=jQuery;
			
tpj(document).ready(function() {
	if(tpj("#rev_slider_5_1").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_5_1");
	}else{
		revapi5 = tpj("#rev_slider_5_1").show().revolution({
			sliderType:"standard",
			jsFileLocation:"//localhost/shreekar/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout:"fullwidth",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					touchOnDesktop:"off",
					swipe_threshold: 75,
					swipe_min_touches: 50,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
				,
				bullets: {
					enable:true,
					hide_onmobile:false,
					style:"uranus",
					hide_onleave:false,
					direction:"vertical",
					h_align:"right",
					v_align:"center",
					h_offset:50,
					v_offset:0,
					space:15,
					tmp:'<span class="tp-bullet-inner"></span>'
				}
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1500,1024,778,480],
			gridheight:[757,757,600,600],
			lazyType:"none",
			parallax: {
				type:"mouse",
				origo:"slidercenter",
				speed:2000,
				speedbg:0,
				speedls:0,
				levels:[2,3,4,5,6,7,12,16,10,50,47,48,49,50,51,55],
			},
			shadow:0,
			spinner:"off",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			shuffle:"off",
			autoHeight:"off",
			disableProgressBar:"on",
			hideThumbsOnMobile:"on",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
	
});