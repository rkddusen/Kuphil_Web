let question = document.getElementsByClassName("question_text")[0];
let answer1 = document.getElementsByClassName("answer_text")[0];
let answer2 = document.getElementsByClassName("answer_text")[1];
let answer3 = document.getElementsByClassName("answer_text")[2];
let answer4 = document.getElementsByClassName("answer_text")[3];
let count = 0;//현재 문제 번호(0부터 시작)
//index를 random하게 하여 문제의 보기를 섞어줌
let randomIndex = [
    "exam_answer1",
    "exam_answer2",
    "exam_answer3",
    "exam_answer4",
];
let score = 0;//점수

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
function Start() {
    count = 0;
    score = 0;
    document.getElementsByClassName("answer_list")[2].style.display = "block";
    document.getElementsByClassName("answer_list")[3].style.display = "block";
    Next('0','start');
}
function Next(count, string) {
    if (string === "exam_answer1") {
        score += 10;
    }
    count++;
    if (examArray.length >= (count)) {
        shuffle(randomIndex);
        question.innerHTML =
            "" + count + ". " + examArray[count-1].exam_question + " [10점]";
        answer1.innerHTML = examArray[count-1][randomIndex[0]];
        answer1.setAttribute(
            "onClick",
            "Next(" + (count) + ", '" + randomIndex[0] + "')"
        );
        answer2.innerHTML = examArray[count-1][randomIndex[1]];
        answer2.setAttribute(
            "onClick",
            "Next(" + (count) + ", '" + randomIndex[1] + "')"
        );
        answer3.innerHTML = examArray[count-1][randomIndex[2]];
        answer3.setAttribute(
            "onClick",
            "Next(" + (count) + ", '" + randomIndex[2] + "')"
        );
        answer4.innerHTML = examArray[count-1][randomIndex[3]];
        answer4.setAttribute(
            "onClick",
            "Next(" + (count) + ", '" + randomIndex[3] + "')"
        );
        document.getElementsByClassName("answer_list")[3].style.display = "block";
    }
    else{
        question.innerHTML = "수고하셨습니다.<br>모든 문제가 끝났습니다.";
        answer1.innerHTML = "점수 보기";
        answer1.setAttribute(
            "onClick",
            "Score(" + score +")"
        );
        answer2.innerHTML = "종료하기";
        answer2.setAttribute(
            "onClick",
            "location.replace('./gamecenter');"
        );
        document.getElementsByClassName("answer_list")[2].style.display = "none";
        document.getElementsByClassName("answer_list")[3].style.display = "none";
    }
}

function Score(score){
    let str = '';
    switch (true) {
        case (score >= 100):
            str = "<img class='score_img' src='./image/exam_image/A+.png' >";
            break;
        case (score >= 90):
            str = "<img class='score_img' src='./image/exam_image/A.png' >";
            break;
        case (score >= 80):
            str = "<img class='score_img' src='./image/exam_image/B+.png' >";
            break;
        case (score >= 70):
            str = "<img class='score_img' src='./image/exam_image/B.png' >";
            break;
        case (score >= 60):
            str = "<img class='score_img' src='./image/exam_image/C+.png' >";
            break;
        case (score >= 50):
            str = "<img class='score_img' src='./image/exam_image/C.png' >";
            break;
        case (score >= 0):
            str = "<img class='score_img' src='./image/exam_image/F.png' >";
            break;
    }
    question.innerHTML = str + "<br>당신의 점수는 "+score+"점 입니다!";
    answer1.innerHTML = "돌아가기";
    answer1.setAttribute(
        "onClick",
        "location.replace('./exam');"
    );
    answer2.innerHTML = "종료하기";
    answer2.setAttribute(
        "onClick",
        "location.replace('./gamecenter');"
    );
    document.getElementsByClassName("answer_list")[2].style.display = "none";
    document.getElementsByClassName("answer_list")[3].style.display = "none";
}