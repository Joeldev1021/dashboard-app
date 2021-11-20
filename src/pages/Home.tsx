import Header from "../components/header/Header";
import Table from "../components/table/Table";
import { Task } from "../model/TaskInterface";

interface props {
  tasks?: Task[];
}

const Home = ({ tasks }: props) => {
  console.log(tasks);
  return (
    <div>
      <Header />
      <Table />
    </div>
  );
};

export default Home;
