import { Link, BrowserRouter } from "react-router-dom"
import "../styles/header.css"

function header() {
  return (
    <header>
        <h1 className="titulo">ToDo List</h1>
        <nav className="social">
            <a href="#">Portfolio</a>
            <a href="#">linkedin</a>
            <a href="#">Git Hub</a>
            {/* <BrowserRouter> */}
              {/* <Link>Nada</Link> */}
            {/* </BrowserRouter> */}
        </nav>
    </header>
  )
}

export default header