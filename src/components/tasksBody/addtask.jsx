import addTaskIMG from '../../imgs/botao-adicionar.png'

function addtask({setAble, able}) {
  return (
    <div className='addTask' onClick={() => setAble(!able)}>
        <img src={addTaskIMG} alt="Add Task" />
    </div>
  )
}

export default addtask