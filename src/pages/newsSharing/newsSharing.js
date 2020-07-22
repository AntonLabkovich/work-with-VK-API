import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import fetchJsonp from 'fetch-jsonp'

import SharingButton from '../../components/sharingButton/sharingButton';
import ButtonSharingOne from '../../components/buttonsSharingOne/buttonsSharingOne';


import './newsSharing.less';


class InfoSharing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            flagWidthScreen:false,
            flagFullDiscription:false,
            idItem:''
        }
    }

    // https://api.vk.com/method/wall.get?owner_id=-183561236&count=10&v=5.101&access_token=9837b7379837b7379837b737d9985a9378998379837b737c5a77988c91667f41fa7dea1
    render() {
        console.log('перерендер');
        return (
            <div className={'newsSharing'}>
                <SharingButton showSharing={this.props.handleClick}/>
                <ButtonSharingOne showSharingOne={this.handleClick} value={this.props.vehicle}/>
                <div className={'newsItemsSharing'}>
                    {this.state.data.length !== 0 ? this.state.data.map((item, i) => (
                        <div className={"oneItemNews"} key={i}>
                            {item.attachments.map((item, i) => (
                                <div key={i} className={'photo'}>
                                    {item.type === 'photo' ?
                                        <img src={item.photo.photo_604} alt=""/> : item.type === "link" ?
                                            <div className={'linkAndPhoto'}>
                                                {item.link.photo.photo_604 !== 'false' ?
                                                    <img src={item.link.photo.photo_604} alt=""/> : null}
                                                <p>{item.link.description}</p>
                                                <a href={item.link.url} target="_blank">Подробнее</a>
                                            </div> : null}
                                </div>))}

                            {this.state.flagWidthScreen?
                                <div><p className={this.state.flagFullDiscription&&item.id===(+this.state.idItem)?'fulldiscription':'discription'}>{item.text}</p>
                                    <a className={'linkFullDiscription'}
                                       id={item.id}
                                       onClick={()=>{this.handleClickFullDiscription(event,item.id)}}>
                                        {this.state.flagFullDiscription&&item.id===(+this.state.idItem)?'Скрыть':'Показать полность'}</a>
                                </div>:
                                <p>{item.text}</p>}
                        </div>
                    )) : null}
                </div>
            </div>
        )
    }
    handleClickFullDiscription = (e,id) => {
       console.log('asdfasdfasdf',e.target.id);
       console.log(id);
       this.setState({
           flagFullDiscription: !this.state.flagFullDiscription,
           idItem:e.target.id
       })
    };
    // https://oauth.vk.com/blank.html#access_token=6d3c470100b53b0ff31ee0512841a8a1692a42cdd7c00c508a5d594f06df03fda9632e257891489b9db10&expires_in=86400&user_id=563730311
    handleClick = (e) => {
        const filterItem = e.target.value;
        console.log(e.target.value);
        this.props.store !== undefined ?
            this.setState({
                data: this.props.store[filterItem].items
            })
            : null
    };

    componentWillUnmount(){
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize = () =>{
      if(window.innerWidth<=768){
          this.setState({
              flagWidthScreen:true
          })
      }else{
          this.setState({
              flagWidthScreen:false
          })
      }
    };

    componentDidMount() {
        fetchJsonp('https://api.vk.com/method/wall.get?owner_id=-183561236&count=10&v=5.52&access_token=0ef8fc4c0ef8fc4c0ef8fc4c2e0e95d9bf00ef80ef8fc4c5369c64d32065e6b0939cbde', {method: 'GET'})
            .then((response) => (response.json()))
            .then((data) => {
                console.log(data.response);
                this.props.dispatch({
                    type: 'ADD_ITEM_KOLOBIKE',
                    items: data.response
                })
            });
        fetchJsonp('https://api.vk.com/method/wall.get?owner_id=-168547154&count=10&v=5.52&access_token=0ef8fc4c0ef8fc4c0ef8fc4c2e0e95d9bf00ef80ef8fc4c5369c64d32065e6b0939cbde', {method: 'GET'})
            .then((response) => (response.json()))
            .then((data) => {
                console.log(data.response);
                this.props.dispatch({
                    type: 'ADD_ITEM_ELEVEN',
                    items: data.response
                })
            });
        fetchJsonp('https://api.vk.com/method/wall.get?owner_id=-165085670&count=10&v=5.52&access_token=0ef8fc4c0ef8fc4c0ef8fc4c2e0e95d9bf00ef80ef8fc4c5369c64d32065e6b0939cbde', {method: 'GET'})
            .then((response) => (response.json()))
            .then((data) => {
                console.log(data.response);
                this.props.dispatch({
                    type: 'ADD_ITEM_VEZUHA',
                    items: data.response
                })
            });
        fetchJsonp('https://api.vk.com/method/wall.get?owner_id=-128367411&count=10&v=5.52&access_token=0ef8fc4c0ef8fc4c0ef8fc4c2e0e95d9bf00ef80ef8fc4c5369c64d32065e6b0939cbde', {method: 'GET'})
            .then((response) => (response.json()))
            .then((data) => {
                console.log(data.response);
                this.props.dispatch({
                    type: 'ADD_ITEM_ANYTIME',
                    items: data.response
                })
            });
        window.addEventListener("resize", this.handleResize);
    }
}

const mapStateFromProps = (store) => {
    return {
        store: store
    }
};


export default connect(mapStateFromProps)(InfoSharing)

