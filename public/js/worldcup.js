//작곡가 전체 수
const totalnum = 42;

//선정된 작곡가의 인덱스 번호 저장할 배열
//처음에 number배열에 16개(16강)의 인덱스를 담은 다음
//shift를 이용해서 앞부분부터 2개씩 제거하고, 선택된 인덱스는 push를 이용해 다시 number배열에 넣어줌
let number = [];
//현재 몇 번째 대결인지 나타내는 변수
let count = 1;

//8강, 16강, 32강 선택 시 나오는 화면
function initPage(){
    let initDiv = 
    `<div class="worldcup_explain">
        <p class="worldcup_now"><span class="round">##강</span> ( <span class="now">#</span> / <span class="total">##</span> )</p>
    </div>
    <div class="worldcup_start">
        <div class="worldcup_one">
            <p class="worldcup_one_en"></p>
            <p class="worldcup_one_kr"><p/>
            <img class="worldcup_one_img" src="" alt="one">
        </div>
        <div class="worldcup_vs">
            <span>VS</span>
        </div>
        <div class="worldcup_two">
            <p class="worldcup_two_en"></p>
            <p class="worldcup_two_kr"><p/>
            <img class="worldcup_two_img" src="" alt="two">
            
        </div>
    </div>`;
    document.getElementsByClassName('worldcup_area')[0].innerHTML = initDiv;
}


//8강
function start_eight(){
    initPage();
    //숫자 8개를 number배열에 담기
    for(let i = 0; i < 8; i++){
        //난수 생성 0~totalnum
        x = Math.floor(Math.random() * totalnum);
        //중복 제거
        if(number.find(data => data === x)>=0){
            i--;
        }else{
            number[i] = x;
        }
    }
    console.log(number);
    
    rotation_eight(count);
}
//16강
function start_sixteen(){
    initPage();
    //숫자 16개를 number배열에 담기
    for(let i = 0; i < 16; i++){
        //난수 생성 0~totalnum
        x = Math.floor(Math.random() * totalnum);
        //중복 제거
        if(number.find(data => data === x)>=0){
            i--;
        }else{
            number[i] = x;
        }
    }
    rotation_sixteen(count);
}

//32강
function start_thirtytwo(){
    initPage();
    //숫자 32개를 number배열에 담기
    for(let i = 0; i < 32; i++){
        //난수 생성 0~totalnum
        x = Math.floor(Math.random() * totalnum);
        //중복 제거
        if(number.find(data => data === x)>=0){
            i--;
        }else{
            number[i] = x;
        }
    }
    rotation_thirtytwo(count);
}


//number에서 shift하고 push하는 과정을 반복
function setting(){

    //number 배열에 첫 두 값을 인덱스로 하여 해당 인덱스의 composer을 담은 배열을 보여줌
    document.getElementsByClassName('worldcup_one_en')[0].innerHTML = composer[number[0]].en;
    document.getElementsByClassName('worldcup_two_en')[0].innerHTML = composer[number[1]].en;
    document.getElementsByClassName('worldcup_one_kr')[0].innerHTML = composer[number[0]].kr;
    document.getElementsByClassName('worldcup_two_kr')[0].innerHTML = composer[number[1]].kr;
    document.getElementsByClassName('worldcup_one_img')[0].src = composer[number[0]].img;
    document.getElementsByClassName('worldcup_two_img')[0].src = composer[number[1]].img;
    document.getElementsByClassName('worldcup_one_img')[0].setAttribute("onclick","check("+number[0]+");");
    document.getElementsByClassName('worldcup_two_img')[0].setAttribute("onclick","check("+number[1]+");");

    console.log(number);
}


//number에서 shift하고 push하는 과정을 반복
function rotation_thirtytwo(count){//32강
    document.getElementsByClassName('round')[0].innerHTML = "32강";
    document.getElementsByClassName('now')[0].innerHTML = count;
    document.getElementsByClassName('total')[0].innerHTML = "16";
    setting();
}
function rotation_sixteen(count){//16강
    document.getElementsByClassName('round')[0].innerHTML = "16강";
    document.getElementsByClassName('now')[0].innerHTML = count;
    document.getElementsByClassName('total')[0].innerHTML = "8";
    setting();
}
function rotation_eight(count){//8강
    document.getElementsByClassName('round')[0].innerHTML = "8강";
    document.getElementsByClassName('now')[0].innerHTML = count;
    document.getElementsByClassName('total')[0].innerHTML = "4";
    setting();
}
function rotation_semi(count){//4강
    document.getElementsByClassName('round')[0].innerHTML = "4강";
    document.getElementsByClassName('now')[0].innerHTML = count;
    document.getElementsByClassName('total')[0].innerHTML = "2";
    setting();
}
function rotation_final(count){//결승
    document.getElementsByClassName('round')[0].innerHTML = "결승";
    document.getElementsByClassName('now')[0].innerHTML = count;
    document.getElementsByClassName('total')[0].innerHTML = "1";
    setting();
}


function check(num) {
    //32->16, 16->8, 8->4, 4->2강으로 바뀔 경우를 확인하기 위한 변수
    //바뀌기 전 number에 남은 갯수
    let prevnum = number.length;

    //number배열 앞에서 두개 제거
    number.shift();
    number.shift();
    //선택했던 번호 뒤에 추가
    number.push(num);
    
    //이제 number에 남은 갯수
    //prevnum이랑 비교하여 다음 round 결정
    let nextnum = number.length;

    
    if(nextnum<=1){//하나만 남았으면 끝내기
        let number_win = number.shift();
        gameEnd(number_win);
    }else if(nextnum<=2 && prevnum>2){//4걍->결승
        count=1;
        rotation_final(count);
    }else if(nextnum<=4 && prevnum<=4){//4강 유지
        count++;
        rotation_semi(count);
    }else if(nextnum<=4 && prevnum>4){//8강->4강
        count=1;
        rotation_semi(count);
    }else if(nextnum<=8 && prevnum<=8){//8강 유지
        count++;
        rotation_eight(count);
    }else if(nextnum<=8 && prevnum>8){//16강->8강
        count=1;
        rotation_eight(count);
    }else if(nextnum<=16 && prevnum<=16){//16강 유지
        count++;
        rotation_sixteen(count);
    }else if(nextnum<=16 && prevnum>16){//32강->16강
        count=1;
        rotation_sixteen(count);
    }else if(nextnum<=32 && prevnum<=32){//32강 유지
        count++;
        rotation_thirtytwo(count);
    }
    
}

//게임 끝
function gameEnd(number_win){
    let endDiv = 
    `<div>
        <div class="worldcup_end">
            <p class="worldcup_end_explain">당신의 최애 작곡가는?!🫣</p>
            <img class="worldcup_end_img" src="" alt="end">
            <p class="worldcup_end_en"></p>
            <p class="worldcup_end_kr"><p/>
        </div>
    </div>`;
    document.getElementsByClassName('worldcup_area')[0].innerHTML = endDiv;

    
    document.getElementsByClassName('worldcup_end_img')[0].src = composer[number_win].img;
    document.getElementsByClassName('worldcup_end_en')[0].innerHTML = composer[number_win].en;
    document.getElementsByClassName('worldcup_end_kr')[0].innerHTML = composer[number_win].kr;
}