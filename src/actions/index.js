export function AddTodo(todo) {
  return {
    type: "AddTodo",
    payload: todo
  }
}
export function ClearTodo() {
  return {
    type: "ClearTodo",
    payload: ""
  }
}
export function DeleteTodo(index) {
  return {
    type: "DeleteTodo",
    payload: index
  }
}
export function UpTodo(index) {
  return {
    type: "UpTodo",
    payload: index
  }
}
export function DownTodo(index) {
  return {
    type: "DownTodo",
    payload: index
  }
}



