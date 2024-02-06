import React, { useState } from 'react';

const DropDownField = (props) => {
    const [selectedOption, setSelectedOption] = useState(props.value ? props.value : '');
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <select style={props.style?props.style:{padding:"5px",width:"32%",border:'1px solid #ccc'}} value={selectedOption} onChange={handleChange}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
    )
}

export default DropDownField;