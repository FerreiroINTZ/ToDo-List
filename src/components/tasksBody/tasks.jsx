import { useState } from 'react'
import Task from './task'
import AddTask from './addtask'
import TaskInfos from './taskinfos'
import "../styles/tasks.css"

function corpo({getTasks}) {
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
  getTasks(tasks)

  return (
    <section className='tasks-background'>
        {tasks.map(x => 
        <Task 
          key={x.id}
          title={x.task}
          tipo={x.tipo}
          content={x.content}
        />
          ) }
          <TaskInfos 
            able={able}
            createTask={createTask}
          />
          <AddTask
            able={able}
            setAble={setAble}
          />
    </section>
  )
}

export default corpo