export const table = (elem: any) => {
    elem.innerHTML = `
    <style>
    li {
        display: flex;
        gap:25px;
        font-size:20px;
        line-height:30px
    }
    #formAddStud{
        position: relative;
        width:300px;
        padding-top:50px;
        display:flex;
        flex-decoration:column;
        margin: 0 auto;
        gap:25px;
    }

    #formUpStud{
        position: relative;
        width:300px;
        padding-top:50px;
        display:flex;
        flex-direction:column;
        margin:0 auto;
        gap:25px;
    }

    #form-box{
        position: fixed;
        display:none;
        top:300px;
        left:600px;
    }

    #form_cont{
        position:fixed;
        display:none;
        top:300px;
        left:600px;
    }

    #btnFormClose{
        position:absolute;
        top:0;
        right:0;
        z-index:2;
    }

    #btnFormPatchClose{
        position:absolute;
        top:0;
        right:0;
        z-index:2;
        background:red;
    }

    #up_form_cont{
        position:relative;
        width:300px;
        margin:0 auto;
        display:none;
    }
    </style>

    <table id='table'>
        <thead>
            <tr>
                <th></th>
                <th> First Name</th>
                <th> Last Name</th>
                <th> Email</th>
                <th> Rating</th>
                <th> Courses</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><input type='checkbox'></td>
                <td class='first_name'>Ячейка 2</td>
                <td class='last_name'>Ячейка 3</td>
                <td class='email'>Ячейка 4</td>
                <td class='rating'>Ячейка 5</td>
                <td class='courses'>Ячейка 6</td>
                <td class='btn'><button class='btnUpdate' name='btnUpdate' type='button'> Изменить</button></td>
            </tr>
            <tr>
            <td><input type='checkbox'></td>
            <td class='first_name'>Ячейка 2</td>
            <td class='last_name'>Ячейка 3</td>
            <td class='email'>Ячейка 4</td>
            <td class='rating'>Ячейка 5</td>
            <td class='courses'>Ячейка 6</td>
            <td class='btn'><button class='btnUpdate' name='btnUpdate' type='button'> Изменить</button></td>
            </tr>
            <tr>
            <td><input type='checkbox'></td>
            <td class='first_name'>Ячейка 2</td>
            <td class='last_name'>Ячейка 3</td>
            <td class='email'>Ячейка 4</td>
            <td class='rating'>Ячейка 5</td>
            <td class='courses'>Ячейка 6</td>
            <td class='btn'><button class='btnUpdate' name='btnUpdate' type='button'> Изменить</button></td>
            </tr>
            <tr>
            <td><input type='checkbox'></td>
            <td class='first_name'>Ячейка 2</td>
            <td class='last_name'>Ячейка 3</td>
            <td class='email'>Ячейка 4</td>
            <td class='rating'>Ячейка 5</td>
            <td class='courses'>Ячейка 6</td>
            <td class='btn'><button class='btnUpdate' name='btnUpdate' type='button'> Изменить</button></td>
            </tr>
            <tr>
            <td><input type='checkbox'></td>
            <td class='first_name'>Ячейка 2</td>
            <td class='last_name'>Ячейка 3</td>
            <td class='email'>Ячейка 4</td>
            <td class='rating'>Ячейка 5</td>
            <td class='courses'>Ячейка 6</td>
            <td class='btn'><button class='btnUpdate' name='btnUpdate' type='button'> Изменить</button></td>
            </tr>
            <tr>
            <td><input type='checkbox'></td>
            <td class='first_name'>Ячейка 2</td>
            <td class='last_name'>Ячейка 3</td>
            <td class='email'>Ячейка 4</td>
            <td class='rating'>Ячейка 5</td>
            <td class='courses'>Ячейка 6</td>
            <td class='btn'><button class='btnUpdate' name='btnUpdate' type='button'> Изменить</button></td>
            </tr>
        </tbody>
    </table>
    <button class='btnAddStud' type='button'>Добавить студента</button>
    <button class='btnDelStud' type='button'>Удалить студента</button>
    `
}