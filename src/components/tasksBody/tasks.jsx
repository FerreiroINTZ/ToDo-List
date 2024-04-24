import { Children, useState } from 'react'
import Task from './task'
import AddTask from './addtask'
import TaskInfos from './taskinfos'
import "../styles/tasks.css"

function corpo({able, setAble, tasks, setTasks, createTask}) {

  // console.log(Children)
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