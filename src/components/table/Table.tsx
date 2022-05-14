/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import { useFilterItem } from "../../hooks/useFilterItem";
import { Task } from "../../interface/TaskInterface";
import Filter from "../filter/Filter";
import Modal from "../modal/Modal";
import ListItem from "../ListItem/ListItem";
import "./table.scss";
import TableHead from "../tableHead/TableHead";
import { useLocalStorage } from "../../hooks/useLocalStorage";

interface props {
  search: string;
}

const Table = ({ search } : props) => {
  const { state } = useContext(TaskContext);
  const [showModal, setShowModal] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [itemFilter, setItemFilter] = useState<string[]>([]);

  const { saveItem } = useLocalStorage({ tasks: state.tasks });

  useEffect(() => {
    if (itemFilter.length > 0) {
      setTasks(state.tasks.filter((task: Task) => itemFilter.includes(task.status) || itemFilter.includes(task.priority)));
    } else if (itemFilter.length === 0) {
      setTasks(state.tasks);
    }
  }, [state.tasks, itemFilter]);

  const handleFilter = (filter: string) => {
    if (itemFilter.includes(filter)) return setItemFilter(itemFilter.filter((item) => item !== filter));
    setItemFilter([...itemFilter, filter]);
  };

  return (
    <>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          tasks={tasks}

        />
      )}
      <div className="container">
        {state.tasks.length > 0 ? <h1>All Task</h1> : <h1>No Task</h1>}
        <TableHead
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        showModal={showModal}
        setShowModal={setShowModal}
        tasks={tasks}
        />
      </div>
      <Filter showFilter={showFilter} handleFilter={handleFilter} itemFilter={itemFilter}/>
      <table className="table">
        <thead>
          <tr>
            <th>action</th>
            <th>Task</th>
            <th>user</th>
            <th style={{ textAlign: "center" }}>Status</th>
            <th style={{ textAlign: "center" }}>Priority</th>
            <th style={{ textAlign: "center" }}>Progress</th>
            <th>End date</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {tasks.length > 0 &&
            tasks.map((task:Task) => (
              <ListItem
                key={task.id}
                task={task}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
