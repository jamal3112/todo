import React, {useState} from 'react'

const AddForm = (props) => {
    const initialFormState = {
        id: null,
        text:'',
        dateCreate:'',
        dateEnd:''
    }
    
    const [task, setTask] = useState(initialFormState)


    const handleInputChange = (event) =>{
        const name = event.currentTarget.name,
              value = event.currentTarget.value

        setTask({...task, [name]:value})  
        // console.log(task)   
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        props.addTask(task)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name='text'
                type='text'
                onChange={handleInputChange}
                value={task.text}
            />
           
            <input 
                name='dateEnd'
                type='date'
                onChange={handleInputChange}
                value={task.dateEnd}
            />
            <button>Добавить</button>
        </form>
    )
}

export default AddForm;
