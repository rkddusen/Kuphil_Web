//내용 지우기->시작 위치 이동시에 쓰임
function removePath() {
    let previous_content=document.getElementById("kuphil_room");
    previous_content.remove();
}

//버튼 색 지우기 -> 새로운 색 넣기 전 지우기
function removeColor() {
    for (let i=1;i<5;i++){
        document.getElementsByClassName('start_location')[i].style.color='#efe2d6';
    }
}

// 소개 변경
function getPath(btn){
    removePath();
    if (btn.value=="수의대"){
        let Pathway;
        let Path = document.createElement('div');
        Path.setAttribute('class', 'path');
        Path.id='kuphil_room';
        Pathway= '<img src="map_front.jpg" alt="수의대에서 동방 오는 길">';
        Pathway+='<p>1. 설명글입니다</p>';
        Pathway+='</div>';
        Path.innerHTML=Pathway;
        let pathway=document.getElementById('pathway');
        pathway.appendChild(Path);

    } else if (btn.value=="경영대학 (후문)"){
        let Pathway;
        let Path = document.createElement('div');
        Path.setAttribute('class', 'path');
        Path.id='kuphil_room';
        Pathway= '<img src="map_back.png" alt="경영대학 (후문)에서 동방 오는 길">';
        Pathway+='<p>1. 설명글입니다</p>';
        Pathway+='</div>';
        Path.innerHTML=Pathway;
        let pathway=document.getElementById('pathway');
        pathway.appendChild(Path);

    }   else if (btn.value=="도서관 (중문)"){
        let Pathway;
        let Path = document.createElement('div');
        Path.setAttribute('class', 'path');
        Path.id='kuphil_room';
        Pathway= '<img src="map_library.jpg" alt="도서관 (중문)에서 동방 오는 길">';
        Pathway+='<p>1. 설명글입니다</p>';
        Pathway+='</div>';
        Path.innerHTML=Pathway;
        let pathway=document.getElementById('pathway');
        pathway.appendChild(Path);

    }   else if (btn.value=="신공학관"){
        let Pathway;
        let Path = document.createElement('div');
        Path.setAttribute('class', 'path');
        Path.id='kuphil_room';
        Pathway= '<img src="#" alt="신공학관에서 동방 오는 길">';
        Pathway+='<p>1. 설명글입니다</p>';
        Pathway+='</div>';
        Path.innerHTML=Pathway;
        let pathway=document.getElementById('pathway');
        pathway.appendChild(Path);
    }
}