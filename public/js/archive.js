let showfirst = document.getElementsByClassName("posterbox_1")[0];
let showsecond = document.getElementsByClassName("posterbox_2")[0];
// let arc = [];
//38 >> 전체 포스터의 수
let num = 38;

let modal = document.querySelector(".modal");
let openButton = document.getElementById("open");
let overlay = modal.querySelector(".modal_overlay");
let closeBtn = modal.querySelector("button");
let openModal = (i) => {
    modal.classList.remove("hidden");
    let classmodal = document.getElementsByClassName("modal")[0];
    let modaldiv = `<div class="modal_overlay"></div>
    <div class="modal_content">
        <img src="./image/poster_`+i+`.jpg" alt="정보가 없습니다.">
        <div class="modal_text">
            <h1>제36회 정기 연주회</h1>
            <div class="modal_text_1">
                <h3>장소 : </h3>
                <h3>시간 : </h3>
                <h3>지휘 :</h3>
                <h3>악장 :</h3>
                <h3>레퍼토리 : </h3>
            </div>
            <hr/>
            <div class="modal_text_2">
                <h3>참여단원</h3>
            </div>
        </div>
        <button id="close" onclick="closeModal();">Close</button>
    </div>`;
    classmodal.innerHTML = modaldiv;

    
}
let closeModal = () => {
        modal.classList.add("hidden");
    }
function showPage(){
    let buildOne = ``;
    let buildTwo = ``;

    
    if(num > 5){
        for (i=0; i<3; i++){
        buildOne += '<div class="poster_img" id = "poster_' 
                    + (num-i)  
                    + '">' 
                    + '<img onclick = "openModal('+(num-i)+')" class="thumbnail_1" src="./image/poster_'  
                    + (num-i) 
                    + '.jpg" alt="정보가 없습니다." .>' 
                    + '<div class="poster_title">제' 
                    + (num-i) 
                    + '회 정기 연주회</div></div>';

        buildTwo += '<div class="poster_img" id = "poster_' 
                    + (num-3-i) 
                    + '">' 
                    + '<img onclick = "openModal('+(num-3-i)+')" class="thumbnail_2" src="./image/poster_'  
                    + (num-3-i) 
                    + '.jpg" alt="정보가 없습니다." .>' 
                    + '<div class="poster_title">제' 
                    + (num-3-i) 
                    + '회 정기 연주회</div></div>';
        }
    }
    else{
        switch(num){
            case 5: 
                for (i=0; i<3; i++){
                buildOne += '<div class="poster_img" id = "poster_' 
                + (num-i) 
                + '">' 
                + '<img onclick = "openModal('+(num-i)+')" class="thumbnail_1" src="./image/poster_'  
                + (num-i) 
                + '.jpg" alt="정보가 없습니다." .>' 
                + '<div class="poster_title">제' 
                + (num-i) + '회 정기 연주회</div></div>';
                }
                buildTwo += '<div class="poster_img" id = "poster_2">' + '<img onclick = "openModal('+2+')" class="thumbnail_1" src="./image/poster_2.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title">제2회 정기 연주회</div></div>';
                buildTwo += '<div class="poster_img" id = "poster_1">' + '<img onclick = "openModal('+1+')" class="thumbnail_1" src="./image/poster_1.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title">제1회 정기 연주회</div></div>';
                break;
            case 4:
                for (i=0; i<3; i++){
                buildOne += '<div class="poster_img" id = "poster_' + (num-i) + '">' + '<img onclick = "openModal('+(num-i)+')" class="thumbnail_1" src="./image/poster_'  + (num-i) + '.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title"">제' + (num-i) + '회 정기 연주회</div></div>';
                }
                buildTwo += '<div class="poster_img" id = "poster_1">' + '<img onclick = "openModal('+1+')" class="thumbnail_1" src="./image/poster_1.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title">제1회 정기 연주회</div></div>';
                break;
            case 3:
                for (i=0; i<3; i++){
                buildOne += '<div class="poster_img" id = "poster_' + (num-i) + '">' + '<img onclick = "openModal('+(num-i)+')" class="thumbnail_1" src="./image/poster_'  + (num-i) + '.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title">제' + (num-i) + '회 정기 연주회</div></div>';
                }
                break;
            case 2: 
                buildOne += '<div class="poster_img" id = "poster_2">' + '<img onclick = "openModal('+2+')" class="thumbnail_1" src="./image/poster_2.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title">제2회 정기 연주회</div></div>';
                buildOne += '<div class="poster_img" id = "poster_1">' + '<img onclick = "openModal('+1+')" class="thumbnail_1" src="./image/poster_1.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title">제1회 정기 연주회</div></div>';
                break;
            case 1:
                buildOne += '<div class="poster_img" id = "poster_1">' + '<img onclick = "openModal('+1+')" class="thumbnail_1" src="./image/poster_1.jpg" alt="정보가 없습니다." .>' + '<div class="poster_title">제1회 정기 연주회</div></div>';
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


