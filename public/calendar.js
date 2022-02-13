let today = new Date();//오늘 날짜지만, 월 이동시에 바뀜.
let today_temp = new Date();//실제 오늘 날짜
let now = document.getElementsByClassName("calendar_now")[0];

function bulidCalendar() {
    //순서대로 오늘의 년도, 달, 그 달의 첫 날, 마지막 날, 첫 날의 요일, 마지막 날의 요일, 오늘 날짜
    let myYear = today.getFullYear();
    let myMonth = today.getMonth();
    let firstDate = new Date(myYear, myMonth, 1).getDate();
    let lastDate = new Date(myYear, myMonth + 1, 0).getDate();
    let firstDay = new Date(myYear, myMonth, 1).getDay();
    let lastDay = new Date(myYear, myMonth + 1, 0).getDay();
    let myDate = today.getDate();

    //윤년 설정
    if ((myYear % 4 == 0 && myYear % 100 != 0) || myYear % 400 == 0) {
        if (myMonth == 1) {
            lastDate = 29;//윤년일 때 2월의 마지막 날은 29일
        }
    }

    //현재 달력의 년월을 나타냄. calendar_now라는 class중 첫 요소인 yyyy년 mm월을 대체
    //id는 스케줄과의 비교를 위해 년_월 로 설정
    if (myMonth < 9) {
        now.id = myYear + '-0' + (myMonth + 1);
    }
    else
        now.id = myYear + '-' + (myMonth + 1);
    now.innerText = myYear + "년 " + (myMonth + 1) + "월";

    //테이블 만들 변수
    let bulid = '';
    //첫 날 전까지는 빈 td
    for (let i = 1; i <= firstDay; i++) {
        bulid += '<td></td>';
    }
    //첫 날부터 마지막 날 까지 채우기
    for (let i = firstDate; i <= lastDate; i++) {
        let jump = new Date(myYear, myMonth, i).getDay();
        if (jump % 7 === 0) {//일요일로 넘어갈 때는 다음 줄로
            bulid += '<tr></tr>';
            if (i === myDate)//오늘인 경우
                bulid += '<td class="calRedToday" id="num' + i + '" onclick="todaySche(' + i + ');">\u00a0' + i + '\u00a0</td>';
            else
                bulid += '<td class="calRed" id ="num' + i + '" onclick="todaySche(' + i + ');">\u00a0' + i + '\u00a0</td>';

        } else {
            if (i === myDate)//오늘인 경우
                bulid += '<td class="calToday"id="num' + i + '" onclick="todaySche(' + i + ');">\u00a0' + i + '\u00a0</td>';
            else
                bulid += '<td class="cal"id="num' + i + '" onclick="todaySche(' + i + ');">\u00a0' + i + '\u00a0</td>';
        }
    }
    //마지막 날 이후로 빈 td
    for (let i = lastDay; i < 6; i++) {
        bulid += '<td></td>';
    }
    document.getElementsByClassName("body_calendar")[0].innerHTML = bulid;
}

//캘린더 지우기->달 이동시에 쓰임
function removeCalendar() {
    document.getElementsByClassName("body_calendar")[0].innerHTML = null;
}

//전 달로 이동 함수
function prevCalendar() {
    removeCalendar();
    //오늘 날짜를 이전 달 1일로 설정
    today = new Date(today.getFullYear(), today.getMonth() - 1, 1);

    //이동했을 때, 년과 월이 실제 오늘의 년과 월하고 같을 경우엔 오늘 날짜가 1일이 아니라 실제 오늘 날짜로 바뀌어야함
    if (today.getMonth() == today_temp.getMonth() && today.getFullYear() == today_temp.getFullYear()) {
        today = today_temp;
    }
    bulidCalendar();
    showSchedule(today.getDate());
}

//다음 달로 이동 함수
function nextCalendar() {
    removeCalendar();
    //오늘 날짜를 이전 달 1일로 설정
    today = new Date(today.getFullYear(), today.getMonth() + 1, 1);

    //이동했을 때, 년과 월이 실제 오늘의 년과 월하고 같을 경우엔 오늘 날짜가 1일이 아니라 실제 오늘 날짜로 바뀌어야함
    if (today.getMonth() == today_temp.getMonth() && today.getFullYear() == today_temp.getFullYear()) {
        today = today_temp;
    }
    bulidCalendar();
    showSchedule(today.getDate());
}

bulidCalendar();

