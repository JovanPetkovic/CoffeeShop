$(function(){
    var $arrow = $('.arrow');
    var $element = $arrow.parent().next();

    $arrow.click(function(){
        $('html,body').animate({scrollTop:$element.offset().top}, 1000);
    })
})
