import React from 'react'
import  './sidebar.css'
import {AlignVerticalCenterTwoTone, Chat, Email, EmailOutlined, Feedback, LineStyle, Message, MessageOutlined, Money, Payment, People, ProductionQuantityLimits, Report, Timeline, TrendingUp, WorkOffOutlined, WorkOutline} from '@mui/icons-material'
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="sidebarTitle">
                        <h3>Dashboard</h3>
                        <ul className="sidebarList">                            
                            <li className="sidebarListItem active" >
                                <LineStyle  className="siidebarIcon"/>
                                Home
                            </li >
                            <li className="sidebarListItem" >
                                <Timeline />
                                Analytic
                            </li>
                            <li className="sidebarListItem" >
                                <TrendingUp />
                                Sales
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">
                        <h3>Quick Menu</h3>
                        <ul className="sidebarList">                            
                            <li className="sidebarListItem active" >
                                <People  className="siidebarIcon"/>
                                Users
                            </li >
                            <li className="sidebarListItem" >
                                <ProductionQuantityLimits />
                                Products
                            </li>
                            <li className="sidebarListItem" >
                                <Money />
                                Transaction
                            </li>
                            <li className="sidebarListItem" >
                                <TrendingUp />
                                Report
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">
                        <h3>Notification</h3>
                        <ul className="sidebarList">                            
                            <li className="sidebarListItem active" >
                                <Email  className="siidebarIcon"/>
                                Email
                            </li >
                            <li className="sidebarListItem" >
                                <Feedback />
                                Feedback
                            </li>
                            <li className="sidebarListItem" >
                                <Chat />
                                Messages
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">
                        <h3>Staff</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem" >
                                <WorkOutline />
                                Manage
                            </li>
                            <li className="sidebarListItem">
                                <Timeline />
                                Analytic
                            </li>
                            <li className="sidebarListItem" >
                                <Report />
                                Report
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
