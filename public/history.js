//연혁 지우기->년도 이동시에 쓰임
function removeHistory() {
    let previous_content=document.getElementById("story");
    previous_content.remove();
}

//버튼 색 지우기 -> 새로운 색 넣기 전 지우기
function removecolor() {
    for (let i=1;i<6;i++){
        document.getElementsByClassName('year')[i].style.color='darkgray';
    }
}

//새 연혁 가져오기
function getHistory(btn){
    removeHistory();
    removecolor();
    if (btn.value=="2021-현재"){
        let when=document.getElementsByClassName("year")[5];
        when.style.color="#BE7743";
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
        let when=document.getElementsByClassName("year")[4];
        when.style.color="#BE7743";
        let history;
        let story = document.createElement('div');
        story.setAttribute('class' , 'kuphil_history');
        story.id='story';
        history= '<div id="2020" class="history_content">';
        history+='<p>2020<br></p>'
        history+='<p>2020.02.28. (취소) 제 35회 정기연주회<br>2020.08.28. (취소) 제 36회 정기연주회</p>'
        history+='</div>'
        history+='<div id="2019" class="history_content">';
        history+='<p>2019<br></p>';
        history+='<p>2019.03.01. 제 33회 정기연주회<br>2019.05.16. 대동제 연주<br>2019.08.30. 제 34회 정기연주회<br>2019.12.⠀⠀ 제1회 동아리 경진 대회 대상 수상</p>';
        history+='</div>';        
        history+='<div id="2018" class="history_content">';
        history+='<p>2018<br></p>';
        history+='<p>2018.03.08. 제 31회 정기연주회<br>2018.09.01. 제 32회 정기연주회</p>';
        history+='</div>';
        history+='<div id="2017" class="history_content">';
        history+='<p>2017<br></p>';
        history+='<p>2017.03.10. 제 29회 정기연주회<br>2017.09.08. 제 30회 정기연주회</p>';
        history+='</div>';
        history+='<div id="2016" class="history_content">';
        history+='<p>2016<br></p>';
        history+='<p>2016.03.03. 제 27회 정기연주회<br>2016.09.03. 제 28회 정기연주회</p>';
        history+='</div>';
        history+='</div>';
        story.innerHTML=history;
        let our_history=document.getElementById("our_history");
        our_history.appendChild(story);

    } else if (btn.value=="2011-2015"){
        let when=document.getElementsByClassName("year")[3];
        when.style.color="#BE7743";
        let history;
        let story = document.createElement('div');
        story.setAttribute('class' , 'kuphil_history');
        story.id='story';
        history= '<div id="2015" class="history_content">';
        history+='<p>2015<br></p>'
        history+='<p>2015.02.27. 제 25회 정기연주회</p>'
        history+='</div>'
        history+='<div id="2014" class="history_content">';
        history+='<p>2014<br></p>';
        history+='<p>2014.03.06. 제 22회 정기연주회<br>2014.09.05. 제 23회 정기연주회<br>2014.11.16. 제 24회 정기연주회</p>';
        history+='</div>';        
        history+='<div id="2013" class="history_content">';
        history+='<p>2013<br></p>';
        history+='<p>2013.03.07. 제 20회 정기연주회<br>2013.09.03. 제 21회 정기연주회</p>';
        history+='</div>';
        history+='<div id="2012" class="history_content">';
        history+='<p>2012<br></p>';
        history+='<p>2012.03.18. 제 18회 정기연주회<br>2012.09.15. 제 19회 정기연주회</p>';
        history+='</div>';
        history+='<div id="2011" class="history_content">';
        history+='<p>2011<br></p>';
        history+='<p>2011.03.18. 제 16회 정기연주회<br>2011.08.31. 제 17회 정기연주회</p>';
        history+='</div>';
        history+='</div>';
        story.innerHTML=history;
        let our_history=document.getElementById("our_history");
        our_history.appendChild(story);

    } else if (btn.value=="2006-2010"){
        let when=document.getElementsByClassName("year")[2];
        when.style.color="#BE7743";
        let history;
        let story = document.createElement('div');
        story.setAttribute('class' , 'kuphil_history');
        story.id='story';
        history= '<div id="2010" class="history_content">';
        history+='<p>2010<br></p>'
        history+='<p>2010.03.05. 제 14회 정기연주회<br>2010.09.10. 제 15회 정기연주회</p>'
        history+='</div>'
        history+='<div id="2009" class="history_content">';
        history+='<p>2009<br></p>';
        history+='<p>2009.03.05. 제 12회 정기연주회<br>2009.09.11. 제 13회 정기연주회</p>';
        history+='</div>';        
        history+='<div id="2008" class="history_content">';
        history+='<p>2008<br></p>';
        history+='<p>2008.03.07. 제 10회 정기연주회<br>2008.09.04. 제 11회 정기연주회</p>';
        history+='</div>';
        history+='<div id="2007" class="history_content">';
        history+='<p>2007<br></p>';
        history+='<p>2007.03.09. 제 8회 정기연주회<br>2007.09.16. 제 9회 정기연주회</p>';
        history+='</div>';
        history+='<div id="2006" class="history_content">';
        history+='<p>2006<br></p>';
        history+='<p>2006.03.25. 제 6회 정기연주회<br>2006.09.22. 제 7회 정기연주회</p>';
        history+='</div>';
        history+='</div>';
        story.innerHTML=history;
        let our_history=document.getElementById("our_history");
        our_history.appendChild(story);
        
    } else if (btn.value=="2003-2005"){
        let when=document.getElementsByClassName("year")[1];
        when.style.color="#BE7743";
        let history;
        let story = document.createElement('div');
        story.setAttribute('class' , 'kuphil_history');
        story.id='story';
        history= '<div id="2005" class="history_content">';
        history+='<p>2005<br></p>'
        history+='<p>2005.09.08. 제 5회 정기연주회</p>'
        history+='</div>'
        history+='<div id="2004" class="history_content">';
        history+='<p>2004<br></p>';
        history+='<p>2004.05.27. 제 3회 정기연주회<br>2004.11.24. 제 4회 정기연주회</p>';
        history+='</div>';        
        history+='<div id="2003" class="history_content">';
        history+='<p>2003<br></p>';
        history+='<p>2003.05.⠀⠀ 창단 연주회<br>2003.11.26. 제 2회 정기연주회</p>';
        history+='</div>';
        history+='</div>';
        story.innerHTML=history;
        let our_history=document.getElementById("our_history");
        our_history.appendChild(story);
    }
}


