jQuery(document).ready(function(){

    var $menu = jQuery('#menu');

    //	Toggle menu
    jQuery('#open-icon-menu a').click(function( e ) {
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
// homepage slide up/down for blocks
    jQuery(".box_wInf").click(function(e){
        jQuery(this).toggleClass("open");
    });
    jQuery(".box_wInf_right_bottom_button").click(function(e){
        alert("touch button");
    });

//user form
    jQuery('form[data-submit-position="true"] input, form[data-submit-position="true"] select').focusin(function(e){
        jQuery('body').addClass('formOnFocus');
    });
    jQuery('form[data-submit-position="true"]').submit(function(e){
        jQuery('body').removeClass('formOnFocus');
        alert("form submit");
    });


   jQuery('#reset_form_button').click(function(e){
       jQuery('form[data-submit-position="true"]')[0].reset()
       jQuery('body').removeClass('formOnFocus');
       alert("form reset");
   });

// cupon slide up/down for blocks
    jQuery(".green_button_block").click(function(e){
        jQuery(this).toggleClass("open");
    });

//    modal
    jQuery(".OOP_del").click(function(e){
       var CuponId = jQuery(this).parent().attr('data-cupon-id');
        jQuery('body').addClass('modalOpen');
//      убираем скролл

        jQuery('body').append('<div class="overlay"></div>');
//      добавляем полупрозрачную подложку

        jQuery('.modal').attr("data-cupon-id" , CuponId);
//      для индефикации удаляемой модели добавляем к модальному окну уникальный id купона

        jQuery('.modal').show();
//      показываем модальное окно


//      jQuery('body').addClass('modalOpen').append('<div class="overlay"></div>');
//      jQuery('.modal').attr("data-cupon-id-del" , CuponId).show()
//      укороченный вариант:)

        jQuery('.overlay').click(function(e){
            colapsF();
            return false
        });
//      вызываем функцию закрываюшую модалку при клике на подложку
        return false
    });
    jQuery('#Y').click(function(){
        alert('SÍ');
    });
    jQuery('#N').click(function(){
        alert('NO');
    });

//    popup with cupon
    jQuery(".COP_B").click(function(e){
        var CuponId = jQuery(this).parent().attr('data-cupon-id');
        var CuponIdImg = jQuery(this).parent().attr('data-cupon-id-img');
        var CuponIdDW = jQuery(this).parent().attr('data-cupon-id-downloud');

        jQuery('body').addClass('modalOpen').append('<div class="overlay" style="background: transparent!important;"></div>');
        jQuery('.cupon_popup .img_cupon img').attr("src" , CuponIdImg);
        jQuery('.cupon_popup .grey_button').attr("href" , CuponIdDW);
        jQuery('.cupon_popup').attr("data-cupon-id" , CuponId).show();

        jQuery('.overlay, .cupon_popup .colaps').click(function(e){
            colapsF();
            return false
        });
        return false
    });
});

function colapsF(){
    jQuery('body').removeClass('modalOpen');
    jQuery('.overlay').remove();
        jQuery('.modal').attr("data-cupon-id" , "").hide();
        jQuery('.cupon_popup .img_cupon img').attr("src" , "");
        jQuery('.cupon_popup .grey_button').attr("src" , "");
        jQuery('.cupon_popup').attr("data-cupon-id" , "").hide();
}