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

/*
    문자열 관련 내장함수   
    원본문자열.split("구분문자");
    ---> 인수로 받은 구문문자를 기준으로 문자열을 각각 배열로 반환 
*/

var text = "apple,strawberry,melon";
var result = text.split(",");
console.log(result);

var text2 = "Andy David Julia";
var result2 = text2.split(" ");
console.log(result2);

/*
미션2 - .right >div의 transition-duration값을 구한뒤 
1.5s라는 문자에서 s를 제거하고 *1000해서 1500이라는 밀리세컨드 단위로 변경 (함수로 구현)
*/