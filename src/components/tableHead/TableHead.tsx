import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Task } from "../../interface/TaskInterface";

interface props {
    tasks: Task[];
    showFilter: boolean;
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    setShowFilter: (value: boolean) => void;
}

const TableHead = ({ tasks, showFilter, setShowModal, setShowFilter }:props) => {
  const [tasksIsCheck, setTasksIsCheck] = useState(tasks.filter((task:Task) => task.select === true));

  /* update tasksIscheck */
  useEffect(() => {
    setTasksIsCheck(tasks.filter((task:Task) => task.select === true));
  }, [tasks]);

  return (
    <div className="table__head">
      <button onClick={() => setShowFilter(!showFilter)} className="btn__filter">
        <i className="fas fa-filter"></i>
      </button>
      {tasksIsCheck.length > 0 && (
        <button onClick={() => setShowModal(true)} className="btn btn__delete">
          Delete {`(${tasksIsCheck.length})`}
        </button>
      )}

      <Link className="btn btn_add" to="/add">
        Add Task
      </Link>
    </div>
  );
};

export default TableHead;
