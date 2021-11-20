import "./App.scss";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTask from "./pages/AddTask";
import { Task } from "./model/TaskInterface";
import { useState } from "react";
import Banner from "./components/banner/Banner";

function App () {
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task): void => {
    setTasks([...tasks, task]);
  };

  console.log(tasks);
  return (
    <div className="App">
      <BrowserRouter>
      <Banner />
        <Routes>
          <Route path="/" element={<Home tasks={tasks} />} />
          <Route path="/add" element={<AddTask addTask={addTask} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
