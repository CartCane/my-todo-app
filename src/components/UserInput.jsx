import React, {useState} from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function UserInput(props){
    const [inputText, setInputText] = useState("");

    function updateItems(event){
        setInputText(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (inputText.trim() !== ""){
            props.submit(inputText);
            setInputText("");
        }
      }

    return(
        <form onSubmit={handleSubmit} className="list-input">
        <input
          onChange={updateItems}
          type="text"
          placeholder="New item"
          value={inputText}
        />
        <Fab className="custom-fab" size="small" type="submit" color="primary">
          <AddIcon />
        </Fab>
      </form>
    )
}

export default UserInput;