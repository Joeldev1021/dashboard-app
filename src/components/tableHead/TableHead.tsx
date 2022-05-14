import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Task } from "../../interface/TaskInterface";

interface props {
    tasks: Task[];
    handleShowFilter: () => void;
    setShowModal: (value: boolean) => void;
}

const TableHead = ({ tasks, handleShowFilter, setShowModal }:props) => {
  const [tasksIsCheck, setTasksIsCheck] = useState(tasks.filter((task:Task) => task.select === true));

  /* update tasksIscheck */
  useEffect(() => {
    setTasksIsCheck(tasks.filter((task:Task) => task.select === true));
  }, [tasks]);

  return (
    <div className="table__head">
      <button onClick={() => handleShowFilter()} className="btn__filter">
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
