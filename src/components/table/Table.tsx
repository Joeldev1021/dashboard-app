import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Task } from "../../interface/TaskInterface";
import Filter from "../filter/Filter";
import Modal from "../modal/Modal";
import ListItem from "./ListItem/ListItem";
import "./table.scss";
import TableHead from "./tableHead/TableHead";

interface props {
  search: string;
}

const Table = ({ search } : props) => {
  const { state, removeTasks } = useContext(TaskContext);
  const [isCheck, setIsCheck] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [isTasks, setIsTasks] = useState<Task[]>(state.tasks);

  useEffect(() => {
    if (search.length > 0) {
      setIsTasks(isTasks.filter((task: Task) => task.title.includes(search)));
    }
    if (search.length === 0) {
      setIsTasks(state.tasks);
    }
  }, [search]);

  useEffect(() => {
    setIsTasks(state.tasks);
  }, [state.tasks]);

  const handleIsCheck = (task: Task) => {
    if (isCheck.find((item) => item.id === task.id)) { return setIsCheck(isCheck.filter((item) => item.id !== task.id)); }
    setIsCheck([...isCheck, task]);
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleRemove = () => {
    removeTasks();
    setShowModal(!showModal);
    setIsCheck([]);
  };

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      {showModal && (
        <Modal
          handleShowModal={handleShowModal}
          handleRemove={handleRemove}
          tasks={isCheck}
        />
      )}
      <div className="container">
        {state.tasks.length > 0 ? <h1>All Task</h1> : <h1>No Task</h1>}
        <TableHead
          handleShowModal={handleShowModal}
          isCheck={isCheck}
          handleShowFilter={handleShowFilter}
        />
      </div>
      {showFilter && <Filter />}
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
          {isTasks.length > 0 &&
            isTasks.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                handleIsCheck={handleIsCheck}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
