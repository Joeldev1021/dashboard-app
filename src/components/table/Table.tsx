import { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { Task } from '../../interface/TaskInterface';
import Filter from '../Filter/Filter';
import ListItem from '../ListItem/ListItem';
import './table.scss';
import TableHead from '../TableHead/TableHead';
import Modal from '../Modal/Modal';
import Thead from '../Thead/Thead';

interface props {
	search: string;
}

const Table = ({ search }: props) => {
	const { state } = useContext(TaskContext);
	const [showModal, setShowModal] = useState(false);
	const [showFilter, setShowFilter] = useState(false);
	const [tasks, setTasks] = useState<Task[]>([]);
	const [itemFilter, setItemFilter] = useState<string[]>([]);

	useEffect(() => {
		if (itemFilter.length > 0) {
			setTasks(
				state.tasks.filter(
					(task: Task) =>
						itemFilter.includes(task.status) ||
						itemFilter.includes(task.priority)
				)
			);
		} else if (itemFilter.length === 0) {
			setTasks(state.tasks);
		}
	}, [state.tasks, itemFilter]);

	// filter search by name
	useEffect(() => {
		if (search.length > 0) {
			setTasks(
				state.tasks.filter((task: Task) =>
					task.title.toLowerCase().includes(search.toLowerCase())
				)
			);
		} else if (search.length === 0) {
			setTasks(state.tasks);
		}
	}, [search]);

	const handleFilter = (filter: string) => {
		if (itemFilter.includes(filter))
			return setItemFilter(itemFilter.filter(item => item !== filter));
		setItemFilter([...itemFilter, filter]);
	};

	return (
		<>
			{showModal && <Modal setShowModal={setShowModal} tasks={tasks} />}
			<div className='container'>
				{state.tasks.length > 0 ? <h1>All Task</h1> : <h1>No Task</h1>}
				<TableHead
					showFilter={showFilter}
					setShowFilter={setShowFilter}
					showModal={showModal}
					setShowModal={setShowModal}
					tasks={tasks}
				/>
			</div>
			<Filter
				showFilter={showFilter}
				handleFilter={handleFilter}
				itemFilter={itemFilter}
			/>
			<table className='table'>
				<Thead />
				<tbody className='tbody'>
					{tasks.length > 0 &&
						tasks.map((task: Task) => <ListItem key={task.id} task={task} />)}
				</tbody>
			</table>
		</>
	);
};

export default Table;
