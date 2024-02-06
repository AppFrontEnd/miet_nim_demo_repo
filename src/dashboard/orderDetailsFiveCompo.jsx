import React, { useState } from "react";

const OrderDetailsFiveCompo = (props) => {

    const DropDownField = (props) => {
        const [selectedOption, setSelectedOption] = useState(props.value ? props.value : '');
        const handleChange = (event) => {
            setSelectedOption(event.target.value);
        };
        return (
            <select style={{padding:"5px",width:"32%"}} value={selectedOption} onChange={handleChange}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        )
    }

    return (
        <>
            <div className="order-container">
                {props.btnText &&
                    <>
                        <label style={{ width: "42%", marginTop: "10px" }}>{props.compOne}</label>
                        {props.compOneType=="select"?(<DropDownField/>):(<input style={{ width: "30%", marginTop: "10px" }} type={props.compOneType} />)}
                       

                        <label style={{ width: "32%", marginTop: "10px", marginLeft: "5rem" }}>{props.compTwo}</label>
                        {props.compTwoType=="select"?(<DropDownField/>):(<input style={{ width: "15%", marginTop: "10px" }} type={props.compTwoType} />)}
                       

                        <label style={{ width: "60%", marginTop: "10px", marginLeft: "5rem" }}>{props.compThree}</label>
                        {props.compThreeType=="select"?(<DropDownField/>):(<input style={{ width: "40%" }} type={props.compThreeType} />)}
                       
                        <button className="order-salesOrderBtn" type="button" >{props.btnText}</button>
                    </>}
            </div>

            <div className="order-container">
                {!props.btnText && props.compThree &&
                    <>
                        <label style={{ width: "42%", marginTop: "10px" }}>{props.compOne}</label>
                        {props.compOneType=="select"?(<DropDownField/>):(<input style={{ width: "30%", marginTop: "10px" }} type={props.compOneType} />)}
                       

                        <label style={{ width: "32%", marginTop: "10px", marginLeft: "5rem" }}>{props.compTwo}</label>
                        {props.compTwoType=="select"?(<DropDownField/>):(<input style={{ width: "15%", marginTop: "10px" }} type={props.compTwoType} />)}
                       

                        <label style={{ width: "60%", marginTop: "10px", marginLeft: "5rem", fontSize: props.compThree == "Total Amount" ? "22px" : "14px" }}>{props.compThree}</label>
                        {props.compThreeType=="select"?(<DropDownField/>):(<input style={{ width: "40%" }} type={props.compThreeType} />)}
                       
                        <label style={{ width: "43%" }}></label>
                    </>}
            </div>

            <div className="order-container" >
                {!props.btnText && !props.compThree &&
                    <>
                        <label style={{ width: "40%", marginTop: "10px" }}>{props.compOne}</label>
                        {props.compOneType=="select"?(<DropDownField/>):(<input style={{ width: "30%", marginTop: "10px" }} type={props.compOneType} />)}
                       

                        <label style={{ width: "32%", marginTop: "10px", marginLeft: "5rem" }}>{props.compTwo}</label>
                        {props.compTwoType=="select"?(<DropDownField/>):(<input style={{ width: "15%", marginTop: "10px" }} type={props.compTwoType} />)}
                       

                        <label style={{ width: "60%", marginTop: "10px", marginLeft: "5rem" }}></label>
                        <label style={{ width: "40%" }} type={props.compThreeType} />
                        <label style={{ width: "43%" }}></label>

                    </>}
            </div>
        </>

    );
}

export default OrderDetailsFiveCompo;