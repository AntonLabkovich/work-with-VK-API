import React from "react";

import './buttonSharingOne.less'



const buttonSharingOne = (props) => {
    console.log(props);
    return (
        <div className={'groupButton'}>
            {props.value==="bicycle" || props.value==="kickScooter"?<button value={'KolobikeItem'} onClick={props.showSharingOne}>Kolobike</button>:null}
            {props.value==="kickScooter"?<button value={'ElevenItem'} onClick={props.showSharingOne}>Eleven</button>:null}
            {props.value==="car"?<button value={'VezuhaItem'} onClick={props.showSharingOne}>Vezuha</button>:null}
            {props.value==="car"?<button value={'AnytimeItem'} onClick={props.showSharingOne}>Anytime</button>:null}
        </div>
    )
};

export default buttonSharingOne
