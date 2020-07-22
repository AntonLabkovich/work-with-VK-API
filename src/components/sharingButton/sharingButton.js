import React from "react";



const SharingButton = (props) => {
    return (
        <div className={'groupButton'}>
            <button value={'bicycle'} onClick={props.showSharing}>Велосипед Sharing</button>
            <button value={'kickScooter'} onClick={props.showSharing}>Самокат Sharing</button>
            <button value={'car'} onClick={props.showSharing}>Машина Sharing</button>
        </div>
    )
};

export default SharingButton
