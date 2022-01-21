$(function(){
    let today = new Date();//오늘 날짜지만, 월 이동시에 바뀜.
    let today_temp = new Date();//실제 오늘 날짜

    //이전 달력 버튼을 눌렀을 때
    $("input[name=calendar_prev]").click(function(){
        $("#calendar_table > tbody > td").remove();
        $("#calendar_table > tbody > tr").remove();
        today=new Date(today.getFullYear(),today.getMonth()-1,1);
        //오늘 날짜를 이전 달 1일로 설정
        if(today.getMonth()==today_temp.getMonth() && today.getFullYear()==today_temp.getFullYear()){
            today=today_temp;
        }
        //이전 달의 달력 그리기
        bulidCalendar();
        scheduler();
    })
    //다음 달력 버튼을 눌렀을 때
    $("input[name=calendar_next]").click(function(){
        $("#calendar_table > tbody > td").remove();
        $("#calendar_table > tbody > tr").remove();
        today=new Date(today.getFullYear(),today.getMonth()+1,1);
        //오늘 날짜를 다음 달 1일로 설정
        if(today.getMonth()==today_temp.getMonth() && today.getFullYear()==today_temp.getFullYear()){
            today=today_temp;
        }
        //다음 달의 달력 그리기
        bulidCalendar();
        scheduler();
    })
    
    
    function bulidCalendar(){
        thisyear=today.getFullYear();
        thismonth=today.getMonth();
        firstdate = new Date(thisyear,thismonth,1).getDate();
        lastdate = new Date(thisyear,thismonth+1,0).getDate();
        firstday=new Date(thisyear,thismonth,1).getDay();
        thisdate = today.getDate();

        //윤년 설정
        if((thisyear % 4 == 0 && thisyear % 100 != 0) || thisyear % 400 == 0){
            if(thismonth==1){
                lastdate=29;
            }
        }

        //현재 달력의 년월을 나타냄. html 부분의 yyyy년 mm월을 대체
        $(".calendar_now").text(thisyear+"년"+" "+(thismonth+1)+"월");

        //이전 달, 다음 달로 넘어가는 버튼의 value를 바꾸기 위해 설정
        let pmonth=thismonth;
        if(pmonth===0)
            pmonth=12;
        let nmonth=thismonth+2;
        if(nmonth===13)
            nmonth=1;
        $("input[name=calendar_prev").attr("value", pmonth+"월");
        $("input[name=calendar_next").attr("value", nmonth+"월");
        
        // 현재 달력의 년월을 표시해주는 부분의 아이디를 (년)_(월)로 설정하겠음
        $(".calendar_now").attr("id","now_"+thisyear+"_"+(thismonth+1));
    
        
        for(i=0;i<firstday;i++){//그 달의 1일 이전의 부분에 td추가
            $("#calendar_table tbody:last").append("<td> </td>");
        }

        for(i=1;i<=lastdate;i++){//1일부터 달의 마지막까지 td추가
            
            jumptr=new Date(thisyear,thismonth,i).getDay();//일요일
            if(jumptr==0){//일요일마다 table이 내려가야하니깐 tr추가
                $("#calendar_table tbody:last").append("<tr></tr>");
            }

            //달력에 숫자 넣기
            if(i==thisdate){//오늘 날짜만 따로 표시
                if(jumptr==0){//일요일이면 빨간색
                    $("#calendar_table tbody:last").append("<td class='today_date_red' id='num" + i + "'>" + i +"</td>");
                }
                else
                    $("#calendar_table tbody:last").append("<td class='today_date' id='num" + i + "'>" + i + "</td>");
                
            }
            else{
                if(jumptr==0){//일요일이면 빨간색
                    $("#calendar_table tbody:last").append("<td class='date_red' id='num" + i + "'>" + i + "</td>");
                }
                else
                    $("#calendar_table tbody:last").append("<td class='date' id='num" + i + "'>" + i + "</td>");
                
            }
        }

        if($("#calendar_table tbody td").length%7!=0){//달의 마지막 날 이후 부분에 td 추가
            for(i=0;i<=$("#calendar_table tbody td").length%7;i++){
                $("#calendar_table tbody:last").append("<td></td>");
            }
        }
    }

    //json에서 스케줄 불러옴
    function scheduler(){
    $.getJSON('schedule.json', function(data){
        let sche='';
        
        $.each(data, function(entryIndex, entry){

            if(("now_"+entry.year+"_"+entry.month)==$(".calendar_now").attr("id")){
            sche+='<div class="entry">☑'+entry.date+'일 ';
            sche+=Math.floor(entry.startTime/100)+'시 '+entry.startTime%100+'분 ~ '+Math.floor(entry.endTime/100)+'시 '+entry.endTime%100+'분 ';
            sche+='"'+entry.title+'"'+'</div>'
            $("#num"+entry.date).text("\u00a0"+entry.date+"'");
            }
        });
        $('#output').html(sche);
    })
    }

    bulidCalendar();
    scheduler();

    $("input[name=add_sche]").click(function(){
        let form_html='';
        form_html+='<form id="form"/>'+'일정 추가<br>';
        form_html+='일정 : '+'<input type="text" id="add_title" name="title"/><br>';
        form_html+='날짜 : '+'<input type="text" id="add_day" name="day"/><br>';
        form_html+='시작 시간 : '+'<input type="text" id="add_startTime" name="startTime"/><br>';
        form_html+='종료 시간 : '+'<input type="text" id="add_endTime" name="endTime"/>';
        

        $("#add_form").html(form_html);
    })
})