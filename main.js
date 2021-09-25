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
    },1500);    
}

var speed =  $boxs.css("transition-duration");
speed = speed.split("s"); // ["1.5", ""];
speed = speed[0]; //"1.5"
//speed = parseInt(speed); //정수로 변환된 1
speed = parseFloat(speed); //실수인 1.5
speed = speed * 1000; //1500
console.log(speed);

//미션 3 - 위의 구문을 함수로 변환
//인수로 duration값을 구할 css선택자를 전달받고 
//return으로 변환순 숫자값을 내보냄


