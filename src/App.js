import Header from './components/Header'
import index from './index.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(true)
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

  // Add Task
  const addTask = (task)=>{
    const id = Math.floor(Math.random() * 100) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=> task.id !== id))
  } 

  // Toggle Reminder 
  const toggleReminder = (id)=>{
    setTasks(tasks.map((task) => task.id === id ? 
    {...task, reminder: !task.reminder}: task))
  }


  return (
    <div className="container">
       <Header 
       onAdd={()=>{setShowAddTask(!showAddTask)
      }}
      showAdd = {showAddTask}
       />
       {showAddTask && <AddTask onAdd={addTask}/>}
       {tasks.length> 0 ?(<Tasks tasks={tasks} 
       onDelete ={deleteTask}
       onToggle={toggleReminder}
       />):(
        'No task available'
       )}
    </div>
  );
}



export default App;
