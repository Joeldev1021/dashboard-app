/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { initialState, Task } from "../interface/TaskInterface";

interface localProps {
    tasks: Task[];
}

export function useLocalStorage ({ tasks }: localProps) {
  const localStorageItem = localStorage.getItem("tasks");
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [saveLocalTask, setSaveLocalTask] = useState(parsedItem);

  const saveItem = (tasks: Task[]) => {
    const stringifiedItem = JSON.stringify(tasks);
    localStorage.setItem("tasks", stringifiedItem);
    setSaveLocalTask(tasks);
  };

  return { saveLocalTask, saveItem };
  // return [item, saveItem];
}
