import React, {
  useState,
  useEffect
} from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/navigation';
import EditForm from './components/forms/edit-form'
import AddForm from './components/forms/add-form';
import './firebase-config/firebase-config';
import * as firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './components/table/table'

function App() {
  const db = firebase.firestore()
  const [tasks, setTasks] = useState('')

  useEffect(() => {
    db.collection("todo").onSnapshot(snapshot => {
      const tasksData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setTasks(tasksData)
    })

  }, [])


  const deleteTask = id =>{
    setTasks(tasks.filter(tasks => tasks.id !== id))
    db.collection("todo").doc(`${id}`).delete()
  }

  const editLine = tasks =>{
    
  }


  const addTask = (task) => {
    if (tasks.length > 0) {
      task.id = tasks[tasks.length - 1].id + 1
    } else {
      task.id = 1
    }

    let now = new Date()
    task.dateCreate = `${now.getFullYear()}-${now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1}-${now.getDate() < 10 ? '0' + now.getDate() : now.getDate()}`

    db.collection("todo").doc(`${task.id}`).set({
      id: task.id,
      text: task.text,
      dateCreate: task.dateCreate,
      dateEnd: task.dateEnd
    })

  }
return (
  <BrowserRouter>
    <Navigation/>
    <Route path='/add' render={() => 
      <AddForm addTask={addTask}/>
    }/> 

  <Route exact path='/' render={() =>
    <Table tasks={tasks} deleteTask={deleteTask}/>
  }/>


   
  </BrowserRouter>
);
}

export default App;