function todaySche(num) {
    //다른 날짜를 클릭했을 때마다 그 날의 일정 표시하기 위함
    bulidCalendar();
    document.getElementById("num" + num).style.backgroundColor = 'pink';
    showSchedule(num);
}
//app.js에서 넘어오는 데이터의 형태가 '시작날/시작시간/종료시간/제목//' 이기 때문에 //로 분리
let dataArray = data.split('//');

function showSchedule(num) {
    //스케줄영역에 일자 표시=> '~일의 일정'
    let todayOut = document.getElementById("sche_month");
    let whatToday = num;
    todayOut.innerHTML = '𝄞 ' + whatToday + '일의 일정 𝄞';

    let out = document.getElementById("output");
    out.innerHTML = '';

    //순서대로 시작날, 시작시간, 종료시간, 제목을 담을 변수
    let scheStartDate = [];
    let scheStartTime = [];
    let scheEndTime = [];
    let scheTitle = [];
    // /로 분리해서 각각의 변수에 담음
    for (let i = 0; i < dataArray.length; i++) {
        let spl = dataArray[i].split('/');
        scheStartDate[i] = spl[0];
        scheStartTime[i] = spl[1];
        scheEndTime[i] = spl[2];
        scheTitle[i] = spl[3];
    }
    //스케줄을 출력할 변수
    let showdata = '';
    //현재 달력에 표시되는 년, 월을 알기 위해 클래스가 calendar_now인 요소를 가져와서 _로 분리(년_월 형태이기 때문)
    //0번은 년, 1번은 달
    let yearMonth = now.id;
    for (let i = 0; i < dataArray.length; i++) {
        //현재 달력에 표시된 년,월과 데이터에 담긴 스케줄의 년,월을 비교하여->해당 년월에 맞는 스케줄을 보여주고자 함
        if ((yearMonth == scheStartDate[i].substring(0, 7))) {
            //달력에 이번 달에 일정 있는 날에 #표시
            let caldata = document.getElementById("num" + parseInt(scheStartDate[i].substring(8, 10)));
            let change_caldata = "\u00a0" + parseInt(scheStartDate[i].substring(8, 10)) + "<sup style='color:grey'>" + "#" + "</sup>";
            caldata.innerHTML = change_caldata;
            //오늘의 일정부분에 일정 보여주기
            if (num === parseInt(scheStartDate[i].substring(8, 10))) {
                showdata += '<p class="schedule_data"> ♪ ' + scheStartTime[i].substring(0, 5) + ' ~ ';
                showdata += scheEndTime[i].substring(0, 5);
                showdata += " '" + scheTitle[i] + "'";
                showdata += "</p>";
            }
        }
    }
    //아무 일정 없을 때 표시
    if (showdata == '') {
        showdata += '<p class="schedule_data"> ♪ 오늘은 일정이 없습니다~</p> ';
    }
    out.innerHTML = showdata;
}
showSchedule(today.getDate());

let scheAddForm = document.getElementById("add_data");
let scheDeleteForm = document.getElementById("delete_data");
//데이터 추가 폼
let addDataForm = '';
//데이터 삭제 폼
let deleteDataForm = '';

