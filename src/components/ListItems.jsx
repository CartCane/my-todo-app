import React, { useState, useRef, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import pencilIcon from '../assets/pencil-solid.svg';
import checkIcon from '../assets/check-solid.svg';

function ListItems(props) {
  const [editIndex, setEditIndex] = useState(null);
  const listItemRef = useRef([]);

  function handleEdit(index) {
    setEditIndex(index);
  }

  function handleCheck(index) {
    const updatedText = listItemRef.current[index]?.innerText || "";
    const updatedItems = props.items.map((item, i) =>
      i === index ? updatedText : item
    );
    props.setItems(updatedItems); // Pass this as a prop from App.jsx
    setEditIndex(null);
  }

  useEffect(() => {
    if (editIndex !== null && listItemRef.current[editIndex]) {
      listItemRef.current[editIndex].focus();
    }
  }, [editIndex]);

  return (
      <div className="list-container">
        {props.items.map((item, index) => (
          <React.Fragment key={index}>
            <div className="list-item">
              <DeleteIcon fontSize="large" onClick={() => props.delete(index)} />
              <li
                ref={(el) => (listItemRef.current[index] = el)}
                contentEditable={editIndex === index}
                suppressContentEditableWarning={true}
                style={{
                  outline: editIndex === index ? "2px solid #1976d2" : "none",
                }}
              >
                {item}
              </li>
              <img
                onClick={() => handleEdit(index)}
                style={{ display: editIndex === index ? "none" : "inline" }}
                src={pencilIcon}
                alt="pencil"
              />
              <img
                onClick={() => handleCheck(index)}
                style={{ display: editIndex === index ? "inline" : "none" }}
                src={checkIcon}
                alt="check"
              />
            </div>
            <hr style={{ borderTop: "1px solid #ccc", margin: "8px 0" }} />
          </React.Fragment>
        ))}
      </div>
  );
}

export default ListItems;
