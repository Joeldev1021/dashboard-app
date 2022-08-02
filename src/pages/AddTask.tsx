import './addtask.scss';
import FormTask from '../components/Form/FormTask';

// eslint-disable-next-line no-unused-vars

const AddTask = () => {
	return (
		<>
			<div className='container_form'>
				<h1 className='title__page'>New Task</h1>
				<FormTask />
			</div>
		</>
	);
};

export default AddTask;
