export const makeForm = (elem : any, nameForm : string, btnClose: string, text: string) => {
    return(elem.innerHTML += `
    <button id='${btnClose}' type='reset'> Close </button>
    <form id='${nameForm}'>
        <input placeholder= 'First Name' name='first_name' type='text' id='formFirstName'>
        <input placeholder= 'Last Name' name='last_name' type='text' id='formLastName'>
        <input placeholder= 'Email' name='email' type='email' id='formEmail'>
        <select name='courses' class='choiceCourses'>
            <option aria-placeholder='Courses' value='JavaScript'> JS</option>
            <option aria-placeholder='Courses' value='Python'> Python</option>
        </select>
        <button type='submit' id='btnSubmForm'>${text}</button>
    </form>
            
    `)
}