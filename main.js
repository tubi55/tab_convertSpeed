var $wrap = $("#wrap");
var $btns = $wrap.find(".left li");
var $boxs = $wrap.find(".right div");
var enableClick = true;
var delay = convertSpeed($boxs);


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
    },delay);    
}

function convertSpeed(el){
    var speed =  el.css("transition-duration");
    speed = speed.split("s"); 
    speed = speed[0]; 
    speed = parseFloat(speed); 
    speed = speed * 1000; 
    return speed;
}


/*
//문자와 숫자가 결합되어 있는 문자열 숫자 형변환
var speed1 = "1.5s";
speed1 = parseFloat(speed1);
console.log(speed1);


//숫자형 문자에 곱하기 연산으로 숫자형변환
var speed2 = "1.5";
speed2 = speed2 *1000;
console.log(speed2);
*/


/*
문자에서 숫자로의 자동 형변환
1-숫자와 문자가 결합되어 있는 문자에서 parseInt, parseFloat을 쓰면 자동으로 숫자로 형변환
2- 따옴표로 감싸여있는 숫자형 문자에 곱하기 연산을 하면 자동으로 숫자로 변환
*/


