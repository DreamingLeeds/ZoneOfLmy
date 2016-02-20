if (typeof Lmy == "undefined") {
    var Lmy = {};
}

$(function(){
    Lmy.index={
        init:function(){
            this.toTop();
            this.clickTop();
        },
        toTop:function(){
            $(window).scroll(function () {
                //var doc_h = $(document).height();
                //var win_h = $(window).height();
                var scroll_top = $(window).scrollTop();
                if (scroll_top >= 900 && $(".btn-top").css("display")=="none") {
                    $(".btn-top").show();
                }else if(scroll_top < 500 && $(".btn-top").css("display")=="block"){
                    $(".btn-top").hide();
                }
            });
        },
        clickTop:function(){
            $(".btn-top").on("click",function(){
                window.scrollTo(0,0);
            });
        }
    };
    Lmy.index.init();
});
