import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddTask from './pages/AddTask';
import Home from './pages/Home';
import Banner from './components/Banner/Banner';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Banner />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/add' element={<AddTask />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

// const tasks = [
//  {id: 1637452211364, title: 'home page', endDate: '2021-12-04', status: 'Not Started', priority: 'medium', progress: 0, description: "init home page", user: "joel"},
// {id: 1637452283892, title: 'create footer', endDate: '2021-11-26', status: 'Not Started', priority: 'low', progress: 0, description: "create footer", user: "joel"},
// {id: 1637452321861, title: 'create navbar', endDate: '2021-12-04', status: 'In Progress', priority: 'low', progress: 0, description: "create navbar", user: "joel"},
// {id: 1637452372667, title: 'create routes the api', endDate: '2021-11-22', status: 'In Progress', priority: 'high', progress: 0, description: "create routes the api", user: "joel"},
// {id: 1637452410590, title: 'icons', endDate: '2021-11-25', status: 'In Progress', priority: 'additional', progress: 0, description: "icons", user: "joel"},
// ]
