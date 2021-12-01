// var h = document.getElementById('heading1');
// h.style.backgroundColor = 'red';

// 1. 변수와 자료형
// 전역 변수 선언
str1 = '전역변수';
// 함수 외부에 선언한 변수는 var를 붙여도 전역변수이다.
var str2 = 'var 전역변수';

// 자바스크립트에서 페이지가 모두 로드되면 자동으로 실행되는 함수를 구현 시 사용한다.
window.onload = function() {
    // var h = document.getElementById('heading1');
    // h.style.backgroundColor = 'red';

    var str1 = '지역변수 1';
    var str3 = '지역변수 2';
    var str4;

    console.log(str1); // 지역변수 1
    console.log(window.str1); // 전역변수
    console.log(this.str1); // 전역변수

    console.log(str2); // var 전역변수
    console.log(window.str2); // var 전역변수
    console.log(this.str2); // var 전역변수

    console.log(str3); // 지역변수 2
    console.log(window.str3); // undefined
    console.log(this.str3); // undefined

    console.log(str4); //undefined
    console.log(typeof(str4)); //'undefined'

    console.log('-------------------------------------------');
    
    // var, let, const(상수) 차이점
    // 1) 중복 선언
    var num = 0;
    console.log(num);
    
    var num = 10;
    console.log(num);
    
    var num = 20;
    console.log(num);
    
    let num2 = 10;
    console.log(num2);
    
    // let num2 = 20;
    // console.log(num2);
    
    const num3 = 10;
    // java에서 final
    // num3 = 20; 상수이기 때문에 값의 재할당이 불가능하다.
    console.log('-------------------------------------------');
    
    // 2) 유효 범위(스코프)
    //  - 함수 안에서 var 키워드로 선언된 변수는 함수 유효 범위를 갖는다.
    
    if(true) {
        var num4 = 10;
        
        console.log(num4);
    }
    console.log(num4);

    // - 함수 안에서 let, const 키워드로 선언된 변수는 블록 유효 범위를 갖는다.

    if(true) {
        let num5 = 20;
        const num6 = 30;

        console.log(num5);
        console.log(num6);
    }
    // console.log(num5);
    // console.log(num6);
}

// 자료형 테스트
function typeTest() {
    let name = '장재욱'; // string
    let age = 20; // number
    let height = 185.5; // number
    let check = false; // boolean
    let hobbies = ['축구', '야구', '농구']; // array
    let user = {
        name: '장재욱',
        age: 20,
        height: 185,
        id: 'uk0ok',
        hobbies: ['축구', '야구', '농구']
    }; // 객체
    let testFunc = function (num1, num2) {
        return num1 + num2;
    }; // function

    // console.log(testFunc(10,20));
    // console.log(testFunc()); // NaN

    // console.log(user);
    // console.log(hobbies);
    // console.log(testFunc);

    let area = document.getElementById('area1');
    
    area.innerHTML = '<h4>안녕하세요.<h4>';
    area.innerHTML += `name : ${name}, type : ${typeof(name)}<br>`;
    area.innerHTML += `age : ${age}, type : ${typeof(age)}<br>`;
    area.innerHTML += `height : ${height}, type : ${typeof(height)}<br>`;
    area.innerHTML += `check : ${check}, type : ${typeof(check)}<br>`;
    area.innerHTML += `hobbies : ${hobbies}, type : ${typeof(hobbies)}<br>`;
    area.innerHTML += `user : ${user}, type : ${typeof(user)}<br>`;
    area.innerHTML += `testFunc : ${testFunc}, type : ${typeof(testFunc)}<br>`;
};

// 2. 데이터 형변환
// 1) 문자열과 숫자의 + 연산
function plusTest() {
    let test1 = 7 + 7; // 14
    let test2 = '7' + 7; // '77'
    let test3 = 7 + '7'; // '77'
    let test4 = 7 + 7 + '7'; // '147'
    let test5 = 7 + '7' + 7; // '777'
    let test6 = '7' + (7 + 7); // '714'
    let test7 = 7 * '7'; // 49
    let test8 = '7' - 7; // 4
    let test9 = '4' / 2; // 2
    let test10 = 4 % '2'; // 0
    let test11 = '3' * '7'; // 21
    let test12 = '3' * 'a'; // NaN

    let area = document.getElementById('area2');

    area.innerHTML += `test1 : ${test1} <br>`;
    area.innerHTML += `test2 : ${test2} <br>`;
    area.innerHTML += `test3 : ${test3} <br>`;
    area.innerHTML += `test4 : ${test4} <br>`;
    area.innerHTML += `test5 : ${test5} <br>`;
    area.innerHTML += `test6 : ${test6} <br>`;
    area.innerHTML += `test7 : ${test7} <br>`;
    area.innerHTML += `test8 : ${test8} <br>`;
    area.innerHTML += `test9 : ${test9} <br>`;
    area.innerHTML += `test10 : ${test10} <br>`;
    area.innerHTML += `test11 : ${test11} <br>`;
    area.innerHTML += `test12 : ${test12} <br>`;
};

// 2) 강제 형변환
function castingTest() {
    let area = document.getElementById('area3');

    area.innerHTML = `${2 + '3'} <br>`;
    area.innerHTML += `${2 + Number('3')} <br>`;
    area.innerHTML += `${String(2) + Number('3')} <br>`;
    area.innerHTML += `${2 + parseInt('3')} <br>`;
    area.innerHTML += `${2 + parseFloat('3')} <br>`;
    area.innerHTML += `${parseInt('0xffff', 16)} <br>`;
};

// 3. 연산자
// == 연산자와 === 연산자
function opTest() {
    let area = document.getElementById('area4');

    area.innerHTML = '"==" 연산자 테스트 <br><br>';
    area.innerHTML += `${7 == 7} <br>`;
    area.innerHTML += `${'7' == 7}  <br>`;
    area.innerHTML += `${'7' == '7'}  <br>`;
    area.innerHTML += `${'7' != 7}  <br>`;
    area.innerHTML += `${7 != '7'}  <br><br>`;
    
    area.innerHTML += '"===" 연산자 테스트 <br><br>';
    area.innerHTML += `${7 === 7} <br>`;
    area.innerHTML += `${'7' === 7}  <br>`;
    area.innerHTML += `${'7' === '7'}  <br>`;
    area.innerHTML += `${'7' !== 7}  <br>`;
    area.innerHTML += `${'7' != '7'}  <br><br>`;
}

// 4. 제어문
// for in문
function forInTest() {
    // let array = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];
    let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    // for (let i = 0; i < array.length; i++) {
    //     console.log(array[i]);
    // }

    // 반복 변수에 array의 index를 순서대로 i에 담아서 반복시킨다.
    // for (const i in array) {
    //     console.log(i, array[i]);
    // }

    // ES6부터 추가된 for문
    for (const iterator of array) {
        console.log(iterator);
        
    }
}