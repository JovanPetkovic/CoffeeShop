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
        parallaxImage.height1 = parallaxImage.element.height();
        parallaxImage.offsetBottom = Math.floor(parallaxImage.height1 + parallaxImage.offsetTop);
        parallaxImage.speed = parseInt(parallaxImage.element.attr('data-speed'));
        parallaxImages.push(parallaxImage);
    })
    var wScroll = Math.floor($(window).scrollTop());
    function scrollHandler(object, c){
        object.element.animate({
            top: c+'='+object.speed
        },1);
        if(c==='+'){
            object.offsetTop += object.speed;
            object.offsetBottom += object.speed;
        }
        else {
            object.offsetTop -= object.speed;
            object.offsetBottom -= object.speed;
        }
    }
    var lastScrollTop = 0;
    var c='';
    $(window).scroll(function(){
        wScroll = Math.floor($(this).scrollTop());
        if(lastScrollTop<$(window).scrollTop()){
            c='-'
        }
        else {
            c='+'
        }
        window.requestAnimationFrame(function(){
            for(var i=0;i<=parallaxImages.length-1;i++){
                if((wScroll+wHeight>=parallaxImages[i].offsetTop)&&(wScroll<=parallaxImages[i].offsetBottom)){
                    scrollHandler(parallaxImages[i],c);
                }
            }
        })
        lastScrollTop = $(window).scrollTop();
    })
})
