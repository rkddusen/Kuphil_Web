let firstTitle = [];
let secondTitle = [];
let address = [];
let al = [];
for (let i = 0; i < count; i++) {
    al[i] = data.split(',')[i];

    firstTitle[i] = al[i].split('//')[0];
    secondTitle[i] = al[i].split('//')[1];
    address[i] = al[i].split('//')[2];
}
let html = document.getElementsByClassName("sideAlbum")[0];
let centerHtml = document.getElementsByClassName("centerAlbum")[0];



function showAlbum() {
    

    let firstText = '';

    for (let i = 0; i < firstTitle.length; i++) {
        if (i >= 1) {
            if (firstTitle[i] == firstTitle[i - 1]) {
                continue;
            }
        }
        firstText += '<div class="firstAlbum">';
        firstText += '<div class="firstAlbumCon" id="' + firstTitle[i] + '" onclick="openSecondAlbum(this.id);"><img src="folder.png"></div>';
        firstText += '<div class="firstAbumTi"><p>' + firstTitle[i] + '</p></div>';
        firstText += '</div>';
    }
    // 앨범 추가 부분
    // firstText += '<div class="album">';
    // firstText += '<div class="albumCon" id="firstPlus" onclick="plusfolder(this.id);"><img src="plusfolder.png"></div>';
    // firstText += '<div class="albumTi"><p>앨범 추가</p></div>'
    // firstText += '</div>';

    html.innerHTML = firstText;

}

showAlbum();

function openSecondAlbum(id) {
    let secondText = '';
    
    for (let i = 0; i < count; i++) {
        if (id == firstTitle[i]) {
            if (i >= 1) {
                if (secondTitle[i] == secondTitle[i - 1]) {
                    continue;
                }
            }
            secondText += '<div class="secondAlbum">';
            secondText += '<div class="secondAlbumCon" id="' + firstTitle[i] + '_' + secondTitle[i] + '" onclick="openImage(this.id);"><img src="folder.png"></div>';
            secondText += '<div class="secondAlbumTi"><p>' + secondTitle[i] + '</p></div>';
            secondText += '</div>';
        }
    }
    // 앨범 추가 부분
    // secondText += '<div class="album">';
    // secondText += '<div class="albumCon" id="secondPlus" onclick="plusfolder(this.id);"><img src="plusfolder.png"></div>';
    // secondText += '<div class="albumTi"><p>앨범 추가</p></div>'
    // secondText += '</div>';

    centerHtml.innerHTML = secondText;
    showAlbum();
    document.getElementById(id).style.backgroundColor="#BE7743";
}
function openImage(id) {
    let thirdText = '';
    let prevId = id.split("_")[0];

    thirdText += '<div class="backAlbum">';
    thirdText += '<div class="backAlbumCon" id="'+prevId+'" onclick="openSecondAlbum(this.id);"><img src="refolder.png"></div>';
    thirdText += '<div class="backAlbumTi"><p>Back</p></div>';
    thirdText += '</div></div>';

    for (let i = 0; i < count; i++) {
        if (id == firstTitle[i] + '_' + secondTitle[i]) {
            thirdText += '<div class="photo">';
            thirdText += '<div class="photoCon"><img src="' + address[i] + '" alt="사진없음"></div>';
            thirdText += '</div>';
        }
    }
    // 사진 추가 부분
    // thirdText += '<div class="album">';
    // thirdText += '<div class="albumCon"><div class="blank"><p style="font-size:50px;">+</p></div></div>';
    // thirdText += '</div>';

    centerHtml.innerHTML = thirdText;
}

// 앨범 추가 함수
// function plusfolder(id) {
//     let firstName = '';
//     let secondName = '';
//     let firstPlusText = '';
//     let secondPlusText = '';
//     if (id == 'firstPlus') {
//         firstName = prompt('첫번째 앨범 이름', '');
//         alert(firstName);
//         firstPlusText += '<div class="album">';
//         firstPlusText += '<div class="albumCon" id="secondPlus" onclick="plusfolder(this.id);"><img src="plusfolder.png"></div>';
//         firstPlusText += '<div class="albumTi"><p>앨범 추가</p></div>'
//         firstPlusText += '</div>';

//         html.innerHTML =firstPlusText;
//     }
//     else if (id == 'secondPlus') {
//         secondName = prompt('두번째 앨범 이름', '');
//         alert(secondName);
//         secondPlusText += '<div class="album">';
//         secondPlusText += '<div class="albumCon"><div class="blank"><p style="font-size:50px;">+</p></div></div>';
//         secondPlusText += '</div>';

//         html.innerHTML =secondPlusText;
//     }
// }