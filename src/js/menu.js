$(function () {
    var windowScroll = {
        init: function(){
            this.cacheDom();
            this.objInit();
            this.watchScroll();
        },
        cacheDom: function() {
            this.items = new Array();
            this.itemsObj = new Array();
            this.$window = $(window);
            this.$pictures = $('.pictures');
            this.height = this.$window.offsetHeight;
            this.top = this.$window.scrollTop();
            this.bottom = this.top + this.height;
        },
        objInit: function() {
            this.items.forEach.call(document.getElementsByClassName('item'), gettingObj.bind(this));
            function gettingObj(item, index){
                this.itemsObj.push(new listObj(item));
            }
            function listObj(element){
                this.$div = element;
                this.height = this.$div.offsetHeight;
                this.top = this.$div.offsetTop;
                this.bottom = this.top + this.height;
            }
        },
        watchScroll: function() {
            this.$window.on('scroll',function(){
                this.itemsObj.forEach(function(item,index){
                    this.height = this.$window.height();
                    this.top = this.$window.scrollTop();
                    this.bottom = this.top + this.height;
                    if(item.top + item.height*3/4<=this.top){
                        this.$pictures.find("#images"+index).fadeOut(150);
                        this.$pictures.find("#images"+index+1).fadeIn(150);
                    }else {
                        this.$pictures.find("#images"+index).fadeIn(150);
                        this.$pictures.find("#images"+index+1).fadeOut(150);
                    }
                }.bind(this))
            }.bind(this))
        }
    }
    windowScroll.init();
})
