let showfirst = document.getElementsByClassName("posterbox_1")[0];
let showsecond = document.getElementsByClassName("posterbox_2")[0];
// let arc = [];
//38 >> 전체 포스터의 수
let num = 38;

// 모달창 폐업합니다^^;;,,
// let modal = document.querySelector(".modal");
// let openButton = document.getElementById("open");
// let overlay = modal.querySelector(".modal_overlay");
// let closeBtn = modal.querySelector("button");
// let openModal = (i) => {
//     modal.classList.remove("hidden");
//     let classmodal = document.getElementsByClassName("modal")[0];
//     let modaldiv = `<div class="modal_overlay"></div>
//     <div class="modal_content">
//         <div class="modal_text">
//             <h1>제36회 정기 연주회</h1>
//             <img src="./image/poster/poster_`+i+`.jpg" alt="정보가 없습니다.">
//             <div class="modal_text_1">
//                 <h3>장소 : </h3>
//                 <h3>시간 : </h3>
//                 <h3>프로그램 :</h3>
//             </div>
//             <hr/>
//             <div class="modal_text_2">
//                 <h3>지휘 : </h3>
//             </div>
//         </div>
//         <button id="close" onclick="closeModal();">Close</button>
//     </div>`;
//     classmodal.innerHTML = modaldiv;

    
// }
// let closeModal = () => {
//         modal.classList.add("hidden");
//     }

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
                    + '.jpg" alt="정보가 없습니다." .></a>' 
                    + '<div class="poster_title">제' 
                    + (num-i) 
                    + '회</div></div>';

        buildTwo += '<div class="poster_img" id = "poster_' 
                    + (num-3-i) 
                    + '">' 
                    + '<a href = "/archive/concert/'+(num-3-i)+'"><img class="thumbnail_2" src="./image/poster/poster_'  
                    + (num-3-i) 
                    + '.jpg" alt="정보가 없습니다." .>' 
                    + '<div class="poster_title">제' 
                    + (num-3-i) 
                    + '회</div></div>';
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
                + (num-i) + '회</div></div>';
                }
                buildTwo += '<div class="poster_img" id = "poster_2">' + '<a href = "/archive/concert/2"><img class="thumbnail_1" src="./image/poster/poster_2.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title">제2회</div></div>';
                buildTwo += '<div class="poster_img" id = "poster_1">' + '<a href = "/archive/concert/1"><img class="thumbnail_1" src="./image/poster/poster_1.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title">제1회</div></div>';
                break;
            case 4:
                for (i=0; i<3; i++){
                buildOne += '<div class="poster_img" id = "poster_' + (num-i) + '">' + '<a href = "/archive/concert/'+(num-i)+'"><img class="thumbnail_1" src="./image/poster/poster_'  + (num-i) + '.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title"">제' + (num-i) + '회</div></div>';
                }
                buildTwo += '<div class="poster_img" id = "poster_1">' + '<a href = "/archive/concert/1"><img class="thumbnail_1" src="./image/poster/poster_1.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title">제1회 정기 연주회</div></div>';
                break;
            case 3:
                for (i=0; i<3; i++){
                buildOne += '<div class="poster_img" id = "poster_' + (num-i) + '">' + '<a href = "/archive/concert/'+(num-i)+'"><img class="thumbnail_1" src="./image/poster/poster_'  + (num-i) + '.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title">제' + (num-i) + '회 정기 연주회</div></div>';
                }
                break;
            case 2: 
                buildOne += '<div class="poster_img" id = "poster_2">' + '<a href = "/archive/concert/2"><img class="thumbnail_1" src="./image/poster/poster_2.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title">제2회</div></div>';
                buildOne += '<div class="poster_img" id = "poster_1">' + '<a href = "/archive/concert/1"><img class="thumbnail_1" src="./image/poster/poster_1.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title">제1회</div></div>';
                break;
            case 1:
                buildOne += '<div class="poster_img" id = "poster_1">' + '<a href = "/archive/concert/1"><img class="thumbnail_1" src="./image/poster/poster_1.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title">제1회</div></div>';
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