//폼 영역 보이기
function showForm() {
    let pmbutton = document.getElementById("sche_plus");
    //폼 영역이 보여지면 폼 영역을 숨길 수 있는 버튼 x로 바뀜
    pmbutton.innerHTML = 'x';
    pmbutton.setAttribute("onClick", "hideForm()");

    //추가 데이터의 날짜 선택
    let daySelect = '<select name="year">';
    for (let i = -10; i < 10; i++) {//년도 선택
        if (i === 0) {
            daySelect += '<option value="' + (today_temp.getFullYear() + i) + '" selected>' + (today_temp.getFullYear() + i) + '</option>';
        }
        else
            daySelect += '<option value="' + (today_temp.getFullYear() + i) + '">' + (today_temp.getFullYear() + i) + '</option>';
    }
    daySelect += '</select>년 <select name="month">';//월 선택
    for (let i = 1; i < 13; i++) {
        if (i === (today_temp.getMonth() + 1)) {
            daySelect += '<option value="' + i + '" selected>' + i + '</option>';
        }
        else
            daySelect += '<option value="' + i + '">' + i + '</option>';
    }
    daySelect += '</select>월 <select name="day">';//일 선택
    for (let i = 1; i < 32; i++) {
        if (i === (today_temp.getDate())) {
            daySelect += '<option value="' + i + '" selected>' + i + '</option>';
        }
        else
            daySelect += '<option value="' + i + '">' + i + '</option>';
    }
    daySelect += '</select>일';

    //추가 데이터의 시간 선택
    let hourSelect = '';
    for (let i = 0; i < 24; i++) {
        hourSelect += '<option value="' + i + '">' + i + '</option>';
    }
    let minSelect = '';
    for (let i = 0; i < 60; i++) {
        minSelect += '<option value="' + i + '">' + i + '</option>';
    }

    //데이터를 추가하는 폼
    addDataForm += '<form class="form" id="aform" action="/calendar/add_schedule" method="post" onsubmit="return doAction();">'
    addDataForm += '<div>♬ 일정 추가 ♬</div >';
    addDataForm += '<div>일\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 정 : ' + '<input type="text" name="title" id="stitle"/> <input type="checkbox" name="maincheck" /> 메인 <br>';
    addDataForm += '날\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 짜 : ' + daySelect + '<br>';
    addDataForm += '시작 시간 : ' + '<select name="startHour" class="timeSelect">' + hourSelect + '</select>시 <select name="startMin" class="timeSelect">' + minSelect + '</select>분<br>';
    addDataForm += '종료 시간 : ' + '<select name="endHour" class="timeSelect">' + hourSelect + '</select>시 <select name="endMin" class="timeSelect">' + minSelect + '</select>분 ';
    addDataForm += '<input type="checkbox" name="allDay" onClick="dis();"/> 하루 종일</div>';
    addDataForm += '<div><input type="submit" name="submit" class="subCan" /> ';
    addDataForm += '<input type="button" name="cancel" onClick="hideForm();" value="취소" class="subCan"/></div>';
    addDataForm += '</form>'
    scheAddForm.innerHTML = addDataForm;

    let deleteSelect = '<select name="deleteData">';
    for (let i = 0; i < dataArray.length; i++) {
        deleteSelect += '<option value="' + dataArray[i] + '">' + dataArray[i] + '</option>';
    }
    deleteSelect += '</select>';

    deleteDataForm += '<form class="form" id="dform" action="/calendar/delete_schedule" method="post">'
    deleteDataForm += '<div>♬ 일정 삭제 ♬</div>';
    deleteDataForm += '<div>' + deleteSelect + '</div>';
    deleteDataForm += '<div><input type="submit" name="dsubmit" value="삭제" class="subDel" /></div>';
    deleteDataForm += '</form>';
    scheDeleteForm.innerHTML = deleteDataForm;
}

//하루종일에 체크하면 시간선택 X
function dis() {
    if (document.getElementsByClassName('timeSelect')[0].disabled == true) {
        for (let i = 0; i < 4; i++) {
            document.getElementsByClassName('timeSelect')[i].disabled = false;
        }
    }
    else {
        for (let i = 0; i < 4; i++) {
            document.getElementsByClassName('timeSelect')[i].disabled = true;
        }
    }
}

//폼 영역 숨기기
function hideForm() {
    let pmbutton = document.getElementById("sche_plus");
    pmbutton.innerHTML = '±';
    pmbutton.setAttribute("onClick", "showForm()");
    addDataForm = '';
    deleteDataForm = '';
    scheAddForm.innerHTML = addDataForm;
    scheDeleteForm.innerHTML = deleteDataForm;
}

//addDataForm에 아무 데이터가 없는데 제출버튼 눌렀을 경우를 방지
function doAction() {
    if (document.getElementById("stitle").value == "") {
        alert('내용을 입력하세요.');
        return false;
    }
    else if(document.getElementById("stitle").value.length>30){
        alert('내용이 너무 깁니다.');
        return false;
    }
    if (document.getElementsByClassName('timeSelect')[0].value > document.getElementsByClassName('timeSelect')[2].value) {
        if (document.getElementsByClassName('timeSelect')[0].disabled == true) {
            return true;
        }
        alert('시작시간이 종료시간보다 큽니다.');
        return false;
    }
    else if (document.getElementsByClassName('timeSelect')[0].value == document.getElementsByClassName('timeSelect')[2].value) {
        if (document.getElementsByClassName('timeSelect')[1].value > document.getElementsByClassName('timeSelect')[3].value) {
            if (document.getElementsByClassName('timeSelect')[0].disabled == true) {
                return true;
            }
            alert('시작시간이 종료시간보다 큽니다.');
            return false;
        }
    }
    return true;
}