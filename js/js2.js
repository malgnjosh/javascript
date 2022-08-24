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




