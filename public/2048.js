const block_size = 4;
let score = 0;
//시작 버튼 눌렀을 때 init
function init() {
    let table = document.getElementsByClassName("game_content")[0];
    initTable = '<tr><td class="block00"><img src="./image/test/빈결과.jpg"></td><td class="block01"><img src="./image/test/빈결과.jpg"></td><td class="block02"><img src="./image/test/빈결과.jpg"></td><td class="block03"><img src="./image/test/빈결과.jpg"></td></tr>';
    initTable += '<tr><td class="block10"><img src="./image/test/빈결과.jpg"></td><td class="block11"><img src="./image/test/빈결과.jpg"></td><td class="block12"><img src="./image/test/빈결과.jpg"></td><td class="block13"><img src="./image/test/빈결과.jpg"></td></tr>';
    initTable += '<tr><td class="block20"><img src="./image/test/빈결과.jpg"></td><td class="block21"><img src="./image/test/빈결과.jpg"></td><td class="block22"><img src="./image/test/빈결과.jpg"></td><td class="block23"><img src="./image/test/빈결과.jpg"></td></tr>';
    initTable += '<tr><td class="block30"><img src="./image/test/빈결과.jpg"></td><td class="block31"><img src="./image/test/빈결과.jpg"></td><td class="block32"><img src="./image/test/빈결과.jpg"></td><td class="block33"><img src="./image/test/빈결과.jpg"></td></tr>';
    table.innerHTML = initTable;

    // 4*4배열
    let block = new Array(block_size);

    for (var i = 0; i < block_size; i++) {
        block[i] = new Array(block_size);
    }

    // 배열 초기화
    for (var i = 0; i < block_size; i++) {
        for (var j = 0; j < block_size; j++) {
            block[i][j] = 0;
        }
    }
    start(block);
    score=0;
}

// 게임 진행 함수
function start(block) {
    createBlock(block);

    //키보드 입력
    document.addEventListener("keydown", function (e) {
        let key = e.keyCode;

        if (key === 65 /* A키(left) */) {
            if (leftMove(block)) {
                createBlock(block);
                if (checkQuit(block) == 0) {
                    gameover(score);
                }
            }
        }
        if (key === 87 /* W키(up) */) {
            if (upMove(block)) {
                createBlock(block);
                if (checkQuit(block) == 0) {
                    gameover(score);
                }
            }
        }
        if (key === 68 /* D키(right) */) {
            if (rightMove(block)) {
                createBlock(block);
                if (checkQuit(block) == 0) {
                    gameover(score);
                }
            }
        }
        if (key === 83 /* S키(down) */) {
            if (downMove(block)) {
                createBlock(block);
                if (checkQuit(block) == 0) {
                    gameover(score);
                }
            }
        }
    });
}

function checkQuit(block) {
    let quit = 0;
    for (var i = 0; i < block_size-1; i++) {
        for (var j = 0; j < block_size-1; j++) {
            if (block[i][j] == block[i][j+1] || block[i][j]==block[i+1][j] || block[i][j]==0) {
                quit++;
            }
        }
    }
    for(var i=0;i<block_size-1;i++){
        if(block[i][3] == block[i+1][3] || block[i][3]==0){
            quit++;
        }
    }
    for(var j=0;j<block_size-1;j++){
        if(block[3][j] == block[3][j+1] || block[3][j]==0){
            quit++;
        }
    }
    if(block[3][3]==0){
        quit++;
    }
    return quit;
}

// 랜덤한 칸에 블록 추가하기
function random(block) {
    let x, y;
    while (true) {
        //난수 생성 0~block_size-1
        x = Math.floor(Math.random() * block_size);
        y = Math.floor(Math.random() * block_size);

        if (block[x][y] != 0) {// 이미 랜덤한 자리에 블록이 있을 때
            continue;
        }
        else {
            break;
        }
    }
    return [x, y]; //좌표 리턴
}

