
$(document).ready(function () {
    $('.popup-content').next().mousemove(function(event) {

        let _this = $(this).prev()
        $(_this).each(function(index) {
            $(_this).css('display', 'block');
            $(_this).css('top', event.pageY - this.offsetHeight - 10 + 'px');
            $(_this).css('left', event.pageX - 20 + 'px');
        });;

    });;
    $('.popup-content').next().mouseout(function(event) {
        $(this).prev().css('display', 'none');;
    });;

});
 
