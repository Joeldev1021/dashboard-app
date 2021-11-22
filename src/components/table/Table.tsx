import { Link } from "react-router-dom";
import { Task } from "../../interface/TaskInterface";
import "./table.scss";

// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
const STATUS = ["Not Started", "In Progess", "In Review", "Completed"];

interface props {
  tasks?: Task[];
}

const Table = ({ tasks }: props) => {
  return (
    <>
      <div className="container">
        <h1>All Task</h1>
        <div className="table__table">
          <button className="btn__filter"><i className="fas fa-filter"></i></button>
          <button className="btn btn__delete">Delete</button>
          <Link className="btn" to="/add">
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
          {tasks &&
            tasks.length > 0 &&
            tasks.map((item) => {
              return (
                <tr key={item.id}>
                  <th>
                    <input type="checkbox" name="select" />
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
            })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
