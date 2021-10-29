 import './home.css';
 import React from 'react'
import FeaturedInfo from '../../featureinfo/FeaturedInfo';
import Chart from '../../chart/Chart';
import { userData } from '../../../data';

 
 
 export default function HomePage() {
     return (
         <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytic"grid dataKey="Active User" />
            <div className="homeWigets">
                 
            </div>
         </div>
     )
 }
 