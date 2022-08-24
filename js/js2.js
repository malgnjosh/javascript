result1 = 0.1 + 0.2;
document.getElementById('btn1').onclick = function() {
    document.getElementById('output1').innerHTML = result1;
}

result2 = parseInt("010", 10);
document.getElementById('btn2').onclick = function() {
    document.getElementById('output2').innerHTML = result2;
}

result3 = parseInt("010");
document.getElementById('btn3').onclick = function() {
    document.getElementById('output3').innerHTML = result3 + " 구형 브라우저에서는 8진수로 인식";
}

result4 = parseInt("010", 2);
document.getElementById('btn4').onclick = function() {
    document.getElementById('output4').innerHTML = result4;
}

document.getElementById('btn5').onclick = function() {
    document.getElementById('output5').innerHTML = typeof(+ "10");
}

document.getElementById('btn6').onclick = function() {
    document.getElementById('output6').innerHTML = parseInt("abc");
}

document.getElementById('btn6').onclick = function() {
    document.getElementById('output6').innerHTML = parseInt("abc");
}

document.getElementById('btn7').onclick = function() {
    document.getElementById('output7').innerHTML = parseInt("abc") + 1;
}

document.getElementById('btn8').onclick = function() {
    var result8 = parseInt("abc");
    if(Number.isNaN(result8)) result8 = "숫자가 아님";
    //if(NaN == result) result = "숫자가 아님";
    document.getElementById('output8').innerHTML = result8;
}

document.getElementById('btn9').onclick = function() {
    document.getElementById('output9').innerHTML = 1/0;
}

document.getElementById('btn10').onclick = function() {
    document.getElementById('output10').innerHTML = isFinite(1/0);
}

var arr1 = ["abc", "def"];
document.getElementById('btn11').onclick = function() {
    var arr2 = ["ghi"];
    var arr3 = ["jkl"];
    arr1 = arr1.concat(arr2, arr3)
    document.getElementById('output11').innerHTML = arr1;
}

document.getElementById('btn12').onclick = function() {
    arr1.fill("ABC");
    document.getElementById('output12').innerHTML = arr1;
}

document.getElementById('btn13').onclick = function() {
    arr1.fill("lll", 2, 4);
    document.getElementById('output13').innerHTML = arr1;
}

document.getElementById('btn14').onclick = function() {
    // const result14 = arr1.filter(function(str){
    //     return str === "lll";
    // });
    const result14 = arr1.filter((str) => str === "lll");
    document.getElementById('output14').innerHTML = result14;
}