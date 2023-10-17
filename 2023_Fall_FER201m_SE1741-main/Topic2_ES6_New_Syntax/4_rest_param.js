// Sử dụng tham số rest (phần còn lại) để định nghĩa hàm
// function sumNumbers(a, ...arr){
//     let total = a
//     for (const item of arr) {
//         total += item
//     }
//     return total
// }

// const result = sumNumbers(2, 4, 3, 5, 1) // arr = [4, 3, 5, 1]
// console.log("Total numbers: " + result);

function sumNumber1(...arr){
    let total = 0
    for (const item of arr) {
        if(typeof item === "number")
            total += item

    }
    return total
}

console.log("Total numbers: " + sumNumber1(2, 4, "Hello", true, 6)) // pack [2, 4, "Hello", true, 6]