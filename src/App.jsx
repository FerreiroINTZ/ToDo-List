import Header from "./components/header/header"
import Tasks from "./components/tasksBody/tasks"
import SideBar from "./components/listTaks/sidebar"

function App() {
  var nada;

  const tasks = x =>{
    nada = x
    console.log(nada)
  }

  return (
    <>
      <Header />
      <section className="all">
        <SideBar tasks={nada}/>
        <Tasks getTasks={tasks}/>
      </section>
    </>
  )
}

export default App
