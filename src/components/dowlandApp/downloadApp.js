import React, {Component, Fragment} from 'react';


import './downloadApp.less';

import googlePlay from '../../../dist/images/googlePlay.svg';
import appStore from '../../../dist/images/appStore.svg';


const DownloadApp = (props) => {
    console.log('переданные айтемы', props);
    return (
        <Fragment>
            {props.itemSharing === undefined ?
                <p>loading</p> :
                props.itemSharing.info.map((item, i) => (
                    <div key={i} className={props.itemSharing.info.length===1?'sliderItem col-12':'sliderItem col-md-12 col-sm-12 col-lg-6'}>
                        <div className={"listLink"}>
                            <a href={item.link} target={'_blank'}><img src={item.src} alt={item.name}
                                                                       className={'imgLogo'}/></a>
                            <div>
                                <div>
                                    <a href={item.googlePlay} target={"_blank"}><img src={"images/googlePlay.svg"}
                                                                                     alt={""}
                                                                                     className={'iconMarket'}/>Google
                                        Play</a>
                                </div>
                                <div>
                                    <a href={item.appStore} target={'showDownload'}><img src={"images/appStore.svg"} alt={""}
                                                                                   className={'iconMarket'}/>App
                                        Store</a>
                                </div>
                            </div>
                        </div>
                        <p>{item.text}</p>
                    </div>
                ))}
        </Fragment>
    )
};

export default DownloadApp

