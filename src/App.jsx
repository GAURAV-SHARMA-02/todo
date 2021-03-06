import React, { useState } from "react";
import Todolist from "./Todolist";

const App = () => {
  let [inputList, setInputList] = useState("");
  let [items, setItems] = useState([]);

  let itemEvent = (event) => {
    setInputList(event.target.value);
  };
  let listOfItems = () => {
    setItems((olditems) => {
      return [...olditems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    setItems((olditems)=>{
        return olditems.filter((arrElem,index)=>{
            return index!==id;
        })
    })
};

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a item"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listOfItems}> + </button>

          <ol>
            {/* <li>{items}</li> */}
            {items.map((itemValue, index) => {
              return (
                <Todolist
                  key={index}
                  id={index}
                  text={itemValue}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
