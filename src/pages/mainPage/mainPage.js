import React, {Component, Fragment} from 'react';
import Vehicle from '../../components/imageVehicle/imageVehicle';
import SharingButton from '../../components/sharingButton/sharingButton';


import './mainPage.less';


const MainPage = (props) => {
    return (
        <div>
            <SharingButton showSharing={props.handleClick}/>
            <div className={'MainPage'}>
                <Vehicle vehicle={props.vehicle}/>
                <div className={'bgEarth'}>
                </div>
            </div>
        </div>
    )
};

 export default MainPage

