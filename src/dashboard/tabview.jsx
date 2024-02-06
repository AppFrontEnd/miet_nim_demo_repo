import React, { useState } from 'react';
import SalesOrder from './salesorder';
import "./style.css";

const TabPanel = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="tab-panel">
      <div className="tab-buttons">
        <button className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabChange(1)}>Sales Order</button>
        <button className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabChange(2)}>Search Order</button>
        <button className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabChange(3)}>Delivery Sheets</button>
        <button className={activeTab === 4 ? 'active' : ''} onClick={() => handleTabChange(4)}>In Producton</button>
        <button className={activeTab === 5 ? 'active' : ''} onClick={() => handleTabChange(5)}>Invoice</button>
      </div>

      <div /* className="tab-content" */>
        {activeTab === 1 && <SalesOrder/>}
        {activeTab === 2 && <div>Content for Tab 2</div>}
        {activeTab === 3 && <div>Content for Tab 3</div>}
        {activeTab === 4 && <div>Content for Tab 4</div>}
        {activeTab === 5 && <div>Content for Tab 5</div>}
      </div>
    </div>
  );
};

export default TabPanel;
