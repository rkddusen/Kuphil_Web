//내용 지우기->시작 위치 이동시에 쓰임
function removePath() {
    let previous_content=document.getElementById("kuphil_room");
    previous_content.remove();
}

//버튼 색 지우기 -> 새로운 색 넣기 전 지우기
function removeColor() {
    for (let i=1;i<4;i++){
        document.getElementsByClassName('location')[i].style.color='#BE7743';
    }
}

// 소개 변경
function getPath(btn){
    removePath();
    removeColor();    
    if (btn.value=="수의과대학 (정문)"){
        let where=document.getElementsByClassName("location")[1];
        where.style.color="#5C3A1A";
        let Pathway;
        let Path = document.createElement('div');
        Path.setAttribute('class', 'path');
        Path.id='kuphil_room';
        Pathway= '<img src="./image/map/map_front.jpg" alt="수의대에서 동방 오는 길">';
        Pathway+='</div>';
        Path.innerHTML=Pathway;
        let pathway=document.getElementById('pathway');
        pathway.appendChild(Path);

    }   else if (btn.value=="도서관 (중문)"){
        let where=document.getElementsByClassName("location")[2];
        where.style.color="#5C3A1A";
        let Pathway;
        let Path = document.createElement('div');
        Path.setAttribute('class', 'path');
        Path.id='kuphil_room';
        Pathway= '<img src="./image/map/map_library.jpg" alt="도서관 (중문)에서 동방 오는 길">';
        Pathway+='</div>';
        Path.innerHTML=Pathway;
        let pathway=document.getElementById('pathway');
        pathway.appendChild(Path);

    } else if (btn.value=="경영대학 (후문)"){
        let where=document.getElementsByClassName("location")[3];
        where.style.color="#5C3A1A";
        let Pathway;
        let Path = document.createElement('div');
        Path.setAttribute('class', 'path');
        Path.id='kuphil_room';
        Pathway= '<img src="./image/map/map_back.jpg" alt="경영대학 (후문)에서 동방 오는 길">';
        Pathway+='</div>';
        Path.innerHTML=Pathway;
        let pathway=document.getElementById('pathway');
        pathway.appendChild(Path);
    }
}