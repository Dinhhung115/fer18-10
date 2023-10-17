// #1. Phân biệt giữa let và var, xét phạm vi của từng loại
// for(var i = 0; i<5; i++){
//     console.log("Value of element: " + i);
// }
// console.log("Value of element: " + i);

// for(let j = 0; j<5; j++){
//     console.log("Value of element: " + j);
// }
// console.log("Value of element: " + j);

// Kết luận: let dùng để định nghĩa các biến (primative, array, object) trong phạm vi của khối
// mà nó được khai báo

// #2. Thuộc tính toàn cục của đối tượng window
var name = "David"
console.log("Name:  "+ window.name);

let name1 = "Mary"
console.log("Name: " + window.name1);

// #3. Định nghĩa lại (Redeclaration)
var x = 10
var x
console.log(x);

let y = 20
// let y = 30 // Lỗi
console.log(y);
