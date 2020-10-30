import React, { useEffect, useState } from 'react'
import "./Navbar.css"

function Navbar() {

    const[show,handleShow]  =useState(false);

    useEffect(() => {
        window.addEventListener("scroll" , () => {
            if(window.scrollY >100)
               handleShow(true);
            
               else
                  handleShow(false);
        });

        return() => {
            window.removeEventListener("scroll");
        };

    },[])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" />
        </div>
    )
}

export default Navbar
