(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);   

$('.perMain_title span').click(function(){
    $(this).addClass('per_active').siblings().removeClass('per_active');
    $('.perMain_video').eq($(this).index()).show().siblings().hide();
})
            
$(function(){
        //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
        $(function () {
            $(window).scroll(function(){
                if ($(window).scrollTop()>100){
                    $(".fanhuitop").fadeIn(1500);
                }
                else
                {
                    $(".fanhuitop").fadeOut(1500);
                }
            });
 
            //当点击跳转链接后，回到页面顶部位置
            $(".fanhuitop").click(function(){
                if ($('html').scrollTop()) {
                    $('html').animate({ scrollTop: 0 }, 100);//动画效果
                    return false;
                }
                $('body').animate({ scrollTop: 0 }, 100);
                return false;
            });
        });
    });
