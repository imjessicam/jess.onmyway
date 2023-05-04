import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import '../Css/FooterStyle.css';

const Footer = () => {
return(  
    <>
    <footer>
        <div className = "container container-flex">
            <div className = "icons">
                <InstagramIcon className='icon'/>
            </div> 
            <div className="line">
                <hr/>
                <hr/>
            </div>
            <div className="copyright">
                <p> &copy; All rights reserved </p>
                <p> Made with LOVE by Jess </p>
            </div>
        </div>
    </footer>
    </> 
)

}

export default Footer;