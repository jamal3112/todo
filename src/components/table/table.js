import React from 'react'
const Table = (props) => {
    
const DeleteTask = id =>{
    props.deleteTask(id)
} 

    return(
        <table>
        <thead>
        <tr>
        <th> ID </th>
        <th> Название </th>
        <th> Дата создания </th>
        <th> Дата завершения </th>
        <th colSpan={1}></th>
        </tr>
        </thead>
        <tbody>
        {props.tasks.length>0 ? (
          props.tasks.map(task => (
                <tr key={task.id}>
                    <td> {task.id} </td>
                    <td> {task.text} </td>
                    <td> {task.dateCreate} </td>
                    <td> {task.dateEnd}</td>
                    <td>
                        <button
                        onClick={() => DeleteTask(task.id)}
                        >Удалить</button>
                        <button>Изменить</button>
                    </td>
                </tr>
            ))
        ) : (
            <tr> 
                <td colSpan={5}>Нет дел</td>
            </tr>
        )
        
        }

        </tbody>
        </table>
    )
 }
 export default Table 


