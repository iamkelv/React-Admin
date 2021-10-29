import React from 'react'
import './topbar.css'
//import profile from '../../../public/assets/img/profile.jpg'
import {Language, NotificationsNone, Settings} from '@mui/icons-material';



export default function Topbar() {
    return (
        <div className="topbar">
         <div className="topbarWrapper">
            <div className="topLeft"> 
            <span className="logo">KelvAdmin</span>
            </div>
            <div className="topRight">
                <div className="topIconsContainer">
                    <NotificationsNone />
                    <span className="topIconbag">2</span>
                </div>
                 <div className="topIconsContainer">
                    <Language />
                    <span className="topIconbag">2</span>
                </div>
                 <div className="topIconsContainer">
                    <Settings />                    
                </div>    
                <div className="topIconsContainer">
                    <img className="profileAvater" src="./assets/img/profile.jpg" alt=""/>
                </div>                
            </div>
         </div> 
        </div>
    )
}
