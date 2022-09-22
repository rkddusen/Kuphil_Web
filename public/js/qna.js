let today = new Date();

function qna_question_add(){
    document.getElementsByClassName('qna_question_add')[0].style.display = 'flex';
    document.getElementsByClassName('float_button')[0].textContent = '×';
    document.getElementsByClassName('float_button')[0].setAttribute("onClick","qna_question_add_cancel()");
    document.getElementsByClassName('qna_part')[0].style.display = 'none';
    document.getElementsByClassName('qna_page')[0].style.display = 'none';
}
function qna_question_add_cancel(){
    document.getElementsByClassName('qna_part')[0].style.display = 'block';
    document.getElementsByClassName('qna_page')[0].style.display = 'table';
    document.getElementsByClassName('qna_question_add_title')[0].value = '';
    document.getElementsByClassName('qna_question_add_textarea')[0].value = '';
    document.getElementsByClassName('qna_question_add')[0].style.display = 'none';
    document.getElementsByClassName('float_button')[0].textContent = '+';
    document.getElementsByClassName('float_button')[0].setAttribute("onClick","qna_question_add()");
}

function qna_answer_add(){
    document.getElementsByClassName('qna_read_answer_add')[0].style.display = 'flex';
    document.getElementsByClassName('float_button')[0].textContent = '×';
    document.getElementsByClassName('float_button')[0].setAttribute("onClick","qna_answer_add_cancel()");
}
function qna_answer_add_cancel(){
    document.getElementsByClassName('qna_read_answer_add_textarea')[0].value = '';
    document.getElementsByClassName('qna_read_answer_add')[0].style.display = 'none';
    document.getElementsByClassName('float_button')[0].textContent = '+';
    document.getElementsByClassName('float_button')[0].setAttribute("onClick","qna_answer_add()");
}
function questionDoAction() {
    document.getElementsByClassName('qna_question_add_date')[0].value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
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
    else if(document.getElementsByClassName('qna_question_add_password')[0].value.length <=0){
        alert('비밀번호를 입력해야 합니다.');
        return false;
    }
    else{
        //submit 버튼이 한번만 실행되게끔
        document.getElementsByClassName('qna_question_add_subCan')[0].disabled = 'true';
        return true;
    }
}
function answerDoAction() {
    document.getElementsByClassName('qna_read_answer_add_date')[0].value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    if (document.getElementsByClassName("qna_read_answer_add_textarea")[0].value == "") {
        alert('내용을 입력하세요.');
        return false;
    }
    else if (document.getElementsByClassName("qna_read_answer_add_textarea")[0].value.length > 500) {
        alert('500자 이하여야 합니다.');
        return false;
    }
    
    else{
        //submit 버튼이 한번만 실행되게끔
        document.getElementsByClassName('qna_read_answer_add_subCan')[0].disabled = 'true';
        return true;
    }
}
function deleteDoAction(){
    if(document.getElementsByClassName("qna_delete_password")[0].value == ""){
        alert('비밀번호를 입력하세요.');
        return false;
    }
    else{
        //submit 버튼이 한번만 실행되게끔
        document.getElementsByClassName('qna_read_answer_add_subCan')[0].disabled = 'true';
        return true;
    }
}
function qna_delete(){
    let formarea = document.getElementsByClassName('qna_read_question')[0];
    let form = '<form action="/qna/deleteSubmit" method="post" onsubmit="return deleteDoAction();"><div>글 작성 시 설정한 비밀 번호가 아니면 삭제되지 않습니다.<br>비밀 번호가 틀리면 삭제되지 않고 본문에 머무르게 됩니다.<br>';
    form += '비밀 번호 : <input type="password" name="qna_password" class="qna_delete_password"/><input type="text" name="qna_id" value="'+qna_id+'" style="display: none;"/></div>';
    form += '<div><input type="submit" name="submit" class="qna_read_answer_add_subCan" value="삭제"/>';
    form += '<input type="button" name="cancel" onclick="location.reload()" value="취소" class="qna_read_answer_add_subCan"/></div></form>';

    formarea.innerHTML = form;
}2