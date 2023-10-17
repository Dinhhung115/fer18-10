// Object destructuring
const existingUser = {
    'name': 'Pham Ngoc Tho',
    'email': 'thopn3@fpt.edu.vn',
    'password': '123456' 
}

// Destructuring
const {
    name,
    email
} = existingUser

const {
    name: n,
    email: e,
    p:p='Not show'
} = existingUser

console.log(`Wecome : ${name}, Email: ${email}`);
console.log(`Wecome : ${n}, Email: ${e}, Password: ${p}`);

// Array destructuring
// Database
const data = [
    {
        // Collection
        'students': [
            {'id': 1, 'name': 'David', 'age': 20, 'class_code': 1}, // Document
            {'id': 2, 'name': 'John', 'age': 21, 'class_code': 1},
            {'id': 3, 'name': 'Mary', 'age': 19, 'class_code': 2}
        ]
    },
    {
        'classes': [
            {'id': 1, 'name': 'SE1741'},
            {'id': 2, 'name': 'SE1742'},
            {'id': 3, 'name': 'SE1743'},
        ]
    },
    {
        'courses': [
            {'id': 1, 'code': 'FER201m'},
            {'id': 2, 'code': 'SDN301m'}
        ]
    }
]

// Log danh sach cac: Student, Class, Course
const [listStudents, listClasses, listCourses] = data

console.log(listStudents);
console.log(listClasses);
console.log(listCourses);

const {students} = listStudents

console.log("List of students:");


students.map(s => {
    // console.log(`${s.id}, ${s.name}, ${s.age}, ${s.class_code}`)
    s.age = 22
})

for (const s of students) {
    console.log(`${s.id}, ${s.name}, ${s.age}, ${s.class_code}`)
}