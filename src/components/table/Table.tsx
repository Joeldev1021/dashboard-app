/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import { useFilterItem } from "../../hooks/useFilterItem";

import { Task } from "../../interface/TaskInterface";
import Filter from "../filter/Filter";
import Modal from "../modal/Modal";
import ListItem from "../ListItem/ListItem";
import "./table.scss";
import TableHead from "../tableHead/TableHead";
import { useLocalStorage } from "../../hooks/useLocalStorage";

interface props {
  search: string;
}

const Table = ({ search } : props) => {
  // state tasks from context

  const { state, removeTasks } = useContext(TaskContext);
  const [isCheck, setIsCheck] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [isTasks, setIsTasks] = useState<Task[]>(state.tasks);
  const [itemFilter, setItemFilter] = useState<Array<string>>([]);
  // useEffect to filter tasks the filter item
  const { newTasks } = useFilterItem(itemFilter, state.tasks);

  useEffect(() => {
    if (itemFilter.length > 0) {
      setIsTasks(newTasks);
    }
    if (itemFilter.length === 0) {
      setIsTasks(state.tasks);
    }
  }, [itemFilter, newTasks]);
  // useEffect to filter tasks the search
  useEffect(() => {
    if (search.length > 0) {
      setIsTasks(isTasks.filter((task: Task) => task.title.includes(search)));
    }
    if (search.length === 0) {
      setIsTasks(newTasks);
    }
  }, [search]);
  // update tasks when remove and add task
  useEffect(() => {
    setIsTasks(state.tasks);
    useLocalStorage({ tasks: state.tasks });
  }, [state.tasks]);

  // useEffect to filter tasks the filter item

  // change status of task
  const handleIsCheck = (task: Task) => {
    if (isCheck.find((item) => item.id === task.id)) { return setIsCheck(isCheck.filter((item) => item.id !== task.id)); }
    setIsCheck([...isCheck, task]);
  };

  // show modal
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  // remove tasks and close modal
  const handleRemove = () => {
    removeTasks();
    setShowModal(!showModal);
    setIsCheck([]);
  };
  // show filters
  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  const handlesetFilter = (filter: string) => {
    if (itemFilter.includes(filter)) return setItemFilter(itemFilter.filter((item) => item !== filter));
    setItemFilter([...itemFilter, filter]);
  };

  return (
    <>
      {showModal && (
        <Modal
          handleShowModal={handleShowModal}
          handleRemove={handleRemove}
          tasks={isCheck}
        />
      )}
      <div className="container">
        {state.tasks.length > 0 ? <h1>All Task</h1> : <h1>No Task</h1>}
        <TableHead
          handleShowModal={handleShowModal}
          isCheck={isCheck}
          handleShowFilter={handleShowFilter}
        />
      </div>
      <Filter showFilter={showFilter} handlesetFilter={handlesetFilter} itemFilter={itemFilter}/>
      <table className="table">
        <thead>
          <tr>
            <th>action</th>
            <th>Task</th>
            <th>user</th>
            <th style={{ textAlign: "center" }}>Status</th>
            <th style={{ textAlign: "center" }}>Priority</th>
            <th style={{ textAlign: "center" }}>Progress</th>
            <th>End date</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {isTasks.length > 0 &&
            isTasks.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                handleIsCheck={handleIsCheck}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
