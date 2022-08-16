import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { Task } from '../../interface/TaskInterface';
import './styles.scss';

interface Props {
	setShowModal: (value: boolean) => void;
	tasks: Task[];
}

const Modal = ({ setShowModal, tasks }: Props) => {
	const { removeTasks } = useContext(TaskContext);

	const handleRemove = () => {
		removeTasks();
		setShowModal(false);
	};

	return (
		<div className='modal'>
			<p className='modal__title'>
				Are you sure you want to delete this tasks?
			</p>
			<p className='modal__subtitle'>you are about to eliminate these tasks</p>
			<ol className='list__modal'>
				{tasks.map(
					(task: Task) => task.select && <li key={task.id}>{task.title}</li>
				)}
			</ol>
			<div className='btn__group'>
				<button className='btn btn__cancel' onClick={() => setShowModal(false)}>
					Cancel
				</button>
				<button className='btn btn__delete' onClick={() => handleRemove()}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default Modal;
