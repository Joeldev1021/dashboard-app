import { Link } from "react-router-dom";
import { Task } from "../../interface/TaskInterface";

interface props {
    isCheck: Task[];
    handleShowFilter: () => void;
    handleShowModal: () => void;
}

const TableHead = ({ isCheck, handleShowFilter, handleShowModal }:props) => {
  return (
    <div className="table__head">
      <button onClick={() => handleShowFilter()} className="btn__filter">
        <i className="fas fa-filter"></i>
      </button>
      {isCheck.length > 0 && (
        <button onClick={() => handleShowModal()} className="btn btn__delete">
          Delete {`(${isCheck.length})`}
        </button>
      )}

      <Link className="btn btn_add" to="/add">
        Add Task
      </Link>
    </div>
  );
};

export default TableHead;
