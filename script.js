var button = document.getElementById('clickMe');

button.addEventListener('click', function() {
    var message = document.getElementById('message');
    message.style.color = 'green';
    message.innerHTML = '<p>뷁뷁<p> <img src="다운로드.png" alt="Image" style="width: 100px; height: 100px;">';
    message.style.fontSize = '20px';

    setTimeout(function() {
        message.style.color = 'red';
        message.style.backgroundColor = "white";
        message.style.display = "inline-block";
        message.innerHTML = '<p>이 마크는 사진 폴더에 들어가서 발견한 아무 사진입니다<p> \
        <p>무슨사진인지도 모르고 그냥 넣은거에요<p>\
        <p>그런데 이 마크가 있으니 이 페이지가 왠지 공신력있어 보이네요<p>\
        <img src="다운로드.png" alt="Image" style="width: 100px; height: 100px;">';
        message.style.fontSize = '10px';
    }, 2000);
});



const form = document.getElementById('guestbookForm');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    fetch("https://script.google.com/macros/s/AKfycbwcAOjkTwxmnFmdQ0rfqyU7Twi7xZPp3vPdmVWTtLQJCr5acnrT_Md5XKt_7z92Iecm/exec", {
        method: "POST",
        body: JSON.stringify({ name, message }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.text())
    .then(text => {
        result.innerText = text;
        form.reset();
    })
    .catch(err => {
        result.innerText = "에러 발생!";
        console.error(err);
    });
});
