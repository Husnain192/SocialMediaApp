import React from "react";
import Logo from "../../img/logo.png";
import './LogoSearch.css'
import { UilSearch } from '@iconscout/react-unicons'

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} style={{cursor: "pointer"}} alt="" />
      <div className="Search">
          <input type="text" placeholder="#Explore"/>
          <div className="s-icon">
                <UilSearch style={{cursor: "pointer"}}/>
          </div>
      </div>
    </div>
  );
};

export default LogoSearch;
