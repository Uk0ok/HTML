window.onload = () => {
    // window 객체
    // 1) window.open()
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', () => {
        // window.open(); // 새로운 탭
        // window.open('https://www.naver.com'); // 열고자하는 URL 
        // window.open('https://www.naver.com', 'naver'); // 열고자하는 URL, 창 이름

        // 특성의 경우 브라우저 마다 다르게 동작하기 떄문에 정상적으로 돋작하는지 확인해야 한다.
        window.open('https://www.naver.com', 'naver', 'width=500', 'height=600', 'resizeable=no'); // 열고자하는 URL, 창 이름

    });
    
    // 2) 타이머 관련 메소드
    // window.setTimeout()
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', () => {
        let newWindow = window.open();

        newWindow.alert('3초 후에 이 페이지는 종료됩니다.');

        // 일정 시간 후에 콜백 함수를 한 번 실행
        timerId = window.setTimeout(() => {
            newWindow.close();
        }, 3000);

        console.log(timerId);
        
        // 타이머 id를 clearTimeout() 함수에 전달하면 해당 id의 타이머를 취소할 수 있다.
        clearTimeout(timerId); 
    });

    // window.setInterval()
    let timerId = 0;
    let btnStart = document.getElementById('btnStart');
    let btnStop = document.getElementById('btnStop');

    btnStart.addEventListener('click', () => {
        let area = document.getElementById('area1');

        timerId = window.setInterval(() => {
            let date = new Date();

            area.innerHTML = `<span id='timer'>${date.getHours()} : ${date.getMinutes()} : <span id='second'>${date.getSeconds()}</span></span>`;
            
        }, 1000);
    });

    btnStop.addEventListener('click', () => {
        clearInterval(timerId);
    });

    // BOM(Browser Object Model) 객체
    // 1) location 객체
    let btn3 = document.getElementById('btn3');

    btn3.addEventListener('click', () => {
        let area = document.getElementById('area3');

        area.innerHTML = '<h4>location 객체</h4>';

        for (const key in location) {
           area.innerHTML += `key : ${key}, value : ${location[key]}<br><br>`;
        };
    });

    // 3) navigator 객체
    let btn4 = document.getElementById('btn4');

    btn4.addEventListener('click', () => {
        let area = document.getElementById('area4');

        area.innerHTML = '<h4>navigator 객체</h4>';

        for (const key in navigator) {
           area.innerHTML += `key : ${key}, value : ${navigator[key]}<br><br>`;
        };
    });

    // 4) screen 객체
    let btn5 = document.getElementById('btn5');

    btn5.addEventListener('click', () => {
        let area = document.getElementById('area5');

        area.innerHTML = '<h4>screen 객체</h4>';

        for (const key in screen) {
           area.innerHTML += `key : ${key}, value : ${screen[key]}<br><br>`;
        };
    });
};