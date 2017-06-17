$(function(){
    var navigation = {
        init: function(){
            this.cacheDom();
            this.toggleNav();
        },
        cacheDom: function(){
            this.$page = $('.landing');
            this.$nav = this.$page.children().first();
            this.$button = this.$nav.find('button');
        },
        toggleNav: function(){
            this.$button.on('click', function(){
                this.$nav.toggleClass('closed');
                this.$nav.toggleClass('navigation');
            }.bind(this));
        }
    }
    navigation.init();
})
