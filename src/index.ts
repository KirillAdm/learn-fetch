import{AddStudent, addListenerBtn, deleteStud, pushTable, rowUpdate } from "./function"
import { registerWorker } from './helpers/service-worker.helper'
import {makeFetch} from "./fechMakeGet"
import {makeForm} from './getForma'
import {table} from './verstka'
registerWorker()

const root = document.getElementById('root')!

table (root) 
// получаем таблицу
const tableAdd:any = document.getElementById("table")
const allFirstName = document.querySelectorAll(".first_name")
const allLastName = document.querySelectorAll(".last_name")
const allEmail = document.querySelectorAll(".email")
const allRating = document.querySelectorAll(".rating")
const allCourses = document.querySelectorAll(".courses")
// make form
const divForm = document.createElement("div")
divForm.id = "form-box"
root.append(divForm)
const btnAddStud = document.querySelector('btnAddStud')

makeForm (divForm, 'formaAddStud', 'btnFormClose', 'add')

const formAddStud:any = document.getElementById('formAddStud');
const formPatch = document.createElement('div')
formPatch.id = "up_forma_cont";
root.append(formPatch)

//change students
makeForm (formPatch, 'formUpStud', 'btnFormPatchClose', 'changeData')
const allBtnUp = document.querySelectorAll ('btnUpdate')
const formUpStud:any = document.getElementById('formUpStud')
const btnFormPatchClose:any = document.getElementById('btnFormPatchClose')

addListenerBtn(formPatch)

makeFetch ('https://learn-innodom.com/students/all',{methohd: 'GET'})
.then((date) =>{
  const users = date.data
  
  const arrFirstName: any = [];
  users.map ((el : any) => {
    arrFirstName.push(el.first_name)
  })
  allFirstName.forEach((el :any, i : number) => {
    el.innerHTML = arrFirstName[i]
  });

  const arrLastName: any  = []
  users.map((el :any) =>{
    arrLastName.push(el.last_name)
  })
  allLastName.forEach((el: any, i: number) => {
    el.innerHTML = arrLastName[i]
  })

  const arrEmail : any = []
  users.map((el : any) => {
    arrEmail.push(el.email)
  })
  allEmail.forEach((el : any, i : number) => {
    el.innerHTML = arrEmail[i]
  })

  const arrRating : any = []
  users.map((el : any) => {
    arrRating.push(el.rating)
  })
  allRating.forEach((el : any, i : number) => {
    el.innerHTML = arrRating[i]
  })

  const arrCourses : any = []
  users.map((el : any) => {
    arrCourses.push(el.courses)
  })
  allCourses.forEach((el : any, i : number) => {
    el.innerHTML = arrCourses[i]
  })
})

const btnFormClose = document.getElementById('btnFormClose')
btnAddStud?.addEventListener('click', function () {
  divForm.style.display = 'block'
})
btnFormClose?.addEventListener('click', () => {
  console.log("closeEE")
  divForm.style.display = 'none'
})

formAddStud?.addEventListener('submit', (event :any) => {
  event.preventDefault()

  const formData : any = new FormData(formAddStud)
  const newStudentObj = {
    email : formData.get('email'),
    first_name : formData.get('first_name'),
    last_name : formData.get('last_name'),
    courses : formData.get('courses').split(','),
    rating: Math.floor(Math.random() * 10000)
  }

  makeFetch ('https://learn-innodom.com/students/create', {
    method : 'POST',
    body : JSON.stringify(newStudentObj)
  }).then((date) => {
    AddStudent(date.data)
    addListenerBtn(formPatch)
  })
  formAddStud.reset()
})

const btnDelStud = document.querySelector('.btnDelStud')
deleteStud(btnDelStud)

formUpStud?.addEventListener('submit', (event : any) => {
  event.preventDefault()
   
  const formData : any = new FormData(formUpStud)
  const updatedData = {
    email : formData.get('email'),
    first_name : formData.get('first_name'),
    last_name : formData.get('last_name'),
    courses : formData.get('courses').split(','),
    rating: Math.floor(Math.random() * 10000)
  }

  makeFetch ("https://learn-innodom.com/students/update/:studentId", {
    method: 'PATCH',
    body: JSON.stringify(updatedData)
  }).then((date) =>{
    const user = date.data
    rowUpdate(user)
  })
})

