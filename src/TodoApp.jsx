
import { useTodos } from "./Components/Hook/useTodos"
import { TodoAdd } from "./Components/TodoAdd"
import { TodoList } from "./Components/TodoList"

export const TodoApp = () => {

  const { todos, countTodo, countPendingTodo, handleNewTodo, handleRemoveTodo, handleToggleTodo } = useTodos()

  return (
    <>
      <h1> ToDo ( {countTodo} ) </h1>
      <small>Pendientes: {countPendingTodo}</small>
      <hr />

      <div className="row">
        <div className="col-12 col-sm-8 order-sm-first">
          <TodoList 
            todo={ todos } 
            onDeleteTodo={ handleRemoveTodo }
            onToggleTodo={ handleToggleTodo }
          />
        </div>
        <div className="col-12 col-sm-4 order-first">
          <h4> Agregar ToDo </h4>
          <hr />
          <TodoAdd onNewTodo={ handleNewTodo }/>
        </div>
      </div>
    </>
  )
}
