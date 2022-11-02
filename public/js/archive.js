//concertCnt >> 전체 포스터의 수
let num = concertCnt;
let posterbox = document.getElementsByClassName("posterbox")[0];

function showPage() {
    let poster_html = "";

    for (i = 0; i < 6; i++) {
        if (num - i <= 0) {
            poster_html += "";
        } else {
            poster_html +=
                '<div class="poster_img" id = "poster_' +
                (num - i) +
                '">' +
                '<a href = "/archive/concert/' +
                (num - i) +
                '"><div class="thumbnail_div"><img class="thumbnail_1" src="./image/poster/poster_' +
                (num - i) +
                '.jpg" alt="정보가 없습니다."></div>' +
                '<div class="poster_title">제' +
                (num - i) +
                "회</div></div></a>";
        }
    }
    posterbox.innerHTML = poster_html;

    if (num >= concertCnt) {
        document
            .getElementsByClassName("prev_btn")[0]
            .removeAttribute("onClick");
        document.getElementsByClassName("prev_btn")[0].style.borderRight =
            "2px solid #999";
        document.getElementsByClassName("prev_btn")[0].style.borderTop =
            "2px solid #999";
        document.getElementsByClassName("prev_btn")[0].style.cursor = "default";
    } else if (num < 7) {
        document
            .getElementsByClassName("next_btn")[0]
            .removeAttribute("onClick");
        document.getElementsByClassName("next_btn")[0].style.borderRight =
            "2px solid #999";
        document.getElementsByClassName("next_btn")[0].style.borderTop =
            "2px solid #999";
        document.getElementsByClassName("next_btn")[0].style.cursor = "default";
    } else {
        document
            .getElementsByClassName("prev_btn")[0]
            .setAttribute("onClick", "prevPage()");
        document
            .getElementsByClassName("next_btn")[0]
            .setAttribute("onClick", "nextPage()");
        document.getElementsByClassName("prev_btn")[0].style.borderRight =
            "3px solid #222";
        document.getElementsByClassName("prev_btn")[0].style.borderTop =
            "3px solid #222";
        document.getElementsByClassName("prev_btn")[0].style.cursor = "pointer";
        document.getElementsByClassName("next_btn")[0].style.borderRight =
            "3px solid #222";
        document.getElementsByClassName("next_btn")[0].style.borderTop =
            "3px solid #222";
        document.getElementsByClassName("next_btn")[0].style.cursor = "pointer";
    }
}

function removePage() {
    posterbox.innerHTML = null;
}

function prevPage() {
    removePage();
    if (num < concertCnt) {
        num += 6;
        showPage();
    } else {
        alert("마지막 페이지 입니다.");
        showPage();
    }
}

function nextPage() {
    removePage();
    if (num >= 7) {
        num -= 6;
        showPage();
    } else {
        alert("첫 페이지 입니다.");
        showPage();
    }
}

showPage();