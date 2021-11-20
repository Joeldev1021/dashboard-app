import { ChangeEvent, FormEvent, useState } from "react";
import { initialState, Task } from "../model/TaskInterface";
import "./addtask.scss";

interface props {
  addTask: (task: Task) => void;
}

type changeEvent =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLTextAreaElement>
  | ChangeEvent<HTMLSelectElement>;

const AddTask = ({ addTask }: props) => {
  const [task, setTask] = useState<Task>(initialState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): any => {
    e.preventDefault();
    if (task.title.length === 0 && task.description.length === 0 && task.user === "") return alert("Please fill all fields");
    addTask(task);
  };

  const handleChange = (e: changeEvent) => {
    setTask({ ...task, id: Date.now(), [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    console.log("hola");
  };

  return (
    <>
      <div className="container_form">
        <h1 className="title__page">New Task</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form__grid">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={(e) => handleChange(e)}
                className="form-control"
                placeholder="Title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                onChange={(e) => handleChange(e)}
                className="form-control"
                placeholder="End date"
              />
            </div>
            <div className="form-group">
              <label htmlFor="status">Select status</label>
              <select
                name="status"
                id="status"
                onChange={(e) => handleChange(e)}
              >
                <option value="">Select status</option>
                <option defaultChecked value="notStarted">
                  Not Started
                </option>
                <option value="inProgress">In Progess</option>
                <option value="inReview">In Review</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="user">User</label>
              <input
                type="text"
                name="user"
                id="user"
                onChange={(e) => handleChange(e)}
                className="form-control"
                placeholder="user"
              />
            </div>
            <div className="form-group">
              <label htmlFor="priority">Priority</label>
              <select
                name="priority"
                id="priority"
                onChange={(e) => handleChange(e)}
              >
                <option value="">Select Priority</option>
                <option defaultChecked value="high">
                  High
                </option>

                <option value="medium">Medium </option>
                <option value="low">Low</option>
                <option value="additional">additional</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Progress">Progress 1-10</label>
              <input
                type="number"
                max="10"
                min="0"
                name="Progress"
                id="Progress"
                onChange={(e) => handleChange(e)}
                className="form-control"
                placeholder="Progress"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Progress">description</label>
              <textarea
                name="description"
                id="description"
                onChange={(e) => handleChange(e)}
                placeholder="description"
              ></textarea>
              <div className="form-button">
                <button type="button" onClick={() => handleCancel()} className="btn btn-cancel">
                  Cancel
                </button>
                <button type="submit" className="btn btn-save">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTask;
