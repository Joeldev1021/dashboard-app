/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useReducer } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Task, TaskState } from "../../interface/TaskInterface";
import { reducerTask } from "../reducer/reducerTask";
import { TaskContext } from "../TaskContext";

const INITIAL_STATE:TaskState = {
  tasks: [
    { id: 1637452211364, select: false, title: "home page", endDate: "2021-12-04", status: "not started", priority: "medium", progress: "1", description: "init home page", user: "joel" },
    { id: 1637452283892, select: false, title: "create footer", endDate: "2021-11-26", status: "not started", priority: "low", progress: "5", description: "create footer", user: "jhon" },
    { id: 1637452321861, select: false, title: "create navbar", endDate: "2021-12-04", status: "in progress", priority: "low", progress: "9", description: "create navbar", user: "daniel" },
    { id: 1637452372667, select: false, title: "create routes the api", endDate: "2021-11-22", status: "in progress", priority: "high", progress: "4", description: "create routes the api", user: "vim" },
    { id: 1637452410590, select: false, title: "icons", endDate: "2021-11-25", status: "in progress", priority: "additional", progress: "9", description: "icons", user: "joel" },
    { id: 1637459321861, select: false, title: "refactor", endDate: "2021-12-04", status: "completed", priority: "low", progress: "10", description: "create navbar", user: "ryan" },
    { id: 1637459372667, select: false, title: "fix error", endDate: "2021-11-22", status: "cancelled", priority: "high", progress: "3", description: "create routes the api", user: "vim" },
    { id: 1647452410590, select: false, title: "conectDb", endDate: "2021-11-25", status: "in review", priority: "additional", progress: "0", description: "icons", user: "main20" }
  ]
};

interface props {
  children: JSX.Element|JSX.Element[]
}

const TaskProvider = ({ children }: props) => {
  // hook local storage
  const { saveLocalTask } = useLocalStorage({ tasks: [] });
  // get tasks from localStorage
  const init = saveLocalTask.length > 0 ? { tasks: saveLocalTask } : INITIAL_STATE;

  const [state, dispatch] = useReducer(reducerTask, init);

  const addTask = (task: Task) => {
    const newTask = { ...task, id: Date.now() };
    const tasks = dispatch({ type: "ADD_TASK", payload: newTask });
  };

  const addSelectTask = (id: number) => {
    dispatch({ type: "SELECT_TASK", payload: id });
  };

  const filterTask = (filter: string) => {
    console.log(filter);
  };

  const removeTasks = () => {
    dispatch({ type: "REMOVE_TASK", payload: null });
  };

  return (
    <TaskContext.Provider value={{
      state,
      addTask,
      addSelectTask,
      removeTasks,
      filterTask
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

// [
//   { id: 1637452211364, select: false, title: "home page", endDate: "2021-12-04", status: "not started", priority: "medium", progress: 1, description: "init home page", user: "joel" },
//   { id: 1637452283892, select: false, title: "create footer", endDate: "2021-11-26", status: "not started", priority: "low", progress: 5, description: "create footer", user: "jhon" },
//   { id: 1637452321861, select: false, title: "create navbar", endDate: "2021-12-04", status: "in progress", priority: "low", progress: 9, description: "create navbar", user: "daniel" },
//   { id: 1637452372667, select: false, title: "create routes the api", endDate: "2021-11-22", status: "in progress", priority: "high", progress: 4, description: "create routes the api", user: "vim" },
//   { id: 1637452410590, select: false, title: "icons", endDate: "2021-11-25", status: "in progress", priority: "additional", progress: 9, description: "icons", user: "joel" },
//   { id: 1637459321861, select: false, title: "refactor", endDate: "2021-12-04", status: "completed", priority: "low", progress: 10, description: "create navbar", user: "ryan" },
//   { id: 1637459372667, select: false, title: "fix error", endDate: "2021-11-22", status: "cancelled", priority: "high", progress: 3, description: "create routes the api", user: "vim" },
//   { id: 1647452410590, select: false, title: "conectDb", endDate: "2021-11-25", status: "in review", priority: "additional", progress: 0, description: "icons", user: "main20" }
// ]
