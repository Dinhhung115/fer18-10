// Sử dụng toán tử spread (toán tử rải) cho phép duyệt từng phần tử trong mảng để rải vào vị trí mới
const old = [1, 2, 3]
// Rải các phần từ của old vào vị trí đầu của newArray1
const newArray1 = [4, ...old, 5]
console.log(newArray1);

// Ex1:
const originUsers = [
    {"id":1, "name": "David", "age": 20},
    {"id":2, "name": "Mary", "age": 19},
    {"id":3, "name": "Tom", "age": 20}
]

const listUsers = [...originUsers, {"role": "admin", "status": true}]
console.log(listUsers);

// Ex2:
function sumNumbers(...numbers){
    let total = 0;
    for (const item of numbers) {
        if(typeof item === "number")
            total += item
    }
    console.log("Output: " + total)
}

const listData = [3, "Hello", true, 3.5]
sumNumbers(...listData, 3.5)
