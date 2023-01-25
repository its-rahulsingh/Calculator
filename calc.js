var result="";
var res=0;
var temp=0;
function c1(c){
    result+="1";
    document.getElementById("result").innerText=result;
}
function c2(){
    result+="2";
    document.getElementById("result").innerText=result;
}
function c3(){
    result+="3";
    document.getElementById("result").innerText=result;
}
function c4(){
    result+="4";
    document.getElementById("result").innerText=result;
}
function c5(){
    result+="5";
    document.getElementById("result").innerText=result;
}
function c6(){
    result+="6";
    document.getElementById("result").innerText=result;
}
function c7(){
    result+="7";
    document.getElementById("result").innerText=result;
}
function c8(){
    result+="8";
    document.getElementById("result").innerText=result;
}
function c9(){
    result+="9";
    document.getElementById("result").innerText=result;
}
function c0(){
    result+="0";
    document.getElementById("result").innerText=result;
}
function cp(){
    result+="+";
    document.getElementById("result").innerText=result;
}
function cs(){
    result+="-";
    document.getElementById("result").innerText=result;
}
function ce(){
    console.log(typeof(+result));
    var q=eval(result);
    result="";
    document.getElementById("result").innerText=q;
}
function cm(){
    result+="*";
    document.getElementById("result").innerText=result;
}
function cd(){
    result+="/";
    document.getElementById("result").innerText=result;
}
function clear1(){
    result="";
    document.getElementById("result").innerText=result;
}

