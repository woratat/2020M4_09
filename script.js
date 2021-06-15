// var student = {};
// student.name = 'คุณลุง'
// student.username = 'a@b.com'
// student.gender = 'ชาย'


// var student2 = {};
// student2.name = 'คุณป้า'
// student2.username = 'x@y.com'
// student2.gender = 'หญิง'


// function addStudentData(student){
//     const output = document.getElementById('output')
//     let row = document.createElement('div')
//     row.classList.add("row")
//     let columnName = document.createElement('div')
//     columnName.classList.add('col-1')
//     columnName.classList.add('offset-1')
//     columnName.innerHTML = 'ชื่อ'
//     let columnValue = document.createElement('div')
//     columnValue = document.createElement('row')
//     columnValue.classList.add('col')
//     columnValue.innerHTML = student.name
//     row.appendChild(columnName)
//     row.appendChild(columnValue)
//     output.appendChild(row)

//     row = document.createElement('div')
//     row.classList.add("row")
//     columnName = document.createElement('div')
//     columnName.classList.add('col-1')
//     columnName.classList.add('offset-1')
//     columnName.innerHTML = 'รหัส'
//     columnValue = document.createElement('div')
//     columnValue = document.createElement('row')
//     columnValue.classList.add('col')
//     columnValue.innerHTML = student.username
//     row.appendChild(columnName)
//     row.appendChild(columnValue)
//     output.appendChild(row)

//     row = document.createElement('div')
//     row.classList.add("row")
//     columnName = document.createElement('div')
//     columnName.classList.add('col-1')
//     columnName.classList.add('offset-1')
//     columnName.innerHTML = 'เพศ'
//     columnValue = document.createElement('div')
//     columnValue = document.createElement('row')
//     columnValue.classList.add('col')
//     columnValue.innerHTML = student.gender
//     row.appendChild(columnName)
//     row.appendChild(columnValue)
//     output.appendChild(row)

// }
// window.addEventListener("load", function(){  //เมื่อ html วิโด้วโหลดให้เรียก addStudentData()
//     addStudentData(student)
// })

// var student={
//     name: 'สมรักษ์',
//     username: 'm@n.com',
//     gender: 'ชาย',
// }
// var student2={
//     name: 'สมชาย',
//     username: 'm@n.com',
//     gender: 'ชาย'
// }

// var students = [
//     student,
//     student2,
// ]

function addStudentToTable(index,student){
    const tableBody = document.getElementById('tableBody')
    let row = document.createElement('tr')
    let cell = document.createElement('th')
    cell.innerHTML = index
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.name
    row.appendChild(cell)
    cell = document.createElement('td')
    // cell.innerHTML = student.username
    let img = document.createElement('img')
    img.setAttribute('src',student.imageLink)
    cell.appendChild(img)
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.gender
    row.appendChild(cell)
    tableBody.appendChild(row)
}
// window.addEventListener('load',function(){
//     addStudentToTable(1,student)
// })

function addStudentList(studentList){
    let counter = 1
    for(student of studentList){
        addStudentToTable(counter++,student)
    }
}
// window.addEventListener('load',function(){
//     addStudentList(students)
// })

function onLoad(){
    fetch('asset/students2.json').then(response =>{  //then = response object
        return response.json()
    })
    .then(data=>{
        let x = data
        addStudentList(data)
    })
}