/* eslint-disable no-unused-vars */

import { MouseEvent, useState } from "react";
import "./filter.scss";

const arrayProgress = ["not started", "in progress", "in review", "completed", "cancelled"];
const arrayPriority = ["low", "medium", "high"];

interface props {
  handlesetFilter: (filter: string) => void;
  itemFilter: Array<string>;
}

const Filter = ({ handlesetFilter, itemFilter }: props) => {
  const addFilter = (event: MouseEvent) => {
    const n = (event.target as HTMLElement).textContent;
    handlesetFilter(`${n}`);
  };

  return (
    <div className="container__filter">
      <div className="col__filter" >
        <p className="title__filter">Status</p>
        {
          arrayProgress.map((item, index) => {
            return (
              <div className="item__filter" key={index} >
                <p onClick={(e) => addFilter(e)}>{item}</p>
                {itemFilter.includes(item) ? <span className="filter__close">x</span> : null}
              </div>
            );
          })
        }
      </div>
      <div className="col__filter">
         <p className="title__filter">Priority</p>
         {
          arrayPriority.map((item, index) => {
            return (
              <div className="item__filter" key={index} >
                <p onClick={(e) => addFilter(e)}>{item}</p>
                {itemFilter.includes(item) ? <span className="filter__close">x</span> : null}
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Filter;
