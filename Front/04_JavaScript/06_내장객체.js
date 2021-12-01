window.onload = () => {
    // object 객체
    let btn1 = document.getElementById('btn1');
    
    btn1.addEventListener('click', () => {
        let obj1 = {};
        let obj2 = {name: '홍길동', height: 165};
        let obj3 = new Object();

        console.log(obj1);
        console.log(obj2);
        console.log(obj3);

        console.log(obj1 instanceof Object);
        console.log(obj2 instanceof Object);
        console.log(obj3 instanceof Object);

        console.log('---------------------------------');
        console.log(obj2.hasOwnProperty('name'));
        console.log(obj2.hasOwnProperty('height'));
        console.log(obj2.hasOwnProperty('weight'));

    });

    // Number 객체
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', () => {
        let area = document.getElementById('area2');

        let num1 = 3141592;
        let num2 = Number(3.141592);
        let num3 = new Number(3.141592);

        area.innerHTML = 'Number 객체 <br><br>';
        area.innerHTML += `num1 : ${num1}, num1 instanceof Number : ${num1 instanceof Number}, typeof(num1) : ${typeof(num1)} <br>`;
        area.innerHTML += `num2 : ${num2}, num1 instanceof Number : ${num2 instanceof Number}, typeof(num2) : ${typeof(num2)} <br>`;
        area.innerHTML += `num3 : ${num3}, num1 instanceof Number : ${num3 instanceof Number}, typeof(num3) : ${typeof(num3)} <br><br>`;

        area.innerHTML += `num1.toExponential() : ${num1.toExponential()}, typeof(num1.toExponential()) : ${typeof(num1.toExponential())}<br>`;
        area.innerHTML += `(3141592).toExponential() : ${(3141592).toExponential()},  typeof((3141592).toExponential()) : ${typeof((3141592).toExponential())}<br>`;
        area.innerHTML += `num2.toFixed(2) : ${num2.toFixed(2)}, ${typeof(num2.toFixed(2))} <br>`;
        area.innerHTML += `num3.toPrecision() : ${num3.toPrecision()}, ${typeof(num3.toPrecision())} <br>`;
        area.innerHTML += `num3.toPrecision(1) : ${num3.toPrecision(1)}, ${typeof(num3.toPrecision(1))} <br>`;
        area.innerHTML += `num1.toPrecision(1) : ${num1.toPrecision(1)}, ${typeof(num1.toPrecision(1))} <br>`;
    });

    // String 객체
    let btn3 = document.getElementById('btn3');

    btn3.addEventListener('click', () => {
        let area = document.getElementById('area3');
        let str1 = 'javascript';
        let str2 = new String('javascript');

        area.innerHTML = `str1 : ${str1}, typeof(str1) : ${typeof(str1)} <br>`;
        area.innerHTML += `str2 : ${str2}, typeof(str2) : ${typeof(str2)} <br><br>`;

        area.innerHTML += `str1.bold() : ${str1.bold()} <br>`;
        area.innerHTML += `str1.italics() : ${str1.italics()} <br>`;
        area.innerHTML += `str1.fontcolor('red') : ${str1.fontcolor('red')} <br>`;
        area.innerHTML += `str1.link('https://www.naver.com') : ${str1.link('https://www.naver.com')} <br>`;
    });

    // Date 객체
    let btn4 = document.getElementById('btn4');

    btn4.addEventListener('click', () => {
        let area = document.getElementById('area4');
        // Date 객체를 생성하는 방법
        let date1 = new Date();
        let date2 = new Date(1000);
        let date3 = new Date('2021/11/23/20:19:30');
        let date4 = new Date('2021-11-23T20:19:30');
        let date5 = new Date(2021, 10, 23, 20, 24, 59); // 월은 0부터 시작

        area.innerHTML = `Date 객체 <br><br>`;

        area.innerHTML += `date1 : ${date1} <br>`;
        area.innerHTML += `date2 : ${date2} <br>`;
        area.innerHTML += `date3 : ${date3} <br>`;
        area.innerHTML += `date4 : ${date4} <br>`;
        area.innerHTML += `date5 : ${date5} <br><br>`;

        // Date 객체의 메소드 호출
        area.innerHTML += `date1.getFullYear() : ${date1.getFullYear()} <br>`;
        area.innerHTML += `date1.getMonth() : ${date1.getMonth() + 1} <br>`; // 월은 0부터 시작
        area.innerHTML += `date1.getDate() : ${date1.getDate()} <br>`;
        area.innerHTML += `date1.getDay() : ${date1.getDay()} <br>`; // 0: 일요일 6: 토요일
        area.innerHTML += `date1.getHours() : ${date1.getHours()} <br>`;
        area.innerHTML += `date1.getMinutes() : ${date1.getMinutes()} <br>`;
        area.innerHTML += `date1.getSeconds() : ${date1.getSeconds()} <br>`;
        area.innerHTML += `date1.getMilliseconds() : ${date1.getMilliseconds()} <br><br>`;

        // 1970년 1월 1일 00시를 기준으로 현재 시간에 대한 밀리 세컨드 값을 반환한다.
        area.innerHTML += `${date1.getTime()} <br>`;
        // 표준시와 Date 객체에 지정된 시간과 차이를 분 단위로 반환한다.
        area.innerHTML += `${date1.getTimezoneOffset()/60} <br>`;
        area.innerHTML += `${date1.toDateString()} <br>`;
        area.innerHTML += `${date1.toTimeString()} <br>`;
        area.innerHTML += `${date1.toUTCString()} <br>`;
        area.innerHTML += `${date1.toISOString()} <br>`;
        area.innerHTML += `${date1.toLocaleString('en-US')} <br>`;
        area.innerHTML += `${date1.toLocaleDateString('en-US')} <br>`;
        area.innerHTML += `${date1.toLocaleTimeString('en-US')} <br>`;
        
    });
};