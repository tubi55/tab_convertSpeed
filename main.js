var $wrap = $("#wrap");
var $btns = $wrap.find(".left li");
var $boxs = $wrap.find(".right div");

$btns.on("click",function(e){
    e.preventDefault();

    var isOn = $(this).hasClass("on");
    if(isOn) return;

    var i = $(this).index();
    activation(i);    
});

function activation(index){ 
    $btns.removeClass("on");
    $btns.eq(index).addClass("on");

    $boxs.removeClass("on");
    $boxs.eq(index).addClass("on");
}