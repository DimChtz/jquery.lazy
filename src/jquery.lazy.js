if ( typeof jQuery === 'undefined' ) { throw new Error('jQuery is not loaded.'); }

(function($, window){

        $.lazy = function( elem ) {
            $( elem ).each(function() {
                if ( $(this).data('src') && $(this).data('src') !== false && $(this).is(':visible') )
                    if ( $(this).offset().top < ($(document).scrollTop() + $(window).innerHeight() + 100) )
                        $(this).attr('src', $(this).data('src')).removeData('src');
            });
        }

        $.fn.lazy = function() {
            $this = this;
            $(window).scroll(function() { $.lazy( $this ); });
            $(function() { $.lazy( $this ); });
        }

        $(window).scroll(function() { $.lazy( 'img[lazy]' ) });
        $(function() { $.lazy( 'img[lazy]' ); });

})(jQuery, window);
