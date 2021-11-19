import { Link } from "react-router-dom";
import "./table.scss";

// eslint-disable-next-line no-unused-vars
const STATUS = ["Not Started", "In Progess", "In Review", "Completed"];

const Table = () => {
  return (
    <>
      <div className="container">
        <h1>All Task</h1>
        <Link className="btn" to="/add">
          Add Task
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
             <th>action</th>
            <th>Task</th>
            <th>End date</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody className="tbody">
          <tr>
            <th>
              <input type="checkbox" name="completed" />
            </th>
            <td>Mark</td>
            <td>Mark</td>
            <td>
              <button>In Progress</button>
            </td>
            <td>
              <i className="fas fa-flag"></i>
            </td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th>
              <input type="checkbox" name="completed" />
            </th>
            <td>Mark</td>
            <td>Jacob</td>
            <td>
              <button>In Progress</button>
            </td>
            <td>
              <i className="fas fa-flag"></i>
            </td>
            <td>@fat</td>
          </tr>
          <tr>
            <th>
              <input type="checkbox" name="completed" />
            </th>
            <td>Mark</td>
            <td>Larry the Bird</td>
            <td>
              <button>In Progress</button>
            </td>
            <td>
              <i className="fas fa-flag"></i>
            </td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
