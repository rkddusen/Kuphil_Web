let resultArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let count = 0;
let num = 0;

let resultMax = 0;
let endText = '';
let end = document.getElementsByClassName("result")[0];
function showResult(resultMax) {
    endText += '<div class="resultText">';
    switch (resultMax) {
        case 0:
            endText += "<p class='resultName'>Conductor</p><p>뛰어난 관찰력과 순발력이 돋보이는 당신!<br>어디를 가나 리더 자리를 맡을 일이 많으신가요?<br>리더십이 강하고 멋진 카리스마를 지닌 당신에게는, <br>오케스트라를 전두지휘하는 총사령관 '지휘자'가 어울려요!<br>지식을 바탕으로 독자적인 해석을 설득력있게 펼칠 수 있는 창의력이 정말 중요한 지휘자!<p>";
            break;
        case 1:
            endText += "<p class='resultName'>1st Violin</p><p>누구보다도 섬세한 감성과 날카로운 지성이 돋보이는 당신! <br>그래서인지 친구들에게 종종 '예민 보스' 라는 놀림을 받기도 하는데요? <br>뭐든 정확하지 않으면 참을 수 없는 당신에게는, <br>0.1mm의 오차도 허용될 수 없는 예민한 음감이 필수인 '퍼스트 바이올린'이 어울려요! <br>가장 많은 멜로디를 담당해 오케스트라의 꽃이라고도 불리는 퍼스트 바이올린!<p>";
            break;
        case 2:
            endText += "<p class='resultName'>2nd Violin</p><p>바이올린의 아름다운 음색은 좋지만 특유의 찢어지는 듯한 고음은 영 싫은 당신! <br>당신에게는, 오케스트라의 화음을 뒷받침 해주는 '세컨 바이올린'이 어울려요!<br>혹자는 바이올린을 잘하면 퍼스트, 못하면 세컨 바이올린을 간다고 하기도 하지만 그건 엄청난 오해라구요~!<br>제대로 연주하기 위해서는 뛰어난 박자감이 필수인 세컨 바이올린!<p>";
            break;
        case 3:
            endText += "<p class='resultName'>Viola</p><p>누구와 있어도 둥글둥글 원만한 관계를 만들어 나가는 당신! <br>특유의 재치와 배려심으로 주위 사람들을 든든히 서포트하는 걸 좋아하는 당신에게는, <br>고음과 저음의 중재자 역할을 하는 '비올라'가 어울려요!<br>따뜻하고 푸근한 음색으로 오케스트라 내에서 잘 띄지 않지만, <br>가끔씩 깜짝 놀랄만큼 아름다운 멜로디를 들려주기도 하는 비올라!<p>";
            break;
        case 4:
            endText += "<p class='resultName'>Cello</p><p>후퇴를 모르는 추진력과 불 같은 열정을 속에 지닌 당신!<br>'치고 빠짐'의 미학을 아는 당신에게는, <br>저음부의 탄탄한 기둥이자 웅장한 분위기를 전담하는 '첼로'가 어울려요!<br>반주 파트를 맡을 때는 지루할 수도 있지만, <br>첼로의 천둥 같은 울림이 멜로디에 활용될 때는 그렇게 멋질 수가 없죠! <p>";
            break;
        case 5:
            endText += "<p class='resultName'>Contra Bass</p><p>조용한 듯 하지만 가만히 있어도 존재감이 넘쳐나는 당신!<br>백 마디 실없는 농담보다 뼈 있는 한 마디 말을 더 좋아하는 당신에게는, <br>위엄 넘치는 저음이 매력적인 '더블 베이스'가 어울려요!<br>거대한 악기 사이즈에 모두를 놀라게 하지만, 연주를 시작하면 그 엄청난 울림에 더 놀랄 걸요?<p>";
            break;
        case 6:
            endText += "<p class='resultName'>Oboe</p><p>누구보다 시크하면서도 독특한 당신!<br>당신이야말로 세상에서 제일 고고한 존재가 아닐까요?<br>당신은 모두가 내적 친밀감을 가지고 있는,<br>조율의 기준이 되는 목관의 왕 '오보에'가 어울려요!<br>관통력이 좋아서 한 대만 있어도 소리가 뚫고 나오는 오보에!<p>";
            break;
        case 7:
            endText += "<p class='resultName'>Clarinet</p><p>매력이 넘쳐서 사람들을 뒤돌아보게 만드는 당신!<br>활용도가 높아 여러 장르에서, 중요한 솔로를 자주 맡는 '클라리넷'이 어울려요!<br>다양한 음색과 셈여림을 표현할 수 있는 카멜레온 같은 클라리넷! <br>클라리넷의 안개 끼는 듯한 묘한 음색이 궁금하지 않나요? <p>";
            break;
        case 8:
            endText += "<p class='resultName'>Flute</p><p>평소엔 조용해도 다 같이 모여있으면 독보적인 존재감을 뽐내는 당신!<br>통통 튀는 밝고 눈부신 음색으로 사람들의 귀를 사로잡는 '플룻'이 어울려요! <br>민첩하게 고음역대를 연주하기 위해 긴 호흡량과 빠른 손놀림이 필수인 플룻!  <br>연주회 때 은빛 물결을 보고 싶지 않나요?<p>";
            break;
        case 9:
            endText += "<p class='resultName'>Basson</p><p>앞에서 나서기 보단 뒤에서 사람들을 서포트하는 걸 즐기는 당신!<br>저음을 맡고 있어 귀 기울여 듣지 않으면 눈치 못 채기도 하지만,<br>특유의 음색 때문에 오케스트라에 없으면 너무나 허전한 '바순'이 어울려요!<br>아직도 악기의 잠재력이 무궁무진한 바순! <p>";
            break;
        case 10:
            endText += "<p class='resultName'>Trumpet</p><p>남들에 비해 너무나도 자기애가 강하고 관종인 당신! <br>게다가 끼도 많아 종종 '재간둥이'라는 수식어가 붙죠?<br>누구보다 눈에 띄고 싶어하는 당신에게는, 오직 한 음으로 이목을 집중시키는 '트럼펫'이 어울려요! <br>오케스트라를 이끌 수 있는 능력이 있어 제 2의 지휘자라고도 불리는 트럼펫! <br>자고 있는 사람 귀에 대고 불고 싶은 마음은 숨겨야 해요! <p>";
            break;
        case 11:
            endText += "<p class='resultName'>Trombone</p><p>누구보다 무심한 듯 남을 잘 챙겨주는 당신! <br>혹시 당신은 '츤데레'가 아닐까요?<br>친절하지만 관종인 당신에게는, 금관 중에서 음량이 제일 빵빵한 '트롬본'이 어울려요!<br>금관에서 유일하게 연주하는 방법이 슬라이드 조작인 트롬본! <br>그렇다고 연주할 땐 슬라이드로 앞 사람 머리 치면 안돼요~ <p>";
            break;
        case 12:
            endText += "<p class='resultName'>Horn</p><p>누구보다 민감하고 감성적인 당신! <br>관종이긴 하지만, 크게 눈에 띄는 건 별로죠?<br>모든 것에 기본을 중요시 하는 당신에게는,<br>고도의 집중력과 미세한 컨트롤이 필요한 '호른'이 어울려요!<br>악기를 보면 골뱅이가 먹고 싶어질 수도 있겠지만, 관악기의 꽃이라고도 불리는 호른! <p>";
            break;
        case 13:
            endText += "<p class='resultName'>Tuba</p><p>누구보다 바다같이 깊은 마음을 가진 당신! <br>주변에서 배려심의 대명사로 살고 계셨나요?<br>그런 마음을 악기로 표현하고 싶어할 당신에게는, <br>동굴같은 저음을 내는 '튜바'가 어울려요!<br>악기가 무겁고 크지만 남들의 관심을 악기로 다 받을 수 있는 튜바! <p>";
            break;
        case 14:
            endText += "<p class='resultName'>Timpani</p><p>박자를 중요하게 생각하고 남들의 시선을 즐기는 당신! <br>주변에서 카리스마 넘친다는 얘기를 종종 듣나요?<br>당신에게는, 오케스트라의 왕이라고 불리는 '팀파니'가 어울려요!<br>고요함과 웅장함을 동시에 줄 수 있는 유일한 악기 팀파니! <br>팔 힘은 기르고 오셔야 할 거예요! <p>";
            break;
        case 15:
            endText += "<p class='resultName'>Percussion</p><p>공사장 소음에도 둠칫 둠칫 박자를 탈 줄 아는 강한 고막과 리듬감을 가진 당신!<br>어딜 가나 관심을 받고 싶은 당신에게는, <br>모두의 시선을 한 몸에 받는 '퍼커션'이 어울려요!<br>비중은 적지만 한 번 칠 때마다 강력한 효과를 발휘할 수 있고, <br>이 악기 저 악기 다루는 멀티 플레이어로서의 능력을 요구하는 퍼커션! <p>";
            break;
        case 16:
            endText += "<p class='resultName'>Piano</p><p>손재주가 좋고 노래하기를 좋아하는 당신!<br>(당신은 이미 피아노를 쳐봤을 수도?)<br>아름다운 선율로 남들을 매혹하기를 좋아하는 당신에게는, <br>어떤 곡이든 연주가 풍부하게 연주가 가능한 '피아노'가 어울려요!<br>때론 아름답게, 때론 씩씩하게, 다양한 방법으로 남들을 주목시키는 피아노! <p>";
            break;
    }
    endText += '<br>지금 당장 쿠필에서 도전해 보아요~!😘';
    endText += '</div>';
    endText += '<img class="resultImg" src="./image/test/' + resultMax + '_결과.jpg">';
    end.innerHTML = endText;
}

