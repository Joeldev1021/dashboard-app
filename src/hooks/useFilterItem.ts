/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import { Task } from "../interface/TaskInterface";

export function useFilterItem (itemFilter: any, tasks: any) {
  const [newTasks, setNewTask] = useState([]);
  useEffect(() => {
    if (itemFilter.length > 0) {
      const newTasks = tasks.map((task: Task) => {
        if (itemFilter.includes(task.status)) {
          return task;
        }
        if (itemFilter.includes(task.priority)) {
          return task;
        }
      }).filter((task: Task) => task !== undefined);
      setNewTask(newTasks);
    }
  }, [itemFilter]);

  return { newTasks };
}
