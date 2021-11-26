import { Task, TaskState } from "../../interface/TaskInterface";

type TaskAction =
    | { type: "ADD_TASK", payload: Task }
    | { type: "REMOVE_TASK", payload: any }
    | { type: "SELECT_TASK", payload: number}

export const reducerTask = (state: TaskState, action: TaskAction): TaskState => {
  console.log(action.payload);
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.select !== true)
      };
    case "SELECT_TASK":
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload ? { ...task, select: !task.select } : task)
      };

    default:
      return state;
  }
};
