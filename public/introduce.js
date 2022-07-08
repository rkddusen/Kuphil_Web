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
    removeColor();
    if (btn.value=="수의대"){
        let where=document.getElementsByClassName("year")[1];
        when.style.color="#BE7743";
        let Pathway;
        let Path = document.createElement('div');
        Path.setAttribute('class', 'path');
        Path.id='kuphil_room';
        Pathway= '<img src="map_front.png" alt="수의대에서 동방 오는 길">';
        Pathway+='<p>1. 설명글입니다</p>';
        Pathway+='</div>';
        Path.innerHTML=Pathway;
        let pathway=document.getElementById('pathway');
        pathway.appendChild(Path);
    }
}