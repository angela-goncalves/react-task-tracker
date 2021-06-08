import {useState} from 'react'
import './index.css';
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "this is a task",
      day: "May at 1th at 2pm",
      reminder: false, 
    },
    {
      id: 2,
      title: "this is a second task",
      day: "July at 7th at 2pm",
      reminder: false, 
    },
    {
      id: 3,
      title: "this is a third task",
      day: "September 4th at 2pm",
      reminder: false, 
    }
  ]);
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}
  return (
    <div className="App">
      <Header/>
      {tasks.length > 0 ? 
        <Tasks 
          tasks={tasks}
          onDelete={deleteTask} 
        />
        : <p>No tasks to show</p>
      }
    </div>
  );
}

export default App;
