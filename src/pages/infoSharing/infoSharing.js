import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Preloader from '../../components/prelodaer/prelodear';
import SharingButton from '../../components/sharingButton/sharingButton';
import DownloadApp from '../../components/dowlandApp/downloadApp';


import './infoSharing.less';


export default class InfoSharing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            oneItemData:[]
        }
    }

    render() {
        console.log('state render',this.props);
        return (
            <div className={'infoSharing'}>
                <SharingButton showSharing={this.props.handleClick}/>
                <div className={'containSlider row'}>
                    <div className={'slider row'}>
                        {this.props.vehicle===''?
                            <p>Здесь вы найдете информацию о шерингах</p>:
                            this.state.oneItemData.map((item,i) => (
                            <Fragment key={i}>
                                <DownloadApp itemSharing={item}/>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        fetch('/data/dataSharing.json')
            .then(data => data.json())
            .then(items => {
                const oneData = items.filter((item)=>(
                    item.vehicle===this.props.vehicle
                ));
                this.setState({
                    data: items,
                    oneItemData:oneData
                })
            });
    }
};



