$(".left li").on("click",function(e){
    e.preventDefault();

    var i = $(this).index();

    $(".left li").removeClass("on");
    $(".left li").eq(i).addClass("on");

    $(".right div").removeClass("on");
    $(".right div").eq(i).addClass("on");
});