// 좌표를 받아서 블록 생성
// 생성되는 블록의 값은 1 또는 2
// 생성되는 블록의 값도 랜덤하게 생성
function createBlock(block) {
    // random()에서 return 값을 배열로 받았으니깐
    // rand에 배열로 저장
    let rand = random(block);
    // 첫번째 리턴값
    let x = rand[0];
    // 두번째 리턴값
    let y = rand[1];

    block[x][y] = Math.floor(Math.random() * 2) + 1;

    checkBlock(block);
}

// 왼쪽으로 이동
function leftMove(block) {
    // 이동했는지, 막혔는지 체크
    let check = 0;

    // 블록 이동 후, 이웃된 블록이 같은 경우 합치고, 다시 블록 이동
    for (var i = 0; i < block_size; i++) {
        for (var j = 0; j < block_size - 1; j++) {
            for (var k = j + 1; k < block_size; k++) {
                if(block[i][j]==0) {
                    if (block[i][k] != 0) {
                        block[i][j] = block[i][k];
                        block[i][k] = 0;
                        check++;
                    }
                }
            }
        }
    }
    for (var i = 0; i < block_size; i++) {
        for (var j = 0; j < block_size - 1; j++) {
            if (block[i][j] != 0) {
                    if (block[i][j] == block[i][j + 1]) {
                        block[i][j] += block[i][j + 1];
                        block[i][j + 1] = 0;
                        check++;
                    }
                }
        }
    }
    for (var i = 0; i < block_size; i++) {
        for (var j = 0; j < block_size - 1; j++) {
            for (var k = j + 1; k < block_size; k++) {
                if(block[i][j]==0) {
                    if (block[i][k] != 0) {
                        block[i][j] = block[i][k];
                        block[i][k] = 0;
                        check++;
                    }
                }
            }
        }
    }

    checkBlock(block);

    // 블록이 이동하지 않았으면
    if (check == 0) {
        return false;
    }
    return true;
}

// 오른쪽으로 이동
function rightMove(block) {
    // 이동했는지, 막혔는지 체크
    let check = 0;

    // 블록 이동 후, 이웃된 블록이 같은 경우 합치고, 다시 블록 이동
    for (var i = 0; i < block_size; i++) {
        for (var j = block_size - 1; j >= 0; j--) {
            for (var k = j - 1; k >= 0; k--) {
                if (block[i][j] == 0) {
                    if (block[i][k] != 0) {
                        block[i][j] = block[i][k];
                        block[i][k] = 0;
                        check++;
                    }
                }
            }
        }
    }
    for (var i = 0; i < block_size; i++) {
        for (var j = block_size - 1; j > 0; j--) {
            if (block[i][j] != 0) {
                    if (block[i][j] == block[i][j - 1]) {
                        block[i][j] += block[i][j - 1];
                        block[i][j - 1] = 0;
                        check++;
                    }
                }
        }
    }
    for (var i = 0; i < block_size; i++) {
        for (var j = block_size - 1; j >= 0; j--) {
            for (var k = j - 1; k >= 0; k--) {
                if (block[i][j] == 0) {
                    if (block[i][k] != 0) {
                        block[i][j] = block[i][k];
                        block[i][k] = 0;
                        check++;
                    }
                }
            }
        }
    }

    checkBlock(block);

    // 블록이 이동하지 않았으면
    if (check == 0) {
        return false;
    }
    return true;
}

// 위쪽으로 이동
function upMove(block) {
    // 이동했는지, 막혔는지 체크
    let check = 0;

    // 블록 이동 후, 이웃된 블록이 같은 경우 합치고, 다시 블록 이동
    for (var j = 0; j < block_size; j++) {
        for (var i = 0; i < block_size; i++) {
            for (var k = i + 1; k < block_size; k++) {
                if (block[i][j] == 0) {
                    if (block[k][j] != 0) {
                        block[i][j] = block[k][j];
                        block[k][j] = 0;
                        check++;
                    }
                }
            }
        }
    }
    for (var j = 0; j < block_size; j++) {
        for (var i = 0; i < block_size - 1; i++) {
            if (block[i][j] != 0) {
                    if (block[i][j] == block[i+1][j]) {
                        block[i][j] += block[i+1][j];
                        block[i+1][j] = 0;
                        check++;
                    }
                }
        }
    }
    for (var j = 0; j < block_size; j++) {
        for (var i = 0; i < block_size; i++) {
            for (var k = i + 1; k < block_size; k++) {
                if (block[i][j] == 0) {
                    if (block[k][j] != 0) {
                        block[i][j] = block[k][j];
                        block[k][j] = 0;
                        check++;
                    }
                }
            }
        }
    }

    checkBlock(block);

    // 블록이 이동하지 않았으면
    if (check == 0) {
        return false;
    }
    return true;
}

