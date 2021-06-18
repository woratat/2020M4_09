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
    img.setAttribute("width", "304");
    img.setAttribute("height", "100");
    img.classList.add('img-thumbnail')
    cell.appendChild(img)
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.gpa
    row.appendChild(cell)
    cell = document.createElement('td')
    let button = document.createElement('button')
    button.classList.add('btn')
    button.classList.add('btn-danger')
    button.setAttribute('type','button')
    button.innerText = 'delete'
    button.addEventListener('click',function(){
        let confirmMsg = confirm(`ต้องการลบ ${student.name}ใช่ไหม`)
        if(confirmMsg){
            deleteStudent(student.id)
        }
    })
    cell.appendChild(button)
    row.appendChild(cell)
    tableBody.appendChild(row)
}

function addStudentList(studentList){
    let counter = 1
    const tableBody = document.getElementById('tableBody')
    tableBody.innerHTML = ''
    for(student of studentList){
        addStudentToTable(counter++,student)
    }
}

function onLoad(){
    // showAll()
    hideAll()
}

function addStudentToDB(student){
    fetch('https://dv-student-backend-2019.appspot.com/students',{
        method: 'POST',
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

function deleteStudent(id){
    fetch(`https://dv-student-backend-2019.appspot.com/student/${id}`,{
        method: 'DELETE',
    }).then(response =>{
        if(response.status===200){
            return response.json()
        }else{
            throw Error(response.statusText)
        }
    }).then(data=>{
        alert(`student name ${data.name} is now deleted`)
        showAll()
    }).catch(error=>{
        alert('This is not in the database')
    })
}

function addStudentClick(){
    let student2 = {}
    student2.name = document.getElementById('name3').value
    student2.surname = document.getElementById('surname3').value
    student2.studentId = document.getElementById('studentId3').value
    student2.gpa = document.getElementById('gpa3').value
    student2.image = document.getElementById('image3').value
    addStudentToDB(student2)
}

document.getElementById('searchButton').addEventListener('click',(event)=>{
    console.log('click')
    addStudentClick()
})

function showAll(){
    fetch('https://dv-student-backend-2019.appspot.com/students').then(response =>{
            return response.json()
        })
        .then(data=>{
            addStudentList(data)
        })
}

var singleStudentResult = document.getElementById('single_student_result')
var output = document.getElementById('output')
var addUserDetail = document.getElementById('addUserDetail')

function hideAll(){
    singleStudentResult.style.display='none'
    output.style.display='none'
    addUserDetail.style.display='none'
}

document.getElementById('allStudentMenu').addEventListener('click',(event)=>{
    hideAll()
    output.style.display='block'
    showAll()
})
document.getElementById('addStudentMenu').addEventListener('click',(event)=>{
    hideAll()
    addUserDetail.style.display='block'
    showAll()
})
document.getElementById('searchMenu').addEventListener('click',(event)=>{
    hideAll()
    singleStudentResult.style.display='block'
    showAll()
})