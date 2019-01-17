const initState = {
  todos: []
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_TASK") {
    let newTasks = state.todos.filter(todos => {
      return action.id !== todos.id;
    });
    return {
      ...state,
      todos: newTasks
    };
  } else if (action.type === "ADD_TASK") {
    let newTask = [...state.todos, action.task];
    console.log("action task" + action.task);
    return {
      ...state,
      todos: newTask
    };
  }
  return state;
};

export default rootReducer;
