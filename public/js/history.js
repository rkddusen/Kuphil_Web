//버튼 누르면 스크롤 이동
const buttonArr = document.getElementsByTagName("button");

for (let i = 1; i < buttonArr.length; i++) {
    buttonArr[i].addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".year" + (i)).scrollIntoView(true);
    });
}
