const { YEAR } = require("mysql/lib/protocol/constants/types");

//연혁 지우기->년도 이동시에 쓰임
function removeHistory() {
    let previous_content=document.getElementById("story");
    previous_content.remove();
}

//새 연혁 가져오기
function getHistory(btn){
    removeHistory();
    if (btn.value=="2021-현재"){
        let history;
        let story = document.createElement('div');
        story.setAttribute('class' , 'kuphil_history');
        story.id='story';
        history= '<div id="2022" class="history_content">';
        history+='<p>2022<br></p>';
        history+='<p>2022.02.27. 제 38회 정기연주회</p>';
        history+='</div>';
        history+='<div id="2021" class="history_content">';
        history+='<p>2021<br></p>';
        history+='<p>2021.08.28. 제 37회 정기연주회</p>';
        history+='</div>';
        history+='</div>';
        story.innerHTML=history;
        let our_history=document.getElementById("our_history");
        our_history.appendChild(story);

    } else if (btn.value=="2016-2020"){
        let history;
        let story = document.createElement('div');
        story.setAttribute('class' , 'kuphil_history');
        story.id='story';
        history= '<div id="2020" class="history_content">';
        history+='<p>2020<br></p>'
        history+='<p>2020.08.28. 제 36회 정기연주회<br>2020.02.28. 제 35회 정기연주회</p>'
        history+='</div>'
        history+='<div id="2019" class="history_content">';
        history+='<p>2019<br></p>';
        history+='<p>2019.08.30. 제 34회 정기연주회</p>';
        history+='</div>';
        history+='</div>';
        story.innerHTML=history;
        let our_history=document.getElementById("our_history");
        our_history.appendChild(story);
    } else if (btn.value=="2011-2015"){
        let history;
        let story = document.createElement('div');
        story.setAttribute('class' , 'kuphil_history');
        story.id='story';

    } else if (btn.value=="2006-2010"){
        let history;
        let story = document.createElement('div');
        story.setAttribute('class' , 'kuphil_history');
        story.id='story';
        
    } else if (btn.value=="2003-2005"){
        let history;
        let story = document.createElement('div');
        story.setAttribute('class' , 'kuphil_history');
        story.id='story';

    }
}

//버튼 색 지우기 -> 새로운 색 넣기 전 지우기
function removecolor() {
    let all=document.getElementsByClassName("year");
    all.style.color="darkgray";
}

//버튼 색 변경
function changeBtnColor(btn){
    let when=document.getElementById(btn.value);
    when.style.color="#BE7743";
}

