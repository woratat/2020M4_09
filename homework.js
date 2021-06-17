function addToTable(index,student){
    const tableBody = document.getElementById('tableBody')
    let row = document.createElement('tr')
    row.addEventListener('click',(event)=>{
        console.log('click')
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
    showAll()
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
    })
}
function hideAll(){
    displayStudent.style.display='none'
    output.style.display='none'
}
document.getElementById('allStudentMenu').addEventListener('click',(event)=>{
    hideAll()
    displayStudent.style.display='block'
    output.style.display='block'
    showAll()
})
