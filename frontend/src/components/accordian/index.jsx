import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setenableMultiSelection] = useState(false);
  const [multipleselected, setMultipleSelected] = useState([]);

  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  function handleMultiSelection(currentId) {
    const cpyMultiple = [...multipleselected];
    const indexOfCurrentId = cpyMultiple.indexOf(currentId);

    if (indexOfCurrentId === -1) cpyMultiple.push(currentId);
    else cpyMultiple.splice(indexOfCurrentId, 1);

    setMultipleSelected(cpyMultiple);
  }

  console.log(selected, multipleselected)

  return (
    <div className="wrapper">
      <button onClick={() => setenableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection ? "Disable multi-selection" : "Enable multi-selection"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multipleselected.includes(dataItem.id) && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
