import AddTask from './components/AddTask';
import Header from './components/Header'
import Tasks from './components/Tasks';
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Brawl Stars Tournament",
        day: "Oct 29th at 8:00pm",
        reminder: true,
    },

    {
        id: 2,
        text: "Squad Busters Training",
        day: "Aug 29th at 8:00pm",
        reminder: true,
    },

    {
        id: 3,
        text: "Clash of Clans War Raids",
        day: "Dec 25th at 8:00am",
        reminder: false,
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
      console.log(newTask)
  }

  const [showAddTask, setShowAddTask] = useState(false)

  return (
    <div className="container">
      <Header 
    onAdd={() => setShowAddTask(!showAddTask)}
    title="Task Tracker"
    showAddTask={showAddTask}
    />
      {showAddTask &&
      <AddTask onAdd={addTask}/>}
    {tasks.length > 0 ? (
      <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}
      />
    ) : (
      'No Tasks To Show'
    )}
    </div>
  );
}

export default App;
