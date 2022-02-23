let showfirst = document.getElementsByClassName("posterbox_1")[0];
let showsecond = document.getElementsByClassName("posterbox_2")[0];
// let arc = [];
//36 >> 전체 포스터의 수
let num = 36;

function showPage(){
    let buildOne = ``;
    let buildTwo = ``;
    for (i=0; i<3; i++){
    buildOne += '<div class="poster_img" id = "poster_' + (num-i) + '">' + '<img class="thumbnail_1" src="./image/poster_'  + (num-i) + '.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title_text">제' + (num-i) + '회 정기 연주회</div></div>';
    buildTwo += '<div class="poster_img" id = "poster_' + (num-i-3) + '">' + '<img class="thumbnail_2" src="./image/poster_'  + (num-i-3) + '.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title_text">제' + (num-i-3) + '회 정기 연주회</div></div>';
    }

    showfirst.innerHTML = buildOne;
    showsecond.innerHTML = buildTwo;
};



function removePage() {
    showfirst.innerHTML = null;
    showsecond.innerHTML = null;
}

function prevPage() {
    removePage();
    if (num <= 30) {
        num += 6;
        showPage();
    }
    else {
        alert("첫 페이지 입니다.");
        showPage();
    }
};

function nextPage() {
    removePage();
    if (num >= 7) {
        num -= 6;
        showPage();
    }
    else {
        alert("마지막 페이지 입니다.");
        showPage();
    }
};

showPage();