
let showfirst = document.getElementsByClassName("posterbox_1")[0];
let showsecond = document.getElementsByClassName("posterbox_2")[0];
let buildOne = ``;
let buildTwo = ``;
let arc = [];
let num = 0;

function showPage(){
//25 >> 전체 포스터의 수
    for (let i = num; i < num + 6; i++) {
        arc[i] = 'poster_' + i + '.png';
    };

    buildOne += '<div class="poster_img" id = "firstposter">' + '<img src='  + arc[0] + ' alt="정보가 없습니다." .>' + '<div class="poster_title_text">제' + arc[0]+ '회 정기 연주회</div></div>';
    buildOne += '<div class="poster_img" id = "secondposter">' + '<img src='  + arc[1] + ' alt="정보가 없습니다." .>' + '<div class="poster_title_text">제' + arc[1] + '회 정기 연주회</div></div>';
    buildOne += '<div class="poster_img" id = "thirdposter">' + '<img src='  + arc[2] + ' alt="정보가 없습니다." .>' + '<div class="poster_title_text">제' + arc[2]+ '회 정기 연주회</div></div>';
    buildTwo += '<div class="poster_img" id = "fourthposter">' + '<img src='  + arc[3] + ' alt="정보가 없습니다." .>' + '<div class="poster_title_text">제' + arc[3]+ '회 정기 연주회</div></div>';
    buildTwo += '<div class="poster_img" id = "fifthposter">' + '<img src='  + arc[4] + ' alt="정보가 없습니다." .>' + '<div class="poster_title_text">제' + arc[4]+ '회 정기 연주회</div></div>';
    buildTwo += '<div class="poster_img" id = "sixthposter">' + '<img src='  + arc[5] + ' alt="정보가 없습니다." .>' + '<div class="poster_title_text">제' + arc[5]+ '회 정기 연주회</div></div>';

    showfirst.innerHTML = buildOne;
    showsecond.innerHTML = buildTwo;
};

showPage();

function removePage() {
    document.getElementsByClassName("posterbox_1")[0] = null;
    document.getElementsByClassName("posterbox_2")[0] = null;
}

function prevPage() {
    
};
function nextPage() {
    removePage();
    for (let i = num + 6; i < num + 12; i++) {
        arc[i] = 'poster_' + i + '.png';
    };

    buildOne += '<div class="poster_img" id = "firstposter">' + '<img src='  + arc[0] + ' alt="정보가 없습니다." .>' + '<div class="poster_title_text">제' + i+ '회 정기 연주회</div></div>';
    buildOne += '<div class="poster_img" id = "secondposter">' + '<img src='  + arc[1] + ' alt="정보가 없습니다." .>' + '<div class="poster_title_text">제' + i + '회 정기 연주회</div></div>';
    buildOne += '<div class="poster_img" id = "thirdposter">' + '<img src='  + arc[2] + ' alt="정보가 없습니다." .>' + '<div class="poster_title_text">제' + i + '회 정기 연주회</div></div>';
    buildTwo += '<div class="poster_img" id = "fourthposter">' + '<img src='  + arc[3] + ' alt="정보가 없습니다." .>' + '<div class="poster_title_text">제' + i + '회 정기 연주회</div></div>';
    buildTwo += '<div class="poster_img" id = "fifthposter">' + '<img src='  + arc[4] + ' alt="정보가 없습니다." .>' + '<div class="poster_title_text">제' + i + '회 정기 연주회</div></div>';
    buildTwo += '<div class="poster_img" id = "sixthposter">' + '<img src='  + arc[5] + ' alt="정보가 없습니다." .>' + '<div class="poster_title_text">제' + i + '회 정기 연주회</div></div>';

    showfirst.innerHTML = buildOne;
    showsecond.innerHTML = buildTwo;

};

