function qna_question_add(){
    document.getElementsByClassName('qna_question_add')[0].style.display = 'flex';
}
function qna_question_add_cancel(){
    document.getElementsByClassName('qna_question_add_title')[0].value = '';
    document.getElementsByClassName('qna_question_add_textarea')[0].value = '';
    document.getElementsByClassName('qna_question_add')[0].style.display = 'none';
}

function qna_answer_add(){
    document.getElementsByClassName('qna_read_answer_add')[0].style.display = 'flex';
}
function qna_answer_add_cancel(){
    document.getElementsByClassName('qna_read_answer_add_textarea')[0].value = '';
    document.getElementsByClassName('qna_read_answer_add')[0].style.display = 'none';
}
function questionDoAction() {
    if(document.getElementsByClassName('qna_question_add_title')[0].value == ""){
        alert('제목을 입력하세요.');
        return false;
    }
    else if(document.getElementsByClassName('qna_question_add_title')[0].value.length >30){
        alert('제목은 30자 이하여야 합니다.');
        return false;
    }
    else if(document.getElementsByClassName('qna_question_add_textarea')[0].value == ""){
        alert('내용을 입력하세요.');
        return false;
    }
    else if(document.getElementsByClassName('qna_question_add_textarea')[0].value.length >500){
        alert('질문은 500자 이하여야 합니다.');
        return false;
    }
    else
        return true;
}
function answerDoAction() {
    if (document.getElementsByClassName("qna_read_answer_add_textarea")[0].value == "") {
        alert('내용을 입력하세요.');
        return false;
    }
    else if (document.getElementsByClassName("qna_read_answer_add_textarea")[0].value.length > 500) {
        alert('500자 이하여야 합니다.');
        return false;
    }
    else
        return true;
}