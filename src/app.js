import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './reset.less';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import MainPage from './pages/mainPage/mainPage';
import InfoSharing from './pages/infoSharing/infoSharing';
import NewsSharing from './pages/newsSharing/newsSharing';
import './app.less';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicle: ''
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className={"container"}>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={()=><MainPage handleClick={this.handleClick} vehicle={this.state.vehicle}/>}/>
                        <Route exact path="/dist" component={()=><MainPage handleClick={this.handleClick} vehicle={this.state.vehicle}/>}/>
                        <Route exact path="/dist/infoSharing" component={()=><InfoSharing handleClick={this.handleClick} vehicle={this.state.vehicle}/>}/>
                        <Route exact path="/dist/newsSharing" component={()=><NewsSharing handleClick={this.handleClick} vehicle={this.state.vehicle}/>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }

    handleClick = (e) => {
        console.log(e.target.value);
        this.setState({
            vehicle: e.target.value
        })
    };

    componentDidMount() {

    }

}

