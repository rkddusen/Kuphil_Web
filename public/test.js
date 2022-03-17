let result = {
    지휘자: 0, 퍼바: 0, 세바: 0, 비올라: 0, 첼로: 0, 콘베: 0, 플룻: 0,
    오보에: 0, 클라: 0, 바순: 0, 트럼펫: 0, 트롬본: 0, 호른: 0,튜바: 0, 
    팀파니: 0, 퍼커션: 0, 피아노: 0, 관객: 0,
}
let count = 0;
let num = 0;
for (let i = 0; i < 20; i++) {
    conductor[i] = parseInt(conductor[i]);
    firstViolin[i] = parseInt(firstViolin[i]);
    secondViolin[i] = parseInt(secondViolin[i]);
    viola[i] = parseInt(viola[i]);
    cello[i] = parseInt(cello[i]);
    contra[i] = parseInt(contra[i]);
    flute[i] = parseInt(flute[i]);
    oboe[i] = parseInt(oboe[i]);
    clarinet[i] = parseInt(clarinet[i]);
    basson[i] = parseInt(basson[i]);
    trumpet[i] = parseInt(trumpet[i]);
    trombone[i] = parseInt(trombone[i]);
    horn[i] = parseInt(horn[i]);
    tuba[i] = parseInt(tuba[i]);
    timpani[i] = parseInt(timpani[i]);
    percussion[i] = parseInt(percussion[i]);
    piano[i] = parseInt(piano[i]);
    audience[i] = parseInt(audience[i]);
}
function game(num) {
    let ques = document.getElementsByClassName("question")[0];
    ques.innerHTML = (num+1)+') '+question[num];

    let fAnsw = document.getElementsByClassName("firstAnswer")[0];
    let sAnsw = document.getElementsByClassName("secondAnswer")[0];

    let fText = ''; let sText = '';
    let random=Math.floor(Math.random()*2);
    let difRandom=random?0:1;
    
    fText += '<button onclick="answer_0();">' + fanswer[num] + '</button>';
    sText += '<button onclick="answer_1();">' + sanswer[num]+ '</button>';
    fAnsw.innerHTML = fText;
    sAnsw.innerHTML = sText;
}
function startGame() {
    num = 0;
    game(num);
}
function endGame() {
    let ques = document.getElementsByClassName("question")[0];
    let quesText = '끝났습니다.';
    ques.innerHTML = quesText;

    document.getElementsByClassName("firstAnswer")[0].innerHTML = '';
    document.getElementsByClassName("secondAnswer")[0].innerHTML = '';
    let end = document.getElementsByClassName("answer")[0];
    let endText = '';
    endText += '지휘자'+result.지휘자 + ',';
    endText += '퍼바'+result.퍼바 + ',';
    endText += '세바'+result.세바 + ',';
    endText += '비올라'+result.비올라 + ',';
    endText += '첼로'+result.첼로 + ',';
    endText += '콘베'+result.콘베 + ',';
    endText += '플룻'+result.플룻 + ',';
    endText += '오보에'+result.오보에 + ',';
    endText += '클라'+result.클라 + ',';
    endText += '바순'+result.바순 + ',';
    endText += '트럼펫'+result.트럼펫 + ',';
    endText += '트롬본'+result.트롬본 + ',';
    endText += '호른'+result.호른 + ',';
    endText += '튜바'+result.튜바 + ',';
    endText += '팀파니'+result.팀파니 + ',';
    endText += '퍼커션'+result.퍼커션 + ',';
    endText += '피아노'+result.피아노 + ',';

    end.innerHTML = endText;
}
function answer_0() {
    result.지휘자 += conductor[num];
    result.퍼바 += firstViolin[num];
    result.세바 += secondViolin[num];
    result.비올라 += viola[num];
    result.첼로 += cello[num];
    result.콘베 += contra[num];
    result.플룻 += flute[num];
    result.오보에 += oboe[num];
    result.클라 += clarinet[num];
    result.바순 += basson[num];
    result.트럼펫 += trumpet[num];
    result.트롬본 += trombone[num];
    result.호른 += horn[num];
    result.튜바 += tuba[num];
    result.팀파니 += timpani[num];
    result.퍼커션 += percussion[num];
    result.피아노 += piano[num];
    result.관객 += audience[num];
    if (count == 19) {
        endGame();
    }
    else {
        count++;
        num++;
        game(num);
    }
}
function answer_1() {
    result.지휘자 += (6 - conductor[num]);
    result.퍼바 += (6 - firstViolin[num]);
    result.세바 += (6 - secondViolin[num]);
    result.비올라 += (6 - viola[num]);
    result.첼로 += (6 - cello[num]);
    result.콘베 += (6 - contra[num]);
    result.플룻 += (6 - flute[num]);
    result.오보에 += (6 - oboe[num]);
    result.클라 += (6 - clarinet[num]);
    result.바순 += (6 - basson[num]);
    result.트럼펫 += (6 - trumpet[num]);
    result.트롬본 += (6 - trombone[num]);
    result.호른 += (6 - horn[num]);
    result.튜바 += (6 - tuba[num]);
    result.팀파니 += (6 - timpani[num]);
    result.퍼커션 += (6 - percussion[num]);
    result.피아노 += (6 - piano[num]);
    result.관객 += (6 - audience[num]);

    if (count == 19) {
        endGame();
    }
    else {
        count++;
        num++;
        game(num);
    }
}

