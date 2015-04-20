window.svgeezy = function() {

		return {

			init: function(avoid, filetype) {
				this.avoid = avoid || false;
				this.filetype = filetype || 'png';
				this.svgSupport = this.supportsSvg();
				if(!this.svgSupport) {
					this.images = document.getElementsByTagName('img');
					this.imgL = this.images.length;
					this.fallbacks();
				}
			},

			fallbacks: function() {
				while(this.imgL--) {
					if(!this.hasClass(this.images[this.imgL], this.avoid) || !this.avoid) {
						var src = this.images[this.imgL].getAttribute('src');
						if(src === null) {
							continue;
						}
						if(this.getFileExt(src) == 'svg') {
							var newSrc = src.replace('.svg', '.' + this.filetype);
							this.images[this.imgL].setAttribute('src', newSrc);
						}
					}
				}
			},

			getFileExt: function(src) {
				var ext = src.split('.').pop();

        			if(ext.indexOf("?") !== -1) {
          				ext = ext.split('?')[0];
        			}

        			return ext;
			},

			hasClass: function(element, cls) {
				return(' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
			},

			supportsSvg: function() {
				return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
			}
		};

	}();


//Jquery easing, reduced - https://github.com/gdsmith/jquery.easing
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend( jQuery.easing,
{
def: 'easeOutQuad',
swing: function (x, t, b, c, d) {
//alert(jQuery.easing.default);
return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
},
easeInOutExpo: function (x, t, b, c, d) {
if (t==0) return b;
if (t==d) return b+c;
if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
}
});


//collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).ready(function() {
    //Collapse Navbar if we need to
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }

//   soundManager.setup({
//   url: 'swf/',
//   flashVersion: 9, // optional: shiny features (default = 8)
//   // optional: ignore Flash where possible, use 100% HTML5 mode
//   preferFlash: false,
//   onready: function() {
//     soundManager.createSound();
//   }
// });



    svgeezy.init(true, 'png');
});