// 아래쪽으로 이동
function downMove(block) {
    // 이동했는지, 막혔는지 체크
    let check = 0;

    // 블록 이동 후, 이웃된 블록이 같은 경우 합치고, 다시 블록 이동
    for (var j = 0; j < block_size; j++) {
        for (var i = block_size - 1; i >= 0; i--) {
            for (var k = 0; k < i; k++) {
                if (block[i][j] == 0) {
                    if (block[k][j] != 0) {
                        block[i][j] = block[k][j];
                        block[k][j] = 0;
                        check++;
                    }
                }
            }
        }
    }
    for (var j = 0; j < block_size; j++) {
        for (var i = block_size - 1; i > 0; i--) {
            if (block[i][j] != 0) {
                    if (block[i][j] == block[i-1][j]) {
                        block[i][j] += block[i-1][j];
                        block[i-1][j] = 0;
                        check++;
                    }
                }
        }
    }
    for (var j = 0; j < block_size; j++) {
        for (var i = block_size - 1; i >= 0; i--) {
            for (var k = 0; k < i; k++) {
                if (block[i][j] == 0) {
                    if (block[k][j] != 0) {
                        block[i][j] = block[k][j];
                        block[k][j] = 0;
                        check++;
                    }
                }
            }
        }
    }

    checkBlock(block);

    // 블록이 이동하지 않았으면
    if (check == 0) {
        return false;
    }
    return true;
}

