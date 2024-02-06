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
            {/* <label className="label">{props.compoLabOne}</label>
            <input className="input" type="text" value="1" />
            <label className="label">{props.compoLabThree}</label>
            <input className="input" type="text" value="3" />
            <label className="label">{props.compoLabFour}</label>
            <input className="input" type="text" value="4" />
            <label className="label">{props.compoLabFive}</label>
            <input className="input" type="text" value="5" /> */}
        </div>
    );
}

export default FourColCompo;
