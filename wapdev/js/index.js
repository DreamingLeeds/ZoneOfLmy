new WOW().init();

if (typeof Lmy == "undefined") {
    var Lmy = {};
}

$(function(){
    Lmy.index={
        init:function(){
            //判断IE版本
            this.ieVersion();

            //判断是否是PC
            var isp=this.isPC();
            if(isp){
                $(".btn-qq").show();
            };

            //回到顶部
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
        },
        isPC:function(){
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            return flag;
        },
        ieVersion:function(){
            if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE6.0")
            {
                //alert("IE 6.0");
                window.location.href=websiteUrl+"lower.html";
            }
            else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0")
            {
                //alert("IE 7.0");
                window.location.href=websiteUrl+"lower.html";
            }
            else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0")
            {
                // alert("IE 8.0");
                window.location.href=websiteUrl+"lower.html";
            }
            else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE9.0")
            {
                // alert("IE 9.0");
            }
        }
    };
    Lmy.index.init();
});
