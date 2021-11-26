
import { Task } from "../../interface/TaskInterface";
import "./modal.scss";

interface Props {
    handleShowModal: () => void;
    handleRemove: () => void;
    tasks: Task[];
}

const Modal = ({ handleShowModal, tasks, handleRemove }: Props) => {
  return (
        <div className="modal">
                <p className="modal__title">Are you sure you want to delete this tasks?</p>
                <p className="modal__subtitle">you are about to eliminate these tasks</p>
                <ol className="list__modal">
                    {tasks.map((task: Task) => <li key={task.id}>{task.title}</li>)}
                </ol>
            <div className="btn__group">
                <button className="btn btn__cancel" onClick={() => handleShowModal()}>Cancel</button>
                <button className="btn btn__delete" onClick={() => handleRemove()}>Delete</button>
            </div>
        </div>
  );
};

export default Modal;
