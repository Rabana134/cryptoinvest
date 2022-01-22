import { Link } from 'react-router-dom';

export const MenuItem = [
    {
        title: <Link to={"/"}><b style={{color:"white"}}>Home</b></Link> ,
        cName: 'nav-links'
    },

    {
        title: <b>Contact Us</b>,
        cName: 'nav-links'
    },

    {
        title: <b>About Us</b>,
        cName: 'nav-links-mobile'
    }
]