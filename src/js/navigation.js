$(function(){
    var navigation = {
        init: function(){
            this.cacheDom();
            this.toggleNav();
        },
        cacheDom: function(){
            this.$page = $('.landing');
            this.$navigation = this.$page.children().first();
            this.$button = this.$navigation.find('button');
            this.$ul = this.$navigation.find('ul');
            this.$info = this.$navigation.find('.info');
            console.log(this.$button);
        },
        toggleNav: function(){
            this.$button.on('click', function(){
                this.$navigation.toggleClass('navigation');
                this.$button.toggleClass('is-active');
            }.bind(this));
        }
    }
    navigation.init();
})
