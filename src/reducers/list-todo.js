export default function ToDoList(state = ["Sample", "Todo", "List", "is", "shown"], action) {
  switch(action.type) {
    case "AddTodo":
      return state.concat([action.payload])
    case "ClearTodo":
      return [];
    case "DeleteTodo":
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    case "UpTodo":
      return [
        ...state.slice(0, action.payload - 1),
        ...state.slice(action.payload, action.payload + 1),
        ...state.slice(action.payload - 1, action.payload),
        ...state.slice(action.payload + 1),
      ];
    case "DownTodo":
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1, action.payload + 2),
        ...state.slice(action.payload, action.payload + 1),
        ...state.slice(action.payload + 2),
      ];
  }
  return state;
}

