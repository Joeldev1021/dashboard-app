// eslint-disable-next-line no-unused-vars
import { ChangeEvent, useContext } from 'react';
import './styles.scss';

import { TaskContext } from '../../context/TaskContext';
import { Task } from '../../interface/TaskInterface';
import Progress from '../Progress/Progress';

interface props {
	task: Task;
}

const ListItem = ({ task }: props) => {
	const { addSelectTask } = useContext(TaskContext);

	const handleCheck = (e: ChangeEvent) => {
		const id = e.currentTarget.getAttribute('data-id');
		addSelectTask(Number(id));
	};

	return (
		<tr>
			<th>
				<input
					type='checkbox'
					name='select'
					data-id={task.id}
					onChange={e => handleCheck(e)}
					checked={task.select}
				/>
			</th>
			<td>{task.title}</td>
			<td>{task.user}</td>
			<td style={{ textAlign: 'center' }}>
				<button className={`btn btn_status ${task.status}`}>
					{task.status}
				</button>
			</td>
			<td style={{ textAlign: 'center' }}>
				<i className={`fas fa-flag ${task.priority}`}></i>
			</td>
			<td>
				<Progress task={task} />
			</td>
			<td>{task.endDate}</td>
		</tr>
	);
};

export default ListItem;
