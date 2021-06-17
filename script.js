function addStudentToTable(index,student){
    const tableBody = document.getElementById('tableBody')
    let row = document.createElement('tr')
    let cell = document.createElement('th')
    cell.innerHTML = index
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = `${student.name} ${student.surname}`
    row.appendChild(cell)
    cell = document.createElement('td')
    let img = document.createElement('img')
    img.setAttribute('src',student.image)
    img.height = 100
    img.classList.add('img-thumbnail')
    cell.appendChild(img)
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.gpa
    row.appendChild(cell)
    tableBody.appendChild(row)
}

function addStudentList(studentList){
    let counter = 1
    for(student of studentList){
        addStudentToTable(counter++,student)
    }
}

// function addStudentData(student){
//     let idElem = document.getElementById('id')
//     idElem.innerHTML = student.id
//     let studentIdElem = document.getElementById('studentId')
//     studentIdElem.innerHTML = student.studentId
//     let nameElem = document.getElementById('name2')
//     nameElem.innerHTML = `${student.name} ${student.surname}`
//     let gpaElem = document.getElementById('gpa')
//     gpaElem.innerHTML = student.gpa
//     let profileElem = document.getElementById('image')
//     profileElem.setAttribute('src', student.image)
// }

function onLoad(){
    student = {
        name:"John",
        surname:"Doe",
        studentId:"112",
        gpa:"1.00",
        image:"https://th.bing.com/th/id/OIP.SRu2WDafL5x25JX5B6EfPAHaD-?pid=ImgDet&rs=1"
    }
    addStudentToDB(student)
    // deleteStudent(22)
}

// document.getElementById('searchButton').addEventListener('click',(event)=>{ 
//     let id = document.getElementById('inputText').value
//     fetch(`https://dv-student-backend-2019.appspot.com/student/${id}`).then(response=>{
//         return response.json()
//     }).then(student=>{
//         addStudentData(student)
//     })
// })

function addStudentToDB(student){
    fetch('https://dv-student-backend-2019.appspot.com/students',{
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(student)
    }).then(response =>{
        return response.json()
    }).then(data=>{
        console.log('success',data)
    })
}

function deleteStudent(id){
    fetch(`https://dv-student-backend-2019.appspot.com/student${id}`,{
        method: 'DELETE',
    }).then(response =>{
        if(response.status===200){
            return response.json()
        }else{
            throw Error(response.statusText)
        }
    }).then(data=>{
        alert(`student name ${data.name} is now deleted`)
    }).catch(error=>{
        alert('your input student id is not in the database')
    })
}