
import "./filter.scss";

const arrayProgress = ["not started", "in progress", "in review", "completed", "cancelled"];
const arrayPriority = ["low", "medium", "high"];

interface props {
  handlesetFilter: (filter: string) => void;
  itemFilter: string[];
  showFilter: boolean;
}

const Filter = ({ handlesetFilter, itemFilter, showFilter }: props) => {
  const addFilter = (item: string) => {
    handlesetFilter(item);
  };

  return (
    <div className={`container__filter ${showFilter ? "" : "hidden"}`}>
      <div className="col__filter" >
        <p className="title__filter">Status</p>
        { arrayProgress.map((item:string) => {
          return (
              <div onClick={() => addFilter(item)}className="item__filter" key={item} >
                <p >{item}</p>
                {itemFilter.includes(item) ? <span className="filter__close">x</span> : null}
              </div>
          );
        })}
      </div>
      <div className="col__filter">
         <p className="title__filter">Priority</p>
        {arrayPriority.map((item:string) => {
          return (
              <div onClick={(e) => addFilter(item)}className="item__filter" key={item} >
                <p >{item}</p>
                {itemFilter.includes(item) ? <span className="filter__close">x</span> : null}
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