function game(num) {
    let ques = document.getElementsByClassName("question")[0];
    ques.innerHTML = '<p>'+(num + 1) + ') ' + testArray[num].question+'</p>';

    let fAnsw = document.getElementsByClassName("firstAnswer")[0];
    let sAnsw = document.getElementsByClassName("secondAnswer")[0];

    let fText = ''; let sText = '';
    let random = Math.floor(Math.random() * 2);

    if(random){
        fText += '<button onclick="answer_0();">' + testArray[num].fanswer + '</button>';
        sText += '<button onclick="answer_1();">' + testArray[num].sanswer + '</button>';
    }
    else{
        fText += '<button onclick="answer_1();">' + testArray[num].sanswer + '</button>';
        sText += '<button onclick="answer_0();">' + testArray[num].fanswer + '</button>';
    }

    fAnsw.innerHTML = fText;
    sAnsw.innerHTML = sText;
}
function startGame() {
    num = 0;
    game(num);
}
function endGame() {
    let ques = document.getElementsByClassName("question")[0];
    let quesText = '';
    ques.innerHTML = quesText;
    document.getElementsByClassName("answer")[0].innerHTML = '';
    
    console.log("오보에"+resultArray[6]);
    console.log("클라"+resultArray[7]);
    console.log("플룻"+resultArray[8]);
    //최대값 찾기
    for (let i = 0; i < 17; i++) {
        if (resultArray[i] > resultArray[resultMax]) {
            resultMax = i;
        }
        else if (resultArray[i] < resultArray[resultMax]) {
            resultMax = resultMax;
        }
        else {//최대값이 같으면 랜덤으로 결과 보여줌
            let random = Math.floor(Math.random() * 2);
            resultMax = random ? resultMax : i;
        }
    }
    showResult(resultMax);
}
function answer_0() {
    resultArray[0] += testArray[num].conductor;
    resultArray[1] += testArray[num].firstViolin;
    resultArray[2] += testArray[num].secondViolin;
    resultArray[3] += testArray[num].viola;
    resultArray[4] += testArray[num].cello;
    resultArray[5] += testArray[num].contra;
    resultArray[6] += testArray[num].oboe;
    resultArray[7] += testArray[num].clarinet;
    resultArray[8] += testArray[num].flute;
    resultArray[9] += testArray[num].basson;
    resultArray[10] += testArray[num].trumpet;
    resultArray[11] += testArray[num].trombone;
    resultArray[12] += testArray[num].horn;
    resultArray[13] += testArray[num].tuba;
    resultArray[14] += testArray[num].timpani;
    resultArray[15] += testArray[num].percussion;
    resultArray[16] += testArray[num].piano;
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
    resultArray[0] += (6-testArray[num].conductor);
    resultArray[1] += (6-testArray[num].firstViolin);
    resultArray[2] += (6-testArray[num].secondViolin);
    resultArray[3] += (6-testArray[num].viola);
    resultArray[4] += (6-testArray[num].cello);
    resultArray[5] += (6-testArray[num].contra);
    resultArray[6] += (6-testArray[num].oboe);
    resultArray[7] += (6-testArray[num].clarinet);
    resultArray[8] += (6-testArray[num].flute);
    resultArray[9] += (6-testArray[num].basson);
    resultArray[10] += (6-testArray[num].trumpet);
    resultArray[11] += (6-testArray[num].trombone);
    resultArray[12] += (6-testArray[num].horn);
    resultArray[13] += (6-testArray[num].tuba);
    resultArray[14] += (6-testArray[num].timpani);
    resultArray[15] += (6-testArray[num].percussion);
    resultArray[16] += (6-testArray[num].piano);
    if (count == 19) {
        
        endGame();
    }
    else {
        count++;
        num++;
        game(num);
    }
}

