import React from "react";
import "./technicaldetails.css";
import FourColCompo from "./fourColCompo";

const TechnicalDetails = () => {
    return (
        <form>
            <fieldset>
                <legend>Technical Details</legend>
                <FourColCompo
                    compoOne={"select"} compoLabOne={"PL Rout"}
                    compoTwo={"select"} compoLabTwo={"Panel Tichness Rout"}
                    compoThree={"select"} compoLabThree={"Base CU"}
                    compoFour={"select"} compoLabFour={"Solder Dam"}
                    compoFive={"input"} compoLabFive={"Coper Area Top"} />
                <FourColCompo
                    compoOne={"select"} compoLabOne={"Blind"}
                    compoTwo={"select"} compoLabTwo={"PCB Layers"}
                    compoThree={"select"} compoLabThree={"Finish CU"}
                    compoFour={"select"} compoLabFour={"Date Code"}
                    compoFive={"input"} compoLabFive={"Copper Area Bottom"} />
                <FourColCompo
                    compoOne={"select"} compoLabOne={"SM Color Rout"}
                    compoTwo={"select"} compoLabTwo={"Edge Plating"}
                    compoThree={"select"} compoLabThree={"Mfg Logo & Place"}
                    compoFour={"select"} compoLabFour={"Hard Gold Tabs Rout"}
                    compoFive={"select"} compoLabFive={"Laminate Type"} />
                <FourColCompo
                    compoOne={"select"} compoLabOne={"LP Color"}
                    compoTwo={"select"} compoLabTwo={"VIa Fill"}
                    compoThree={"select"} compoLabThree={"Impedence Control"}
                    compoFour={"select"} compoLabFour={"70Run"}
                    compoFive={"select"} compoLabFive={"Laminate Make"} />
                <FourColCompo
                    compoOne={"select"} compoLabOne={"TG"}
                    compoTwo={"select"} compoLabTwo={"Class"}
                    compoThree={"input"} compoLabThree={"Peelable Rout"}
                    compoFour={"select"} compoLabFour={"Min Trackwidth"}
                    compoFive={"select"} compoLabFive={"Surface Finish"} />
                <FourColCompo
                    compoOne={"select"} compoLabOne={"CSK"}
                    compoTwo={"select"} compoLabTwo={"Vscore"}
                    compoThree={"select"} compoLabThree={"Carbon"}
                    compoFour={"input"} compoLabFour={"Min Spacing"}
                    compoFive={"select"} compoLabFive={"UL Logo & Place"} />
               
                <div style={{marginTop:"25px"}} className="container">
                <label>Remarks:</label>
                    <textarea
                        rows={5} // adjust as needed
                        cols={115} // adjust as needed
                        style={{ resize: 'none' }} // to disable resizing
                    />
                </div>
            </fieldset>
        </form>
    );
}

export default TechnicalDetails;

/* const TechnicalDetails = () => {
    

    return (
        <form>
            <fieldset>
                <legend>Technical Details</legend>
                <div className="container">
                    <label className="label">label 1</label>
                    <input className="input" type="text" />
                    <label className="label">label 2</label>
                    <input className="input" type="text" />
                    <label className="label">label 3</label>
                    <input className="input" type="text" />
                    <label className="label">label 4</label>
                    <input className="input" type="text" />
                    <label className="label">label 5</label>
                    <input className="input" type="text" />
                </div>
                <div className="container">
                    <label className="label">label 1</label>
                    <input className="input" type="text" />
                    <label className="label">label 2</label>
                    <input className="input" type="text" />
                    <label className="label">label 3</label>
                    <input className="input" type="text" />
                    <label className="label">label 4</label>
                    <input className="input" type="text" />
                    <label className="label">label 5</label>
                    <input className="input" type="text" />
                </div>

            </fieldset>
        </form>
    );
}; 

export default TechnicalDetails;*/

