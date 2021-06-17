function addToTable(index,student){
    const tableBody = document.getElementById('tableBody')
    let row = document.createElement('tr')
    let cell = document.createElement('td')
    cell = index
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