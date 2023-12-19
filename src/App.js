import Header from './components/Header'
import index from './index.css'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: false
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true
    },
    {
      id: 3,
      text: "Meeting in the office",
      day: "Feb 14th at 12:00pm",
      reminder: true
    }
  ])

  // Delete Task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=> task.id !== id))
  } 

  return (
    <div className="container">
       <Header />
       <Tasks tasks={tasks} onDelete ={deleteTask}/>
    </div>
  );
}



export default App;