// 블록의 값 확인
// 각 값별로 img태그 수정
function checkBlock(block) {
    score=0;
    for (var x = 0; x < 4; x++) {
        for (var y = 0; y < 4; y++) {
            if (block[x][y] == 0) {
                document.getElementsByClassName("block" + x + y)[0].innerHTML = '<img src="./image/test/빈결과.jpg">';
                document.getElementsByClassName("block" + x + y)[0].style.backgroundColor = 'white';
            } else if (block[x][y] == 1) {
                document.getElementsByClassName("block" + x + y)[0].innerHTML = '<img src="./image/test/1_결과.jpg">';
                document.getElementsByClassName("block" + x + y)[0].style.backgroundColor = '#FFA07A';
                score = score + 10;
            } else if (block[x][y] == 2) {
                document.getElementsByClassName("block" + x + y)[0].innerHTML = '<img src="./image/test/2_결과.jpg">';
                document.getElementsByClassName("block" + x + y)[0].style.backgroundColor = '#FF0000';
                score = score + 20;
            } else if (block[x][y] == 4) {
                document.getElementsByClassName("block" + x + y)[0].innerHTML = '<img src="./image/test/3_결과.jpg">';
                document.getElementsByClassName("block" + x + y)[0].style.backgroundColor = '#FFA500';
                score = score + 40;
            } else if (block[x][y] == 8) {
                document.getElementsByClassName("block" + x + y)[0].innerHTML = '<img src="./image/test/4_결과.jpg">';
                document.getElementsByClassName("block" + x + y)[0].style.backgroundColor = '#FFFF00';
                score = score + 80;
            } else if (block[x][y] == 16) {
                document.getElementsByClassName("block" + x + y)[0].innerHTML = '<img src="./image/test/5_결과.jpg">';
                document.getElementsByClassName("block" + x + y)[0].style.backgroundColor = '#00FF7F';
                score = score + 160;
            } else if (block[x][y] == 32) {
                document.getElementsByClassName("block" + x + y)[0].innerHTML = '<img src="./image/test/6_결과.jpg">';
                document.getElementsByClassName("block" + x + y)[0].style.backgroundColor = '#7FFF00';
                score = score + 320;
            } else if (block[x][y] == 64) {
                document.getElementsByClassName("block" + x + y)[0].innerHTML = '<img src="./image/test/7_결과.jpg">';
                document.getElementsByClassName("block" + x + y)[0].style.backgroundColor = '#008000';
                score = score + 640;
            } else if (block[x][y] == 128) {
                document.getElementsByClassName("block" + x + y)[0].innerHTML = '<img src="./image/test/8_결과.jpg">';
                document.getElementsByClassName("block" + x + y)[0].style.backgroundColor = '#AFEEEE';
                score = score + 1280;
            } else if (block[x][y] == 256) {
                document.getElementsByClassName("block" + x + y)[0].innerHTML = '<img src="./image/test/9_결과.jpg">';
                document.getElementsByClassName("block" + x + y)[0].style.backgroundColor = '#00FFFF';
                score = score + 2560;
            } else if (block[x][y] == 512) {
                document.getElementsByClassName("block" + x + y)[0].innerHTML = '<img src="./image/test/10_결과.jpg">';
                document.getElementsByClassName("block" + x + y)[0].style.backgroundColor = '#00BFFF';
                score = score + 5120;
            } else if (block[x][y] == 1024) {
                document.getElementsByClassName("block" + x + y)[0].innerHTML = '<img src="./image/test/11_결과.jpg">';
                document.getElementsByClassName("block" + x + y)[0].style.backgroundColor = '#1E90FF';
                score = score + 10240;
            } else if (block[x][y] == 2048) {
                document.getElementsByClassName("block" + x + y)[0].innerHTML = '<img src="./image/test/12_결과.jpg">';
                document.getElementsByClassName("block" + x + y)[0].style.backgroundColor = '#0000FF';
                score = score + 20480;
            } else if (block[x][y] == 4096) {
                document.getElementsByClassName("block" + x + y)[0].innerHTML = '<img src="./image/test/13_결과.jpg">';
                document.getElementsByClassName("block" + x + y)[0].style.backgroundColor = '#9370DB';
                score = score + 40960;
            } else if (block[x][y] == 8192) {
                document.getElementsByClassName("block" + x + y)[0].innerHTML = '<img src="./image/test/14_결과.jpg">';
                document.getElementsByClassName("block" + x + y)[0].style.backgroundColor = '#4B0082';
                score = score + 81920;
            } else if (block[x][y] == 16384) {
                document.getElementsByClassName("block" + x + y)[0].innerHTML = '<img src="./image/test/15_결과.jpg">';
                document.getElementsByClassName("block" + x + y)[0].style.backgroundColor = '#808080';
                score = score + 163840;
            } else if (block[x][y] == 32768) {
                document.getElementsByClassName("block" + x + y)[0].innerHTML = '<img src="./image/test/16_결과.jpg">';
                document.getElementsByClassName("block" + x + y)[0].style.backgroundColor = '#2F4F4F';
                score = score + 327680;
            } else if (block[x][y] == 65536) {
                document.getElementsByClassName("block" + x + y)[0].innerHTML = '<img src="./image/test/0_결과.jpg">';
                document.getElementsByClassName("block" + x + y)[0].style.backgroundColor = '#000000';
                score = score + 655360;
            }
        }
    }
    document.getElementsByClassName("game_my_score")[0].textContent = score;
}

function gameover(score){
    let area = document.getElementsByClassName("game_area")[0];
    game_form = '<form class="form" id="rform" action="/2048game/record" method="post" onsubmit="return doAction();">';
    game_form += '<div>기록 남기기</div>';
    game_form += '<div>이름 : ' + '<input type="text" name="name" class="game_name"/><br>점수 : <span name="score">'+score+'</span>점 </div>';
    game_form += '<div><input type="submit" name="submit" class="subCan" value="기록"/> ';
    game_form += '<input type="button" name="cancel" onClick="history.back();" value="취소" class="subCan"/></div></form>';
    area.innerHTML = game_form;
}
function doAction() {
    if (document.getElementsByClassName("game_name")[0].value == "") {
        alert('내용을 입력하세요.');
        return false;
    }
    else if (document.getElementsByClassName("game_name")[0].value.length > 10) {
        alert('이름이 너무 깁니다.');
        return false;
    }
    else
        return true;
}