/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import Header from '../components/Header/Header';
import Table from '../components/Table/Table';
import { TaskContext } from '../context/TaskContext';

const Home = () => {
	const [search, setSearch] = useState('');

	const handleSearch = (n: string) => {
		setSearch(n);
	};

	return (
		<div>
			<Header handleSearch={handleSearch} />
			<Table search={search} />
		</div>
	);
};

export default Home;
