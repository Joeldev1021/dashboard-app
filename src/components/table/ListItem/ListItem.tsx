// eslint-disable-next-line no-unused-vars
import { ChangeEvent, useContext } from "react";

import { TaskContext } from "../../../context/TaskContext";
import { Task } from "../../../interface/TaskInterface";

interface props {
  item: Task;
  handleIsCheck: (task: Task) => void;
}

const ListItem = ({ item, handleIsCheck }: props) => {
  const { addSelectTask } = useContext(TaskContext);

  const handleCheck = (e: ChangeEvent) => {
    const id = e.currentTarget.getAttribute("data-id");
    addSelectTask(Number(id));
  };

  return (
    <tr>
      <th>
        <input type="checkbox" name="select" data-id={item.id}
        onChange={(e) => handleCheck(e)}
        onClick={(e) => handleIsCheck(item)}
        checked={item.select}
         />
      </th>
      <td>{item.title}</td>
      <td>{item.user}</td>
      <td>
        <button className={`btn btn_status ${item.status}`}>
          {item.status}
        </button>
      </td>
      <td>
        <i className={`fas fa-flag ${item.priority}`}></i>
      </td>
      <td></td>
      <td>{item.endDate}</td>
    </tr>
  );
};

export default ListItem;
