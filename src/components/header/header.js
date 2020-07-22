import React, {Component} from "react";

//import style
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.less';

//import images
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

//import component
import Menu from '../menu/menu';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false
        };
    }

    render() {
        return (
            <div className={"header"}>
                <Menu menuHeader={"menuHeader"} dNone={this.state.isOpen?"showMenu":"d-md-flex d-none"}/>
                <FontAwesomeIcon icon={faBars} className={"hamburg d-md-none d-block"} onClick={this.handleClick}/>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen:!this.state.isOpen
        });
    }
};




