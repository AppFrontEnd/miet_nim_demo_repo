import React from "react";
import DropDownLabel from "./dropdownLabel";
import "./technicaldetails.css";

const FourColCompo = (props) => {
    const LabelInputCompo = (props) => {
        return (
            <>
                <label className="label">{props.title}</label>
                <input className="input" type="text" />
            </>
        )
    }

    return (
        <div className="container">
            <>
                {
                    props.compoOne == "input" ? (<LabelInputCompo title={props.compoLabOne}/>):(<DropDownLabel compoLabOne={props.compoLabOne}/>)
                }
            </>

            <>
                {
                    props.compoTwo == "input" ? (<LabelInputCompo title={props.compoLabTwo}/>):(<DropDownLabel compoLabOne={props.compoLabTwo}/>)
                }
            </>

            <>
                {
                    props.compoThree == "input" ? (<LabelInputCompo  title={props.compoLabThree}/>):(<DropDownLabel compoLabOne={props.compoLabThree}/>)
                }
            </>

            <>
                {
                    props.compoFour == "input" ? (<LabelInputCompo  title={props.compoLabFour}/>):(<DropDownLabel compoLabOne={props.compoLabFour}/>)
                }
            </>

            <>
                {
                    props.compoFive == "input" ? (<LabelInputCompo  title={props.compoLabFive}/>):(<DropDownLabel compoLabOne={props.compoLabFive}/>)
                }
            </>
        </div>
    );
}

export default FourColCompo;
