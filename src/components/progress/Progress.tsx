
import { Task } from "../../interface/TaskInterface";
import "./styles.scss";
interface props {
  item: Task ;
}
const Progress = ({ item }: props) => {
  return (
    <>
      <div className="circle-wrap">
        <div className="circle">
          <div className="mask full">
            <div className="fill"></div>
          </div>
          <div className="mask half">
            <div className="fill"></div>
          </div>
          <div className="inside-circle">{item.progress > 0 ? `${item.progress}0%` : "0%"}</div>
        </div>
      </div>
    </>
  );
};

export default Progress;
