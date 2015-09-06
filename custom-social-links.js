
( function( $ ) {
function $custom_social_links() {

    var social = $('.social-1');
    social.$bgnd = false; // false = background: transparent
    social.$colors = false; // use brand colors
    social.$showLabels = false; // show labels
    social.$changeColor = false; // change color to brand color on hover
    social.$left = false;
    social.$roundedCorners = false;
    social.$hideIcons = false;
    social.backgroundColor = '#000';
    social.fontColor = '#000';
    social.textInAnimation = 'fadeInRight';
    social.iconInAnimation = 'slideInDown';


    function $remove() {
        social.find('br').remove();
        social.find('p').remove();
    }

    $remove();

    function $social_data() {
        social.li = $('.social-1 .s-1');
        social.icon = $('.social-1 .s-1 .s-1-icon');
        social.text = $('.social-1 .s-1 .s-1-text');

        social.facebook = $('.social-1 .s-1 .fa-facebook').parents('.s-1');
        social.twitter = $('.social-1 .s-1 .fa-twitter').parents('.s-1');
        social.youtube = $('.social-1 .s-1 .fa-youtube').parents('.s-1');
        social.instagram = $('.social-1 .s-1 .fa-instagram').parents('.s-1');
        social.pinterest = $('.social-1 .s-1 .fa-pinterest').parents('.s-1');
        social.linkedin = $('.social-1 .s-1 .fa-linkedin').parents('.s-1');

        social.linkedin.addClass('hidden');
        social.youtube.addClass('hidden');
        social.instagram.addClass('hidden');
        social.pinterest.addClass('hidden');
        social.twitter.addClass('hidden');


    }

    $social_data();

    function $data() {
        social.ArrayNames = ['facebook', 'twitter', 'youtube', 'instagram', 'pinterest', 'linkedin'];
        social.ClassesNames = ['.facebook', '.twitter', '.youtube', '.instagram', '.pinterest', '.linkedin'];

        social.Array = [social.facebook, social.twitter, social.youtube, social.instagram, social.pinterest, social.linkedin];
        social.ArrayBrandColors = ['#3b5998', '#55acee', '#cd201f', '#3f729b', '#cc2127', '#0077b5'];

        for (var i = 0; i < social.Array.length; i++) {
            social.Array[i].addClass(social.ArrayNames[i]);

        }

    }

    $data();

    function $css() {
        social.css({ overflow: 'hidden', clear: 'both' });
        social.li.css({ fontSize: '25px', zIndex: 5, display: 'inline-block' });

        social.icon.css({ display: 'inline-block', zIndex: 5, width: '40px', height: '40px', padding: '2px', textAlign: 'center', float: 'left' });
        social.text.css({ display: 'inline-block', zIndex: 5, height: '40px', padding: '2px 15px', textAlign: 'center', margin: 0, float: 'right', opacity: 1 }).toggle();

        if (social.$left) {
            social.css({ float: 'left' });
        }
        else {
            social.css({ float: 'right' });

        }

    }

    $css();

    function $social_hrefs() {

        var sh = $('.s-hrefs');
        sh.ul = $('.s-hrefs ul');
        sh.li = $('.s-hrefs ul li');
        sh.li = $('.s-hrefs ul li');

        sh.hrefs = function(){
        
        
        $('#sc_update').on('click', function () {
            //social.facebook.find('a').attr('href', '/');
            //social.twitter.find('a').attr('href', '/');
            //social.youtube.find('a').attr('href', '/');
            //social.instagram.find('a').attr('href', '/');
            //social.pinterest.find('a').attr('href', '/');
            //social.linkedin.find('a').attr('href', '/');
            social.ArrayLinks = [$('#facebookHref'), $('#twitterHref'), $('#youtubeHref'), $('#instagramHref'), $('#pinterestHref'), $('#linkedinHref'), ];
            for (var i = 0; i < social.ArrayLinks.length ; i++) {

                var $link = social.ArrayLinks[i].val();
                $(social.ArrayNames[i]).href($link);
                   
            }

        });
        }
        sh.hrefs();

        sh.hovers = function () {
            $('#sc_update').hover(function () {
                $(this).parents('.sc-1').find('.fa').addClass('fa-spin');
                $(this).parents('.sc-1').transition({ color: "#f00" , fontSize: 16 , fontWeight:'bold'}, 1000)
            }, function () {
                $(this).parents('.sc-1').find('.fa').removeClass('fa-spin');
                $(this).parents('.sc-1').transition({ color: "inherit", fontSize: 14 }, 1000)

            });
        }
        sh.hovers();
      
    }
    $social_hrefs();

    function warunki() {
        for (var i = 0; i < social.Array.length; i++) {
            /* if $bgnd is false */
            if (!social.$bgnd) {
                social.Array[i].css({ background: 'transparent' });
                social.Array[i].find('a').css({ color: social.fontColor });

                if (social.$colors) {
                    social.Array[i].find('a').css({ color: social.ArrayBrandColors[i] });
                    social.Array[i].css({ background: 'transparent' });

                }
                else {

                }

            }
            else {
                social.Array[i].css({ background: social.backgroundColor });
                social.Array[i].find('a').css({ color: '#fff' });
                if (social.$colors) {
                    social.Array[i].find('a').css({ color: '#fff' });
                    social.Array[i].css({ background: social.ArrayBrandColors[i] });

                }
                else {

                }

            }
            if (social.$roundedCorners == true) {
                social.Array[i].css({ borderRadius: '50%' });
            }
            else {
                social.Array[i].css({ borderRadius: '0' });
            }

        }

        social.li.hover(function () {
            if (social.$showLabels) {
                if (social.$roundedCorners) {
                    $(this).css({ borderRadius: '0' });
                }
                $(this).children('.s-1-text').addClass('animated ' + social.textInAnimation).show();
                if (social.$hideIcons) {
                    $(this).children('.s-1-icon').addClass('animated fadeOut').hide();

                }
            }
            else {
                $(this).children('.s-1-text').hide('slow');

            }

        }, function () {
            if (social.$showLabels) {
                if (social.$roundedCorners) {
                    $(this).css({ borderRadius: '50%' });

                }

                $(this).children('.s-1-text').hide();
                if (social.$hideIcons) {

                    $(this).children('.s-1-icon').removeClass('animated fadeOut').addClass('animated ' + social.iconInAnimation).show();
                }
            }
            else {


                $(this).children('.s-1-text').hide();
            }

        });

    }


    $('.social-controls .toggle-background').on('click', function () {
        if ($(this).hasClass('bg-toggled')) {
            social.$bgnd = false;
            $(this).removeClass('bg-toggled');
            warunki();

        }
        else {
            social.$bgnd = true;
            $(this).addClass('bg-toggled');
            warunki();


        }
    });

    $('.social-controls .toggle-colors').on('click', function () {
        if ($(this).hasClass('colors-toggled')) {
            social.$colors = false;
            $(this).removeClass('colors-toggled');
            warunki();

        }
        else {
            social.$colors = true;
            $(this).addClass('colors-toggled');
            warunki();


        }
    });

    $('.social-controls .toggle-circles').on('click', function () {
        if ($(this).hasClass('circles-toggled')) {
            social.$roundedCorners = false;
            $(this).removeClass('circles-toggled');

            warunki();
        }
        else {
            social.$roundedCorners = true;
            $(this).addClass('circles-toggled');

            warunki();

        }
    });

    $('.social-controls .toggle-labels').on('click', function () {
        if ($(this).hasClass('labels-toggled')) {
            social.$showLabels = false;
            $(this).removeClass('labels-toggled');

            warunki();
        }
        else {
            social.$showLabels = true;
            warunki();
            $(this).addClass('labels-toggled');

        }
    });

    $('.social-controls .toggle-icons').on('click', function () {
        if ($(this).hasClass('icons-toggled')) {
            social.$hideIcons = false;
            $(this).removeClass('icons-toggled');

            warunki();
        }
        else {
            social.$hideIcons = true;
            warunki();
            $(this).addClass('icons-toggled');

        }
    });


}
$custom_social_links();
})(jQuery);
