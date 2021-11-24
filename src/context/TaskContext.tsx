import { createContext } from "react";
import { Task, TaskState } from "../interface/TaskInterface";

export type TaskContextProps = {
    state: TaskState;
    removeTasks: () => void;
    addTask: (task: Task) => void;
    editeTask?: (task: TaskState) => void;
    addSelectTask: (id: number) => void;
}

export const TaskContext = createContext<TaskContextProps>({} as TaskContextProps);
