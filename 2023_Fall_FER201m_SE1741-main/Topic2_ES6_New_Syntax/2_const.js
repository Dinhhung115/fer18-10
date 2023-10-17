// #1. Sử dụng từ khóa const để khai báo biến giống từ khóa let
// const PI = 3.14
// console.log(PI);

// #2. Định nghĩa ra đối tượng
// const user = Object.freeze({
//     "name": "Nguyen Van A",
//     "age": 20,
//     "address":{
//         "street": "190 Nguyen Tuan",
//         "state": "Thanh Xuan"
//     }
// })
// console.log(user)

// user.name = "David Beckham"
// user.age = 21
// user.address.street = "221 Nguyen Trai"

// console.log(`Name: ${user.name}, Age: ${user.age}, Street: ${user.address.street}`)

// #3.Định nghĩa Array
const numbers = [3, 4, 3]

const listStudent = [
    {"id": 1, "name": "John", "age": 20},
    {"id": 2, "name": "Mary", "age": 21},
    {"id": 3, "name": "Tom", "age": 19},
    {"id": 4, "name": "Thor", "age": 22},
    {"id": 5, "name": "Tom", "age": 23}
]

console.log(listStudent);

// for (let i = 0; i < listStudent.length; i++) {
//     const e = listStudent[i];
//     console.log(`${e.id}, ${e.name}, ${e.age}`);
// }

// for (const e of listStudent) {
//     console.log(`${e.id}, ${e.name}, ${e.age}`);
// }

// #4. Sử dụng constant định nghĩa các đối tượng: maps, sets

// --------- Luyện tập ----------
// Viết các hàm thực hiện các công việc:
// - Thêm 1 sinh viên vào listStudent
// - Tìm kiếm và in ra danh sách cac sinh viên có tên bắt đầu bởi từ khóa cần tìm
// - Tìm và in ra các sinh viên có tuổi từ 19 -> 20
// - Sắp xếp và hiển thị danh sách tăng dần theo tên và giảm dần theo tuổi (nếu tên trùng nhau)








