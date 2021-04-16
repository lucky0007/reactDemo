import "./navbar.css";
import fire from "../../auth/FireBaseAuth";
import { useState } from 'react';



const Navbar = ({ sidebarOpen, openSidebar }) => {

    const [userEmailID, setUserEmail]= useState(" ")

    const userEmail = ()=>{
        fire.auth().onAuthStateChanged(user=>{
        
            if (user){
                setUserEmail(user.email);
            }
        
            else{
                console.log("no email id found");
            }
        })
        
        }
 

    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div className="navbar__left">
                <a className="active_link" href="#">
               {userEmail()} {userEmailID ? userEmailID : " "}
        </a>
            </div>
            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </a>
                <a href="#">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                </a>
                <a href="#!">
                    {/* <img width="30" src={avatar} alt="avatar" /> */}
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
