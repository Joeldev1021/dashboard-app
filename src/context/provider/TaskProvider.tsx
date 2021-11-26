/* eslint-disable no-undef */
import { useReducer } from "react";
import { Task, TaskState } from "../../interface/TaskInterface";
import { reducerTask } from "../reducer/reducerTask";
import { TaskContext } from "../TaskContext";

const INITIAL_STATE:TaskState = {
  tasks: [
    { id: 1637452211364, select: false, title: "home page", endDate: "2021-12-04", status: "not started", priority: "medium", progress: 0, description: "init home page", user: "joel" },
    { id: 1637452283892, select: false, title: "create footer", endDate: "2021-11-26", status: "not started", priority: "low", progress: 0, description: "create footer", user: "jhon" },
    { id: 1637452321861, select: false, title: "create navbar", endDate: "2021-12-04", status: "in progress", priority: "low", progress: 0, description: "create navbar", user: "daniel" },
    { id: 1637452372667, select: false, title: "create routes the api", endDate: "2021-11-22", status: "in progress", priority: "high", progress: 0, description: "create routes the api", user: "vim" },
    { id: 1637452410590, select: false, title: "icons", endDate: "2021-11-25", status: "in progress", priority: "additional", progress: 0, description: "icons", user: "joel" }
  ]
};

interface props {
  children: JSX.Element|JSX.Element[]
}

const TaskProvider = ({ children }: props) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(reducerTask, INITIAL_STATE);

  const addTask = (task: Task) => {
    const newTask = { ...task, id: Date.now() };
    console.log(newTask);
    dispatch({ type: "ADD_TASK", payload: newTask });
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
