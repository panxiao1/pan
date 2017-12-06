/**
 * Created by 潘晓 on 2017/12/6.
 */
(function($){
    $.fn.green = function(){
        $(this).each(function(){
            $(this).css('color','green');
        })
    }
})(jQuery);