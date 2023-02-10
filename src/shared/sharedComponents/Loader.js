import React from "react";
import './loaderStyle.css';
import crafsmenLogo from '../../assets/img/crafsmen-logo.png'

export default function Loader() {

    return (
        <div className="loader-container">
            <div className="loader mb-3"></div>
            <img src={crafsmenLogo} className={'loader-logo'}/>
        </div>
    );
}