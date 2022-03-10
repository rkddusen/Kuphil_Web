// let dataArray = data.split(",");
// let category = [];
// let title = [];
// let writer = [];
// let date = [];
// for (let i = 0; i < count; i++) {
//     category[i] = dataArray[i].split("//")[0];
//     title[i] = dataArray[i].split("//")[1];
//     writer[i] = dataArray[i].split("//")[2];
//     date[i] = dataArray[i].split("//")[3];
// }

// function page() {
//     //페이지 개수
//     let page_number = Math.floor(count / 10);
//     let page_number_html = document.getElementsByClassName("board_number")[0];
//     let page_number_text = '';
//     page_number_html.innerHTML = null;
//     page_number_text += '<table><tr>';
//     page_number_text += '<td onclick="prevBoard();">이전</td>';
//     for (let i = 0; i < 10; i++) {
//         if (i > page_number) {
//             break;
//         }
//         page_number_text += '<td id="num_' + (i + 1) + '"><a href="/board/'+(i+1)+'">' + (i + 1) + '</td>';
//     }
//     page_number_text += '<td onclick="nextBoard();">다음</td>';
//     page_number_text += '</tr></table>';
//     page_number_html.innerHTML = page_number_text;
// }
// page();

// let num = 1;
// function showBoard(number) {//num은 1 11 21 31 41 ...
//     num=number;
//     page();
//     document.getElementById("num_" + (Math.floor(num / 10) + 1)).style.color = 'red';
//     let board_body = document.getElementsByClassName("board_body")[0];
//     let board_body_html = '';
//     for (let i = num; i < num + 10; i++) {
//         //게시글 전체개수보다 작을 때 게시글 띄우기
//         if (i <= count) {
//             board_body_html += '<tr>';
//             board_body_html += '<td>' + i + '</td>';
//             board_body_html += '<td>' + category[i - 1] + '</td>';
//             board_body_html += '<td style="text-align:left;">' + title[i - 1] + '</td>';
//             board_body_html += '<td>' + writer[i - 1] + '</td>';
//             board_body_html += '<td>' + date[i - 1].split(" ")[0] + '</td>';
//             board_body_html += '</tr>';
//         }
//         else {
//             board_body_html += '<tr>';
//             board_body_html += '<td></td>';
//             board_body_html += '<td></td>';
//             board_body_html += '<td></td>';
//             board_body_html += '<td></td>';
//             board_body_html += '<td></td>';
//             board_body_html += '</tr>';
//         }
//     }
//     board_body.innerHTML = board_body_html;
// }

// showBoard(num);

// function prevBoard() {
//     if (num == 1) {
//         alert("첫페이지입니다.");
//     }
//     else {
//         num -= 10;
//     }
//     showBoard(num);
// }
// function nextBoard() {
//     if ((num + 10) > count) {
//         alert("마지막페이지입니다.");
//     }
//     else {
//         num += 10;
//     }
//     showBoard(num);
// }

