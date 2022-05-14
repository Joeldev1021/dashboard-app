// eslint-disable-next-line no-unused-vars
import { ChangeEvent, useContext } from "react";
import "./listItem.scss";

import { TaskContext } from "../../context/TaskContext";
import { Task } from "../../interface/TaskInterface";
import Progress from "../Progress/Progress";

interface props {
  task: Task;
}

const ListItem = ({ task }: props) => {
  const { addSelectTask } = useContext(TaskContext);

  return (
    <tr>
      <th>
        <input type="checkbox" name="select"
        onChange={(e) => addSelectTask(task.id!)}
        checked={task.select}
         />
      </th>
      <td>{task.title}</td>
      <td>{task.user}</td>
      <td style={{ textAlign: "center" }}>
        <button className={`btn btn_status ${task.status}`}>
          {task.status}
        </button>
      </td>
      <td style={{ textAlign: "center" }}>
        <i className={`fas fa-flag ${task.priority}`}></i>
      </td>
      <td><Progress task={task}/></td>
      <td>{task.endDate}</td>
    </tr>
  );
};

export default ListItem;
