$(function(){
    var $arrow = $('.arrow');
    var $element = $arrow.parent().next();

    $arrow.click(function(){
        $('html,body').animate({scrollTop:$element.offset().top}, 1000);
    })
    var $pictures = $('.pictures');
    var wHeight = $(window).height();
    var parallaxImages = [];
    $pictures.children().each(function(index){
        var parallaxImage = {}
        parallaxImage.element = $(this)
        parallaxImage.offsetTop = Math.floor(parallaxImage.element.offset().top);
        parallaxImage.offsetBottom = Math.floor(parallaxImage.element.height() + parallaxImage.offsetTop);
        parallaxImage.speed = parallaxImage.element.attr('data-speed');
        parallaxImages.push(parallaxImage);
    })
    var wScroll = Math.floor($(window).scrollTop());
    console.log(parallaxImages[0].speed);
    function scrollHandler(object){
        object.element.css({
            'transform': 'translate(0px,-'+ wScroll/object.speed+'%)'
        })
    }
    $(window).scroll(function(){
        wScroll = Math.floor($(this).scrollTop());
        window.requestAnimationFrame(function(){
            for(var i=0;i<parallaxImages.length;i++){
                if((wScroll+wHeight>=parallaxImages[i].offsetTop)&&(wScroll+wHeight<=parallaxImages[i].offsetBottom)){
                    console.log('heey');
                    scrollHandler(parallaxImages[i]);
                }
            }
        })
    })
})
