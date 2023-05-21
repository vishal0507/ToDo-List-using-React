import React, { useState } from 'react'
const InputArea = (props) => {
    const [inputText, setInputText] = useState("");
    const handleChange = (event) => {
        setInputText(event.target.value)
    }
    return (
        <div>
            <div className="form">
                <input type='text' onChange={handleChange} value={inputText}></input>
                <button onClick={() => {
                        props.addItems(inputText);
                        setInputText("");
    
                  
                }}>
                    <span>Add</span>
                </button>
            </div>
        </div>

    )
}

export default InputArea;