import './styles.scss';
import { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { Task } from '../../interface/TaskInterface';
import Filter from '../Filter/Filter';
import ListItem from '../ListItem/ListItem';
import Modal from '../Modal/Modal';
import Thead from '../Thead/Thead';
import TableHead from '../TableHead/TableHead';

interface props {
	search: string;
}

const Table = ({ search }: props) => {
	const { state } = useContext(TaskContext);
	const [showModal, setShowModal] = useState(false);
	const [showFilter, setShowFilter] = useState(false);
	const [tasks, setTasks] = useState<Task[]>([]);
	const [itemFilter, setItemFilter] = useState<string[]>([]);

	/* Filtering the tasks based on the itemFilter array. */
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

	/***
	 * filter task by @{search}
	 * */
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

	/**
	 * If the filter is already in the array, remove it, otherwise add it.
	 * @param {string} filter - string - this is the filter that is being passed in from the button click
	 * @returns The return value is the value of the last expression evaluated in the function.
	 */
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
