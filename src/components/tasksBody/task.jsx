
function task({title, tipo, content}) {
  return (
    <div className="tasks">
      <h2>{title}</h2>
      <span>{tipo}</span>
      <hr />
      <p>{content}</p>
    </div>
  )
}

export default task