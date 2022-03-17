import "./Navbar.css";
import {
  Link
} from "react-router-dom";

const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  }
  //   add the other link as well
];

export const Navbar = () => {
  return ( <div className="navbar">
                <h2 className="logo">Site_Logo</h2>
                <div>
                   <Link className="Link" to="/"> 
                       <h3 id="header-link-home" >Home</h3>
                   </Link>
                   <Link  className="Link" to="/about">
                      <h3 id="header-link-about" >About</h3>
                   </Link>
                    
                   <Link className="Link" to="/movies">
                       <h3 id="header-link-movies" >Movie</h3>
                   </Link>
                </div>
           </div> )
};






https://github.com/devjudge/test-2206-q-788b0479341c434c8b46c5f543a9bb6e-134327-express4.17.1-in-docker-2