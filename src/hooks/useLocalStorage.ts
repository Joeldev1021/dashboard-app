/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Task } from "../interface/TaskInterface";

interface localProps {
    tasks: Task[];
}

export function useLocalStorage ({ tasks }: localProps) {
  console.log("locaStorage", tasks);
  // const localStorageItem = localStorage.getItem(itemName);
  // let parsedItem;

  // if (!localStorageItem) {
  //   localStorage.setItem(itemName, JSON.stringify(initialValue));
  //   parsedItem = initialValue;
  // } else {
  //   parsedItem = JSON.parse(localStorageItem);
  // }

  // const [item, setItem] = useState(parsedItem);

  // const saveItem = (newItem) => {
  //   const stringifiedItem = JSON.stringify(newItem);
  //   localStorage.setItem(itemName, stringifiedItem);
  //   setItem(newItem);
  // };

  // return [item, saveItem];
}
