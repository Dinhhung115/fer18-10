// Định nghĩa 1 hàm với các tham số có giá trị mặc định

function sumNumbers(a=5, b=10){
    return a + b
}

console.log(sumNumbers(10,20))
console.log(sumNumbers());
console.log(sumNumbers(undefined));
console.log(sumNumbers(13)); // a = 13, b = 10
console.log(sumNumbers(undefined, 25));
