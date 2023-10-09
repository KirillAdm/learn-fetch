import {log} from 'console'
export const pushTable = (arrUsers: [], allTd: any, param: string) => {
    const arrId: any = []
    const parametr: string = param
    arrUsers.map((el: any) => {
        arrId.push(el.parametr)
    })
    allTd.forEach((el:any, i:number) =>{
        el.innerHTML = arrId[i]
    })
}

export const AddStudent = (student:any) =>{
    const table:any = document.getElementById('table')
    const newRow = table.insertRow(-1)
    newRow.className = 'clickUp'

    const chechBox = document.createElement('input')
    chechBox.setAttribute('type' , 'checkbox')
    const chechBoxSell = newRow.insertCell()
    chechBoxSell.appendChild(chechBox)
    const firstNameCell = newRow.insertCell()
    firstNameCell.textContent = student.first_name
    const lastNameCell = newRow.insertCell()
    lastNameCell.textContent = student.last_name
    const emailCell = newRow.insertCell()
    emailCell.textContent = student.email
    const ratingCell = newRow.insertCell()
    ratingCell.textContent= student.rating
    const coursesCell = newRow.insertCell()
    coursesCell.textContent = student.courses
    const btnUpdate = document.createElement('button')
    btnUpdate.textContent = 'Изменить'
    btnUpdate.setAttribute('name', 'btnUpdate')
    btnUpdate.className = 'btnUpdate'
    const btnUpdateCell = newRow.insertCell()
    btnUpdateCell.append(btnUpdate)
}

export const deleteStud = (button: any) => {
    button.addEventListener('click', function() {
        const checkboxAll = document.querySelectorAll('#table input[type=checkbox]:checked')
        console.log(checkboxAll)

        if (checkboxAll.length > 0 ) {
            checkboxAll.forEach((checkbox: any) =>{
                const studId = checkbox.parentNode.getAttribute('data-student-id')
                console.log(studId)

                fetch('https://learn-innodom.com/students/dalete/' + studId, {method:'DELETE'}).then(
                    (Response) =>{
                        if (Response.ok){
                            const cellCheck = checkbox.parentNode
                            cellCheck.parentNode.remove()
                        }
                    }
                )
            })
        }
    })
}

export const rowUpdate = (students:{
    email: string
    first_name: string
    last_name: string
    courses: []
}) => {
    const rowClick = document.querySelector('.clickUp')
    const cellEmail : any = rowClick?.querySelector('.email')
    const cellFirstName: any = rowClick?.querySelector('.first_name')
    const cellLastName: any = rowClick?.querySelector('.last_name')
    const cellCourses: any = rowClick?.querySelector('.courses')

    cellEmail.textContent = students.email
    cellFirstName.textContent = students.first_name
    cellLastName.textContent = students.last_name
    cellCourses.textContent= students.courses

    rowClick?.classList.remove('clickUp')
}

export const addListenerBtn = (boxFromElem: HTMLDivElement) => {
    const allBtnUper = document.querySelectorAll('.btnUpdate')
    const btnFormPatchClose: any = document.getElementById('btnFormPatchClose')
    allBtnUper.forEach((btn: any) => {
        btn.addEventListener('click', () =>{
            boxFromElem.style.display = 'block'
            const cellClick = btn.parentNode
            const rowClick = cellClick.parentNode
            rowClick.className = 'clickUp'
        })
    })
    btnFormPatchClose.addEventListener('click', () => {
        boxFromElem.style.display = 'none'
    })
}