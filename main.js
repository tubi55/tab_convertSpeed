var $wrap = $("#wrap");
var $btns = $wrap.find(".left li");
var $boxs = $wrap.find(".right div");
var enableClick = true;

$btns.on("click",function(e){
    e.preventDefault();

    var isOn = $(this).hasClass("on");
    if(isOn) return;

    if(enableClick){
        enableClick = false;
        var i = $(this).index();
        activation(i);
    }        
});

function activation(index){ 
    console.log("start!!");
    $btns.removeClass("on");
    $btns.eq(index).addClass("on");

    $boxs.removeClass("on");
    $boxs.eq(index).addClass("on");

    setTimeout(function(){
        enableClick = true;
    },4000);
}

/*   
    특정 시간 만큼 코드 지연시키기
    setTimeout(실행할 함수, 지연시간);

    setTimeout(function(){
        이곳의 구문이 2초 있다 실행됨
    },2000);
*/