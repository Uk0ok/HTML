submit.addEventListener('click', () => {
    let userId = document.getElementById('userId').value;
    let regExp = /^[a-z]+[a-zA-Z0-9]{4,12}$/;
    if(!regExp.test(userId)) {
        alert('아이디를 양식에 맞게 입력해 주세요.');
    }
    let userPwd1 = document.getElementById('userPwd1').value;
    let userPwd2 = document.getElementById('userPwd2').value;
    let regExp = /[\w`~!@@#$%^&*]{8,15}$/;
    if(!regExp.test(userPwd1)) {
        alert('비밀번호를 양식에 맞게 입력해 주세요.');
    }

    if (userPwd1 !== userPwd2) {
        alert('비밀번호와 비밀번호 확인 번호가 일치하지 않습니다.');

        return false;
    }
    let name = document.getElementById('userName');
    let regExp = /^[가-힣]+{2}$/;

});