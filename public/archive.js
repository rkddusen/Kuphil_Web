let showfirst = document.getElementsByClassName("posterbox_1")[0];
let showsecond = document.getElementsByClassName("posterbox_2")[0];
// let arc = [];
//37 >> 전체 포스터의 수
let num = 37;

function showPage(){
    let buildOne = ``;
    let buildTwo = ``;
    if(num > 5){
        for (i=0; i<3; i++){
        buildOne += '<div class="poster_img" id = "poster_' + (num-i) + '">' + '<img onclick = "popPoster(this.src)" class="thumbnail_1" src="./image/poster_'  + (num-i) + '.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title" onclick="popPoster(this.src)">제' + (num-i) + '회 정기 연주회</div></div>';
        buildTwo += '<div class="poster_img" id = "poster_' + (num-3-i) + '">' + '<img onclick = "popPoster(this.src)" class="thumbnail_2" src="./image/poster_'  + (num-3-i) + '.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title" onclick="popPoster(this.src)">제' + (num-3-i) + '회 정기 연주회</div></div>';
        }
    }
    else{
        switch(num){
            case 5: 
                for (i=0; i<3; i++){
                buildOne += '<div class="poster_img" id = "poster_' + (num-i) + '">' + '<img onclick = "popPoster()" class="thumbnail_1" src="./image/poster_'  + (num-i) + '.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title" onclick="popPoster()">제' + (num-i) + '회 정기 연주회</div></div>';
                }
                buildTwo += '<div class="poster_img" id = "poster_2">' + '<img onclick = "popPoster()" class="thumbnail_1" src="./image/poster_2.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title" onclick="popPoster()">제2회 정기 연주회</div></div>';
                buildTwo += '<div class="poster_img" id = "poster_1">' + '<img onclick = "popPoster()" class="thumbnail_1" src="./image/poster_1.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title" onclick="popPoster()">제1회 정기 연주회</div></div>';
                break;
            case 4:
                for (i=0; i<3; i++){
                buildOne += '<div class="poster_img" id = "poster_' + (num-i) + '">' + '<img onclick = "popPoster()" class="thumbnail_1" src="./image/poster_'  + (num-i) + '.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title" onclick="popPoster()">제' + (num-i) + '회 정기 연주회</div></div>';
                }
                buildTwo += '<div class="poster_img" id = "poster_1">' + '<img onclick = "popPoster()" class="thumbnail_1" src="./image/poster_1.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title" onclick="popPoster()">제1회 정기 연주회</div></div>';
                break;
            case 3:
                for (i=0; i<3; i++){
                buildOne += '<div class="poster_img" id = "poster_' + (num-i) + '">' + '<img onclick = "popPoster()" class="thumbnail_1" src="./image/poster_'  + (num-i) + '.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title" onclick="popPoster()">제' + (num-i) + '회 정기 연주회</div></div>';
                }
                break;
            case 2: 
                buildOne += '<div class="poster_img" id = "poster_2">' + '<img onclick = "popPoster()" class="thumbnail_1" src="./image/poster_2.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title" onclick="popPoster()">제2회 정기 연주회</div></div>';
                buildOne += '<div class="poster_img" id = "poster_1">' + '<img onclick = "popPoster()" class="thumbnail_1" src="./image/poster_1.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title" onclick="popPoster()">제1회 정기 연주회</div></div>';
                break;
            case 1:
                buildOne += '<div class="poster_img" id = "poster_1">' + '<img onclick = "popPoster()" class="thumbnail_1" src="./image/poster_1.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title" onclick="popPoster()">제1회 정기 연주회</div></div>';
                break;
            default:
                buildOne += '<div></div>';
                buildTwo += '<div></div>';
        };
    };
    showfirst.innerHTML = buildOne;
    showsecond.innerHTML = buildTwo;
};

function removePage() {
    showfirst.innerHTML = null;
    showsecond.innerHTML = null;
}

function prevPage() {
    removePage();
    if (num < 37) {
        num += 6;
        showPage();
    }
    else {
        alert("마지막 페이지 입니다.");
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
        alert("첫 페이지 입니다.");
        showPage();
    }
};

showPage();

function popPoster(url) {
    const img = new Image();
    img.src=url;
    var img_width=img.width;
    var win_width=img.width+25;
    var img_height=img.height;
    var win=img.height+30;
    const OpenWindow=window.open('','_blank', 'width='+img_width+', height='+img_height+', menubars=no, scrollbars=auto');
    OpenWindow.document.write("<style>body{margin:0px;}</style><img src='"+url+"' width='"+win_width+"'>");
}