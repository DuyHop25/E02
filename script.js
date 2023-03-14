"use strict";
exports.__esModule = true;
function demo() {
    // Lấy ra thẻ input ( Thẻ người dùng nhập ) có id = "fullname"
    var input = document.getElementById("fullname");
    var name = input.value;
    // Lấy ra element có id = "result-content"
    var result = "Good Moring _, " + name + "!";
    // Thay đổi nội dung của elenment && Ép kiểu theo kiểu dữ liệu của p 
    var p = document.getElementById("result-content");
    p.innerHTML = result;
}
demo();
