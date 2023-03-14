function demo():void{
    // Lấy ra thẻ input ( Thẻ người dùng nhập ) có id = "fullname"
    let input:HTMLInputElement = <HTMLInputElement>document.getElementById("fullname");
    let name:string = input.value 
    // Lấy ra element có id = "result-content"
    let result:string= "Good Moring _, " + name +"!";
    // Thay đổi nội dung của elenment && Ép kiểu theo kiểu dữ liệu của p 
    let p:HTMLParagraphElement= <HTMLParagraphElement>document.getElementById("result-content");
    p.innerHTML = result;
}
demo();
export{}; // Để không bị đụng độ với file js