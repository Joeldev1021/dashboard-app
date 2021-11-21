import "./App.scss";
// import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTask from "./pages/AddTask";
import { Task } from "./model/TaskInterface";
import { useState } from "react";
import Home from "./pages/Home";
import Banner from "./components/banner/Banner";

// import Progress from "./components/progress/Progress";

const tasksInit = [
  { id: 1637452211364, title: "home page", endDate: "2021-12-04", status: "not started", priority: "medium", progress: 0, description: "init home page", user: "joel" },
  { id: 1637452283892, title: "create footer", endDate: "2021-11-26", status: "not started", priority: "low", progress: 0, description: "create footer", user: "jhon" },
  { id: 1637452321861, title: "create navbar", endDate: "2021-12-04", status: "in progress", priority: "low", progress: 0, description: "create navbar", user: "daniel" },
  { id: 1637452372667, title: "create routes the api", endDate: "2021-11-22", status: "in progress", priority: "high", progress: 0, description: "create routes the api", user: "vim" },
  { id: 1637452410590, title: "icons", endDate: "2021-11-25", status: "in progress", priority: "additional", progress: 0, description: "icons", user: "joel" }
];

function App () {
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState<Task[]>(tasksInit);

  const addTask = (task: Task): void => {
    setTasks([...tasks, {
      ...task, id: Date.now()
    }]);
  };

  return (
    <div className="App">
      <BrowserRouter>
      <Banner />
        <Routes>
          <Route path="/" element={<Home tasks={tasks}/>} />
          <Route path="/add" element={<AddTask addTask={addTask} />} />
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
