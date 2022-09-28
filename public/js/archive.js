let showfirst = document.getElementsByClassName("posterbox_1")[0];
let showsecond = document.getElementsByClassName("posterbox_2")[0];
// let arc = [];
//38 >> 전체 포스터의 수
let num = 38;


function showPage(){
    let buildOne = ``;
    let buildTwo = ``;

    
    if(num > 5){
        for (i=0; i<3; i++){
        buildOne += '<div class="poster_img" id = "poster_' 
                    + (num-i)  
                    + '">' 
                    + '<a href = "/archive/concert/'+(num-i)+'"><img class="thumbnail_1" src="./image/poster/poster_'  
                    + (num-i) 
                    + '.jpg" alt="정보가 없습니다." .>' 
                    + '<div class="poster_title">제' 
                    + (num-i) 
                    + '회</div></div></a>';

        buildTwo += '<div class="poster_img" id = "poster_' 
                    + (num-3-i) 
                    + '">' 
                    + '<a href = "/archive/concert/'+(num-3-i)+'"><img class="thumbnail_2" src="./image/poster/poster_'  
                    + (num-3-i) 
                    + '.jpg" alt="정보가 없습니다." .>' 
                    + '<div class="poster_title">제' 
                    + (num-3-i) 
                    + '회</div></div></a>';
        }
    }
    else{
        switch(num){
            case 5: 
                for (i=0; i<3; i++){
                buildOne += '<div class="poster_img" id = "poster_' 
                + (num-i) 
                + '">' 
                + '<a href = "/archive/concert/'+(num-i)+'"><img class="thumbnail_1" src="./image/poster/poster_'  
                + (num-i) 
                + '.jpg" alt="정보가 없습니다." .>' 
                + '<div class="poster_title">제' 
                + (num-i) + '회</div></div></a>';
                }
                buildTwo += '<div class="poster_img" id = "poster_2">' + '<a href = "/archive/concert/2"><img class="thumbnail_1" src="./image/poster/poster_2.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title">제2회</div></div></a>';
                buildTwo += '<div class="poster_img" id = "poster_1">' + '<a href = "/archive/concert/1"><img class="thumbnail_1" src="./image/poster/poster_1.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title">제1회</div></div></a>';
                break;
            case 4:
                for (i=0; i<3; i++){
                buildOne += '<div class="poster_img" id = "poster_' + (num-i) + '">' + '<a href = "/archive/concert/'+(num-i)+'"><img class="thumbnail_1" src="./image/poster/poster_'  + (num-i) + '.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title"">제' + (num-i) + '회</div></div></a>';
                }
                buildTwo += '<div class="poster_img" id = "poster_1">' + '<a href = "/archive/concert/1"><img class="thumbnail_1" src="./image/poster/poster_1.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title">제1회 정기 연주회</div></div></a>';
                break;
            case 3:
                for (i=0; i<3; i++){
                buildOne += '<div class="poster_img" id = "poster_' + (num-i) + '">' + '<a href = "/archive/concert/'+(num-i)+'"><img class="thumbnail_1" src="./image/poster/poster_'  + (num-i) + '.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title">제' + (num-i) + '회 정기 연주회</div></div></a>';
                }
                break;
            case 2: 
                buildOne += '<div class="poster_img" id = "poster_2">' + '<a href = "/archive/concert/2"><img class="thumbnail_1" src="./image/poster/poster_2.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title">제2회</div></div></a>';
                buildOne += '<div class="poster_img" id = "poster_1">' + '<a href = "/archive/concert/1"><img class="thumbnail_1" src="./image/poster/poster_1.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title">제1회</div></div></a>';
                break;
            case 1:
                buildOne += '<div class="poster_img" id = "poster_1">' + '<a href = "/archive/concert/1"><img class="thumbnail_1" src="./image/poster/poster_1.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title">제1회</div></div></a>';
                break;
            default:
                buildOne += '<div></div>';
                buildTwo += '<div></div>';
        };
    };
    showfirst.innerHTML = buildOne;
    showsecond.innerHTML = buildTwo;
    if (num>=38) {
        document.getElementsByClassName( 'prev_btn' )[0].removeAttribute( 'onClick' );
        document.getElementsByClassName('prev_btn')[0].style.borderRight = '2px solid #999';
        document.getElementsByClassName('prev_btn')[0].style.borderTop = '2px solid #999';
        document.getElementsByClassName('prev_btn')[0].style.cursor = 'default';

    }
    else if (num<7) {
        document.getElementsByClassName( 'next_btn' )[0].removeAttribute( 'onClick' );
        document.getElementsByClassName('next_btn')[0].style.borderRight = '2px solid #999';
        document.getElementsByClassName('next_btn')[0].style.borderTop = '2px solid #999';
        document.getElementsByClassName('next_btn')[0].style.cursor = 'default';
    }

    else {
        document.getElementsByClassName('prev_btn')[0].setAttribute('onClick', "prevPage()");
        document.getElementsByClassName('next_btn')[0].setAttribute('onClick', "nextPage()");
        document.getElementsByClassName('prev_btn')[0].style.borderRight = '3px solid #222';
        document.getElementsByClassName('prev_btn')[0].style.borderTop = '3px solid #222';
        document.getElementsByClassName('prev_btn')[0].style.cursor = 'pointer';
        document.getElementsByClassName('next_btn')[0].style.borderRight = '3px solid #222';
        document.getElementsByClassName('next_btn')[0].style.borderTop = '3px solid #222';
        document.getElementsByClassName('next_btn')[0].style.cursor = 'pointer';
    }
};

function removePage() {
    showfirst.innerHTML = null;
    showsecond.innerHTML = null;
}

function prevPage() {
    removePage();
    if (num < 38) {
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

// function popPoster() {
//     window.open('windowopen.html','window팝업','width = 400, height = 200, status = no, toolbar = no');
// function popPoster(url) {
//     const img = new Image();
//     img.src=url;
//     var img_width=img.width;
//     var win_width=img.width+25;
//     var img_height=img.height;
//     var win=img.height+30;
//     const OpenWindow=window.open('','_blank', 'width='+img_width+', height='+img_height+', menubars=no, scrollbars=auto');
//     OpenWindow.document.write("<style>body{margin:0px;}</style><img src='"+url+"' width='"+win_width+"'>");
//     }
// };
