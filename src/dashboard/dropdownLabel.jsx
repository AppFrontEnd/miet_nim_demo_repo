import React, { useState } from 'react';

const DropDownLabel = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.value?props.value:'');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <label className="label-drop" htmlFor="selectOption">{props.compoLabOne}</label>
      <select className="input-drop" id="selectOption" value={selectedOption} onChange={handleChange}> 
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </>
  );
};

export default DropDownLabel;
