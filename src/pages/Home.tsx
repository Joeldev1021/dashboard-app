import { useState } from "react";
import Header from "../components/header/Header";
import Table from "../components/table/Table";

interface Task {
  id: "",
  title: "",
  endDate: "",
  status: "",
  Priority: "",
  progress: ""
}

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState<Task>();

  return (
    <>
      <Header />
      <Table />
    </>
  );
};

export default Home;
