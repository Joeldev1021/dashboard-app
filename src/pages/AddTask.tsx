import "./addtask.scss";
const AddTask = () => {
  return (
    <>
      <div className="container_form">
        <h1 className="title__page">New Task</h1>

        <form>
          <div className="form__grid">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                placeholder="Title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">End Date</label>
              <input
                type="date"
                name="date"
                id="date"
                className="form-control"
                placeholder="End date"
              />
            </div>
            <div className="form-group">
              <label htmlFor="status">Select status</label>
              <select name="status" id="status">
                <option value="notStarted">Not Started</option>
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
                className="form-control"
                placeholder="user"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Priority">Priority</label>
              <input
                type="text"
                name="Priority"
                id="Priority"
                className="form-control"
                placeholder="Priority"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Progress">Progress</label>
              <input
                type="text"
                name="Progress"
                id="Progress"
                className="form-control"
                placeholder="Progress"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Progress">description</label>
              <textarea
                name="description"
                id="description"

                placeholder="description"
              ></textarea>
              <div className="form-button">
                <button type="submit" className="btn btn-cancel">
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
