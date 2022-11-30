import { useEffect, useReducer } from "react"
import { todoReducer } from "../../TodoReducer"

const initalState = []

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}


export const useTodos = ( ) => {

  const [todos, dispatch] = useReducer( todoReducer, initalState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ))
  }, [todos])
  

  const handleNewTodo = ( todo ) => {
    // console.log({todo})
    const action = {
      type: '[TOD] Add Todo',
      payload: todo
    }
    dispatch( action )
  }

  const handleRemoveTodo = ( id ) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    })
  }

  const handleToggleTodo = ( id ) => {
      // console.log({todos})
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    })
  }

  return {
    todos,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
    countTodo: todos.length,
    countPendingTodo: todos.filter(todo => !todo.done).length,
  }

}
