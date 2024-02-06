import React, { useState } from 'react';
import OrderDetailsFiveCompo from "./orderDetailsFiveCompo";
import "./style.css";
import { toast } from 'react-toastify';
import DropDownField from './DropDownField';

const OrderDetails = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        toast.success('Order Created Successful!', {position: "bottom-right"});
    };
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Order Details</legend>
                <div className="order-container">
                    <label style={{ width: "42%", marginTop: "10px" }}>Customer</label>
                    <input style={{ width: "6%", marginTop: "10px" }} type="text" />
                    <DropDownField style={{ width: "90%", marginTop: "10px",padding:"6px",border:'1px solid #ccc' }}/>
                    <label style={{ width: "60%", marginLeft: "5rem" }}>Panel Number</label>
                    <input style={{ width: "40%", marginTop: "10px" }} type="text" />
                    <div style={{ backgroundColor: "white" }} className="order-salesOrderBtn"></div>
                </div>
                <div className="order-container">
                    <label style={{ width: "42%", marginTop: "10px" }}>Part Number</label>
                    <input style={{ width: "100%", marginTop: "10px" }} type="file" />
                    <label style={{ width: "60%", marginTop: "10px", marginLeft: "5rem" }}>Purchase Order</label>
                    <input style={{ width: "40%" }} type="text" />
                    <button className="order-salesOrderBtn" type="submit" >Create Order</button>
                </div>

                <div className="order-container">
                    <label style={{ width: "42%", marginTop: "10px" }}>Dimensions (mm)</label>
                    <input style={{ width: "10%", marginTop: "10px" }} type="number" />
                    <label style={{ width: "2%", marginTop: "10px", marginLeft: "10px" }}>x</label>
                    <input style={{ width: "10%", marginTop: "10px", marginLeft: "10px" }} type="number" />

                    <label style={{ width: "32%", marginTop: "10px", marginLeft: "5rem" }}>Size Sq. Cm</label>
                    <input style={{ width: "15%", marginTop: "10px" }} type="number" />

                    <label style={{ width: "60%", marginTop: "10px", marginLeft: "5rem" }}>Setup Charges</label>
                    <input style={{ width: "40%" }} type="number" />
                    <button className="order-salesOrderBtn" type="button" >Update Order</button>
                </div>

                <OrderDetailsFiveCompo
                    compOneType={"date"} compOne={"ORDER DATE"}
                    compTwoType={"number"} compTwo={"COST PER Sq. Cm."}
                    compThreeType={"number"} compThree={"Total PCB Cost"}
                    btnText={"Upload File"}
                />
                <OrderDetailsFiveCompo
                    compOneType={"select"} compOne={"Delivery Terms"}
                    compTwoType={"number"} compTwo={"PCB Quantity"}
                    compThreeType={"number"} compThree={"Cost PER PCB"}
                    btnText={"Change Date"} />
                <OrderDetailsFiveCompo
                    compOneType={"textfield"} compOne={"Delivery DATE"}
                    compTwoType={"number"}  compTwo={"Cost PER PCB"}
                    compThreeType={"number"} compThree={"Sub Total Amout"}
                    btnText={"Perf Invoice"} />
                <OrderDetailsFiveCompo
                    compOneType={"number"} compOne={"Order Number"}
                    compTwoType={"number"}  compTwo={"Order Size (Sq. Mtr.)"}
                    compThreeType={"number"} compThree={"Tax (Gst 18% )"}
                    btnText={"Reset"} />
                <OrderDetailsFiveCompo
                    compOneType={"number"} compOne={"Order Status"}
                    compTwoType={"number"}  compTwo={"Old Panel Number"}
                    compThreeType={"number"} compThree={"Total Amount"} />
                <OrderDetailsFiveCompo
                    compOneType={"number"} compOne={"Invoice"}
                    compTwoType={"number"}  compTwo={"Perform Invoice #"} />

            </fieldset>
        </form>
    )
}

export default OrderDetails
