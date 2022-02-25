let result = {
    지휘자: 0, 퍼바: 0, 세바: 0, 비올라: 0, 첼로: 0, 콘베: 0, 플룻: 0,
    피콜로: 0, 오보에: 0, 클라: 0, 바순: 0, 트럼펫: 0, 트롬본: 0, 호른: 0,
    튜바: 0, 팀파니: 0, 심벌즈: 0, 큰북: 0, 피아노하프: 0, 트앵: 0, 관객: 0,
}
let count = 0;
let num = 0;
for (let i = 0; i < 5; i++) {
    conductor[i] = parseInt(conductor[i]);
    firstViolin[i] = parseInt(conductor[i]);
    secondViolin[i] = parseInt(conductor[i]);
    viola[i] = parseInt(viola[i]);
    cello[i] = parseInt(cello[i]);
    contra[i] = parseInt(contra[i]);
    flute[i] = parseInt(flute[i]);
    piccolo[i] = parseInt(piccolo[i]);
    oboe[i] = parseInt(oboe[i]);
    clarinet[i] = parseInt(clarinet[i]);
    basson[i] = parseInt(basson[i]);
    trumpet[i] = parseInt(trumpet[i]);
    trombone[i] = parseInt(trombone[i]);
    horn[i] = parseInt(horn[i]);
    tuba[i] = parseInt(tuba[i]);
    timpani[i] = parseInt(timpani[i]);
    cymbals[i] = parseInt(cymbals[i]);
    bassdrum[i] = parseInt(bassdrum[i]);
    piano[i] = parseInt(piano[i]);
    triangle[i] = parseInt(triangle[i]);
    audience[i] = parseInt(audience[i]);
}
function game(num) {
    let ques = document.getElementsByClassName("question")[0];
    ques.innerHTML = question[num];

    let fAnsw = document.getElementsByClassName("firstAnswer")[0];
    let sAnsw = document.getElementsByClassName("secondAnswer")[0];

    let fText = ''; let sText = '';
    let random=Math.floor(Math.random()*2);
    let difRandom=random?0:1;
    fText += '<button onclick="answer_'+random+'();">' + answer[num].split("/")[random] + '</button>';
    sText += '<button onclick="answer_'+difRandom+'();">' + answer[num].split("/")[difRandom] + '</button>';
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
    endText += result.지휘자 + ',';
    endText += result.퍼바 + ',';
    endText += result.세바 + ',';
    endText += result.비올라 + ',';
    endText += result.첼로 + ',';

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
    result.피콜로 += piccolo[num];
    result.오보에 += oboe[num];
    result.클라 += clarinet[num];
    result.바순 += basson[num];
    result.트럼펫 += trumpet[num];
    result.트롬본 += trombone[num];
    result.호른 += horn[num];
    result.튜바 += tuba[num];
    result.팀파니 += timpani[num];
    result.심벌즈 += cymbals[num];
    result.큰북 += bassdrum[num];
    result.피아노하프 += piano[num];
    result.트앵 += triangle[num];
    result.관객 += audience[num];
    if (count == 4) {
        endGame();
    }
    else {
        count++;
        num++;
        game(num);
    }
}
function answer_1() {
    result.지휘자 += (5 - conductor[num]);
    result.퍼바 += (5 - firstViolin[num]);
    result.세바 += (5 - secondViolin[num]);
    result.비올라 += (5 - viola[num]);
    result.첼로 += (5 - cello[num]);
    result.콘베 += (5 - contra[num]);
    result.플룻 += (5 - flute[num]);
    result.피콜로 += (5 - piccolo[num]);
    result.오보에 += (5 - oboe[num]);
    result.클라 += (5 - clarinet[num]);
    result.바순 += (5 - basson[num]);
    result.트럼펫 += (5 - trumpet[num]);
    result.트롬본 += (5 - trombone[num]);
    result.호른 += (5 - horn[num]);
    result.튜바 += (5 - tuba[num]);
    result.팀파니 += (5 - timpani[num]);
    result.심벌즈 += (5 - cymbals[num]);
    result.큰북 += (5 - bassdrum[num]);
    result.피아노하프 += (5 - piano[num]);
    result.트앵 += (5 - triangle[num]);
    result.관객 += (5 - audience[num]);

    if (count == 4) {
        endGame();
    }
    else {
        count++;
        num++;
        game(num);
    }
}

