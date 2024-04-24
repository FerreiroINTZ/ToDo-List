import Header from "./components/header/header"
import Tasks from "./components/tasksBody/tasks"
import SideBar from "./components/listTaks/sidebar"
import { useState } from "react"

function App() {
  const [able, setAble] = useState(true)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Teste 1",
      tipo: "nada",
      content: "lorem",
      completa: false
    }
  ])

  const createTask = (title, label, subject) => {
    const newTask = [...tasks,
      {
        id: Math.floor(Math.random()*1000),
        task: title,
        tipo: label,
        content: subject,
        completa: false
      }
    ]
    console.log(title, label, subject)
    setTasks(newTask)
    setAble(!able)
  }

  return (
    <>
      <Header />
      <section className="all">
        <SideBar 
          key={tasks.id}
          tasks={tasks}
        />
        <Tasks
          key={tasks.id}
          able={able}
          setAble={setAble}
          tasks={tasks}
          setTasks={setTasks}
          createTask={createTask}
        />
      </section>
    </>
  )
}

export default App
