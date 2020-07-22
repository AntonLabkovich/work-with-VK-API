import React from "react";
import './vehicle.less'

import byc from '../../images/bicycle.png';
import kickScooter from '../../images/kickScooter.png';
import car from '../../images/car.png';


const Vehicle = (props) => {
    console.log(props);
    return (
        <div className={'vehicle'}>
            {props.vehicle==='bicycle'?<img src={byc} alt="" className={'bike'}/>:props.vehicle==='kickScooter'?<img src={kickScooter} alt=""/>:<img src={car} alt=""/>}
        </div>
    )
};

export default Vehicle
