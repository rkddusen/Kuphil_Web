let showfirst = document.getElementsByClassName("posterbox_1")[0];
let showsecond = document.getElementsByClassName("posterbox_2")[0];
let buildOne = ``;
let buildTwo = ``;


function prevPage() {
    
};
function nextPage() {

};

function showPage(){
    let arc = [];
    for (let i = 0; i < 25; i++) {
        arc[i] = 'poster_' + i + '.png';
    };

    buildOne += '<div class="poster_img" id = "firstposter">' + '<img src='  + arc[0] + ' alt="제n회포스터" .>' + '<div class="poster_title_text">제1회 정기 연주회</div></div>';
    buildOne += '<div class="poster_img" id = "secondposter">' + '<img src='  + arc[1] + ' alt="제n회포스터" .>' + '<div class="poster_title_text">제2회 정기 연주회</div></div>';
    buildOne += '<div class="poster_img" id = "thirdposter">' + '<img src='  + arc[2] + ' alt="제n회포스터" .>' + '<div class="poster_title_text">제3회 정기 연주회</div></div>';

    buildTwo += '<div class="poster_img" id = "fourthposter">' + '<img src='  + arc[3] + ' alt="제n회포스터" .>' + '<div class="poster_title_text">제4회 정기 연주회</div></div>';
    buildTwo += '<div class="poster_img" id = "fifthposter">' + '<img src='  + arc[4] + ' alt="제n회포스터" .>' + '<div class="poster_title_text">제5회 정기 연주회</div></div>';
    buildTwo += '<div class="poster_img" id = "sixthposter">' + '<img src='  + arc[5] + ' alt="제n회포스터" .>' + '<div class="poster_title_text">제6회 정기 연주회</div></div>';

    showfirst.innerHTML = buildOne;
    showsecond.innerHTML = buildTwo;
};

showPage();