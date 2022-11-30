
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li key={ todo.id } className={`list-group-item d-flex justify-content-between ${ (todo.done) ? 'bg-li' : ''}`}>
      <div className="align-self-center" >
        <input type="checkbox" onClick={ ()=> onToggleTodo( todo.id )} checked={todo.done}/>
        <div className="vr mx-1 align-text-top"></div>
        <span className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : ''}`}>
          {todo.description}
        </span>
      </div>
      <button className="btn" onClick={ () => onDeleteTodo( todo.id ) }>🗑️</button>
    </li>
  )
}
