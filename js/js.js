/* 변수 선언 */

let string = "iamstring";

let num = 10;

let bool = true;

let arr = [1,2,3,4];

//let arr = []; SyntaxError

//var는 중복 선언이 가능

var myname = "myname";

var myname = "yourname";

//const는 immutable

const language = "javascript";

//language = 'a'; TypeError

/* 비교 연산자 */

let var1 = 10; //대입연산자

let var2 = 20;

let var3 = "10";

let isEqual = var1 == var3;

let isStrictEqual = var1 === var3;

let isNotEqual = var1 != var3;

let isNotStrictEqual = var1 !== var3;

/* 이벤트 */

document.querySelector("#btn1").onclick = function() {

    document.querySelector("#btn_area").textContent = "Who are you?";

}

function showMsg() {

    document.querySelector("#btn_area").textContent = "Don't touch me";

}

document.querySelector("#btn3").onclick = function() {

    var answer = prompt('이름을 입력하세요.');

    alert(answer + '씨 반갑습니다.');    

}

/* 문자열 */

var str1 = 'single quote';

var str2 = "double quote";

var str3 = '\'escape \'single quote\'\'';

var str1str2 = str1 + str2;

var newstr = str1 + ' is good';

/* 모든 숫자는 toString() 이라는 함수를 가지고 있다. */

var number = 123;

var strings = number.toString();

console.log("number.toString() 은 " + typeof strings);

/* 문자열을 숫자로 바꿀 때는 Number() 함수를 쓴다 */

var numAgain = Number(strings);

console.log("Number(strings) 은 " + typeof numAgain)

/* js에서는 모든 것이 객체이다. */

console.log("strings의 길이는" + strings.length);

console.log("strings의 첫번째 문자는 " + strings[0]);

var longstr = "abcdefghijklmnabc";

console.log("def의 위치는" + longstr.indexOf('def'));

console.log("fde가 존재하지 않을때 " + longstr.indexOf('fde'));

var shortstr = longstr.slice(0, 3);

console.log("0에서 2까지 자르면 " + shortstr);

console.log("나머지는 " + longstr.slice(3));

console.log("대문자로 " + shortstr.toUpperCase());

console.log("다시 소문자로 " + shortstr.toUpperCase().toLowerCase());

console.log("한글로 " + longstr.replaceAll('abc', '가나다'));

/* 반복문과 레이블 */

// var i;

for (var i = 0; i < 5; i++) {

    console.log(i);

}
var j = 0;

while(j < 5) {
    
    console.log(j);

    j++;    
}

for(i = 0; i < 3; i++) {

    console.log("start");

    for(j = 0; j < 3; j++) {

        if(i == 1 && j == 1) continue;

        console.log("i:" + i + " j:" + j);

    }
}

outer:
for(i = 0; i < 3; i++) {

    console.log("start");

    inner:
    for(j = 0; j < 3; j++) {

        if(i == 1 && j == 1) continue outer;

        console.log("i:" + i + " j:" + j);
    }
}



/* 선택자 */

var ball = document.getElementsByClassName("ball");

document.querySelector("#btn4").onclick = function() {

    ball[0].style.background = 'skyblue';

}

var balls = document.querySelectorAll(".ball");

var ballGet1 = document.getElementById("blueball");

var ballQs1 = document.querySelector("#blueball");

document.querySelector("#btn5").onclick = function() {

    if(ballGet1 === ballQs1) ballGet1.style.background = "blue";

}

var btn6 = document.querySelector("#btn6");
var ballarea = document.querySelector("#ball_area");
var balltextarea = document.getElementById("ball_text_area");

btn6.addEventListener("click", undo);

function undo() {

    ballGet1.style.background = "skyblue";

}

ballarea.addEventListener("dblclick", mout);

ballarea.addEventListener("mouseout", mout); // mouseleave 상속되지 않음

function mout() {
    balltextarea.innerHTML = "안녕히가십시오";
}

ballarea.addEventListener("mouseover", mover);

function mover() {
    balltextarea.innerHTML = "어서옵쇼";
}


//mousedown mouseup

//keydown keypress keyup

//blur change focus submit

//alert - js 멈춤
//
//document.ready dom tree 생성
//window.onload 페이지 모두 구성 unload

//삭제

document.querySelector("#btn7").onclick = function() {

    ballarea.removeEventListener("mouseover", mover);
    ballarea.removeEventListener("mouseout", mout);

}

document.querySelector("#ebtn").onclick = function() {
    balltextarea.innerHTML = "";
}


/* 콜백 */

var fruitList = ["apple", "pineapple"];

var divCb = document.querySelector("#cb");

fruitList.forEach(func);

function func(element) {

    divCb.innerHTML = divCb.innerHTML + "<p>" + element + "</p>";

}

fruitList.forEach(element => console.log(element));
