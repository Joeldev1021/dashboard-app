// eslint-disable-next-line no-unused-vars
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext";
import { Task } from "../../interface/TaskInterface";
import Modal from "../modal/Modal";
import ListItem from "./ListItem/ListItem";
import "./table.scss";

const Table = () => {
  const [isCheck, setIsCheck] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState(false);

  const { state, removeTasks } = useContext(TaskContext);

  const handleIsCheck = (task: Task) => {
    if (isCheck.find(item => item.id === task.id)) return setIsCheck(isCheck.filter(item => item.id !== task.id));
    setIsCheck([...isCheck, task]);
  };

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  const handleRemove = () => {
    removeTasks();
    setShowModal(!showModal);
    setIsCheck([]);
  };

  return (
    <>
      <div className="container">
        {
          showModal && <Modal handleCloseModal={handleCloseModal} handleRemove={handleRemove} tasks={isCheck}/>
        }
        {state.tasks.length > 0 ? <h1>All Task</h1> : <h1>No Task</h1>}
        <div className="table__head">
          <button className="btn__filter">
            <i className="fas fa-filter"></i>
          </button>
          {
            isCheck.length > 0 && <button onClick={() => handleCloseModal()} className="btn btn__delete">Delete {`(${isCheck.length})`}</button>
          }

          <Link className="btn btn_add" to="/add">
            Add Task
          </Link>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>action</th>
            <th>Task</th>
            <th>user</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Progress</th>
            <th>End date</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {state.tasks.length > 0 &&
            state.tasks.map((item) => <ListItem key={item.id} item={item} handleIsCheck={handleIsCheck}/>)}
        </tbody>
      </table>
    </>
  );
};

export default Table;
