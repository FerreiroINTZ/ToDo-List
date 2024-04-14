import "../styles/listTasks.css"

function sidebar({tasks}) {
  console.log(tasks)
  return (
    <ul className="listTasks-background">
      <li>
        <h3>Task 1</h3>
      </li>
    </ul>
  )
}

export default sidebar