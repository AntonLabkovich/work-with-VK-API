import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


const Menu = (props) => {
    return (
        <nav className={props.dNone}>
            <ul className={props.menuHeader}>
                <li><Link to="/dist">Главная</Link></li>
                <li><Link to="/dist/infoSharing">Информация о sharing</Link></li>
                <li><Link to="/dist/newsSharing">Новости о sharing</Link></li>
            </ul>
        </nav>
    )
};

export default Menu
