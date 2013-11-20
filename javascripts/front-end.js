jQuery(document).ready(function(){

    var $menu = $('#menu');

    //	Toggle menu
    $('#open-icon-menu a').click(function( e ) {
        e.stopImmediatePropagation();
        e.preventDefault();
        $menu.trigger( $menu.hasClass( 'mm-opened' ) ? 'close.mm' : 'open.mm' );
    });

    //	Create the menu
    $menu.mmenu({
//        options:
            position   : "right",
            zposition  : "next"

    });


})