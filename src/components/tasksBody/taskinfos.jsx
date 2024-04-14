import { useState } from "react"

export default function taskinfos({createTask, able}) {
  const [info, setInfo] = useState({title: "", label: "", subject: ""})

  return (
    <div className="tasks" 
    style={{display: able ? "flex" : "none"}}>
      <input 
        type="text" 
        className="taskInfo-inp-title" 
        placeholder="Titulo"
        value={info.title}
        onChange={title => 
          {
            setInfo(x => {return({...x, title: title.target.value})})
            // createTask(info.title)
            // console.log(option)
          }}
      />

      <select name="label" className="taskInfo-inp-label" value={info.label}
      onChange={gb7 => 
        {
          setInfo(x => {return({...x, label: gb7.target.value})})
          // createTask(info.label)
          console.log(info.label)
        }}>
        <option value="nada">Nada</option>
        <option value="metade">Metade</option>
        <option value="tudo">Tudo</option>
      </select>

      <hr />
      
      <textarea 
        type="text"
        className="taskInfo-inp-subject"
        placeholder="Subject"
        value={info.subject}
        onChange={subject => 
          {
            setInfo(x => {return({...x, subject: subject.target.value})})
            // createTask(info.subject)
            // console.log(option)
          }}/>

      <input type="button" value="Salvar" className="taskInfo-inp-save" 
      onClick={() => {
        createTask(info.title, info.label, info.subject)
        setInfo({title: "", label: "", subject: ""})
      }}/>
    </div>
  )
}
