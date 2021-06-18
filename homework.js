function addToTable(index,student){
    const tableBody = document.getElementById('tableBody')
    let row = document.createElement('tr')
    row.addEventListener('click',(event)=>{
        console.log('click row')
        showOne(student.id)
    })
    let cell = document.createElement('th')
    cell.innerHTML = index
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.name
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.surname
    row.appendChild(cell)
    tableBody.appendChild(row)
}
function addToList(data){
    let index =1
    const tableBody = document.getElementById('tableBody')
    tableBody.innerHTML = ''
    for(student of data){
        addToTable(index++,student)
    }
}
function onLoad(){
    // showAll()
    hideAll()
}
function showAll(){
    fetch('https://dv-student-backend-2019.appspot.com/students').then(response=>{
        return response.json()
    }).then(data=>{
        addToList(data)
    })
}

var displayStudent = document.getElementById('displayStudent')
var output = document.getElementById('output')
var addUserDetail = document.getElementById('addUserDetail')

function showDetail(id,one){
    let id1 = document.getElementById('id')
    id1.innerHTML = id
    let studentId1 = document.getElementById('studentId')
    studentId1.innerHTML = one.studentId
    let name1 = document.getElementById('name')
    name1.innerHTML = one.name
    let surname1 = document.getElementById('surname')
    surname1.innerHTML = one.surname
    let gpa = document.getElementById('gpa')
    gpa.innerHTML = one.gpa
    let image = document.getElementById('image')
    image.setAttribute('src',one.image)
    image.setAttribute('width',"304")
}
function showOne(id){
    fetch(`https://dv-student-backend-2019.appspot.com/student/${id}`).then(response=>{
        return response.json()
    }).then(data=>{
        showDetail(data.id,data)
        studentEditId = data.id
        studentEditData = data
    })
}
function hideAll(){
    displayStudent.style.display='none'
    output.style.display='none'
    addUserDetail.style.display='none'
}
document.getElementById('allStudentMenu').addEventListener('click',(event)=>{
    hideAll()
    displayStudent.style.display='block'
    output.style.display='block'
    showAll()
})
document.getElementById('edit').addEventListener('click',(event)=>{
    hideAll()
    displayStudent.style.display='block'
    addUserDetail.style.display='block'
    showAll()
})
function editStudent(studentEditData){
    console.log('editStudent')
    studentEditData.name = studentEditName
    studentEditData.surname = studentEditSurname
    studentEditData.studentId = studentEditStudentId
    studentEditData.gpa = studentEditGpa
    studentEditData.image = studentEditImage

    updateToDB(studentEditData)
    document.location.reload()
}

var studentEditData
var studentEditId = 0
var studentEditName = document.getElementById('nameIn')
var studentEditSurname = document.getElementById('surnameIn')
var studentEditStudentId = document.getElementById('studentIdIn')
var studentEditGpa = document.getElementById('gpaIn')
var studentEditImage = document.getElementById('imageIn')

document.getElementById('submitEdit').addEventListener('click',function(){
    studentEditName = document.getElementById('nameIn').value
    studentEditSurname = document.getElementById('surnameIn').value
    studentEditStudentId = document.getElementById('studentIdIn').value
    studentEditGpa = document.getElementById('gpaIn').value
    studentEditImage = document.getElementById('imageIn').value

    studentEditName.innerHTML=""
    studentEditSurname.innerHTML=""
    studentEditStudentId.innerHTML=""
    studentEditGpa.innerHTML=""
    studentEditImage.innerHTML=""

    console.log('Submit Edit')
    editStudent(studentEditData)
})
function updateToDB(student){
    console.log('update')
    fetch('https://dv-student-backend-2019.appspot.com/students',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(student)
    }).then(response =>{
        if(response.status === 200){
            return response.json()
        }else{
            throw Error(response.statusText)
        }
    }).then(data=>{
        showAll()
    }).catch(error=>{
        return null
    })
}
