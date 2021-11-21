import Header from "../components/header/Header";
import Table from "../components/table/Table";
import { Task } from "../model/TaskInterface";

interface props {
  tasks?: Task[];
}

const Home = ({ tasks }: props) => {
  return (
    <div>
      <Header />
      <Table tasks={tasks} />
    </div>
  );
};

export default Home;
