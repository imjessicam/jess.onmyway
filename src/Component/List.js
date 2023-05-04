import React from "react";
import logo from '../Images/logo.png';
import { NavLink } from "react-router-dom";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../Css/ListStyle.css'


const List = () => {
return( 
    <>
<header>
    <div className="container container-flex">
        <div className="logoContainer">
            <img src={logo} alt="logo" className="logo"/>
        </div>
        <nav>
            <div className="list">
                <NavLink to="/" className='listItem'> Home </NavLink>
                <NavLink to="/about" className= 'listItem'> About </NavLink>
                <NavLink to="/destinations" className= 'listItem'> Destinations </NavLink>
                <NavLink to="/contact" className= 'listItem'> Contact </NavLink>
            </div>
        </nav>
        <div className="icons">
            <InstagramIcon className="icon"/>
            <TravelExploreIcon className="icon"/>
        </div>        
    </div>
</header>
    </>
)
}

export default List;