$(function(){
    /*监控右键事件*/
    $("body").on("contextmenu",function(event){
        animateDom()
        event.preventDefault();
        return false;
    })
    function animateDom(){
        $(".g-Notes").toggleClass("animate-Shake")
    }

    $(".g-Notes-title").on("click",function(){
        var that = $(this);
        console.log(that.parents(".g-Notes").offset())
    })

    $(".nav li span").click(function(){
        var parent =  $(this).parent()
        if(parent.hasClass("show")){
            parent.removeClass("show").animate({"left":"-80px"},500)
        }else{
            $(".show").animate({"left":"-80px"},500).removeClass("show")
            parent.addClass("show").animate({"left":"-8px"},500)
        }
    })

    $(".everyday span").on("click",function(){
        $(".everyday-say").toggle(400)
    })
})