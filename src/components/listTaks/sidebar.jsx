import "../styles/listTasks.css"
import completar_img from '../../imgs/marca-de-verificacao.png'
import deletar_img from '../../imgs/deletar.png'

function sidebar({tasks}) {
  console.log(tasks)
  return (
    <ul className="listTasks-background">
      {tasks.map(x =>
        <li className="item-lista">
          {x.task} ({x.tipo})
          <div className="actions">
            <div className="completar"><img src={completar_img} alt="" /></div>
            <div className="deletar"><img src={deletar_img} alt="" /></div>
            <div className="editar"></div>
          </div>
        </li>
      )}
    </ul>
  )
}

export default sidebar