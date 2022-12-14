import React , {useState,useEffect} from 'react';
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () =>{
      window.removeEventListener("scroll",[]);
    };
  })


  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img 
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
        alt="" />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/551px-Netflix_2015_N_logo.svg.png"
          alt="" className="nav__avatar" />
       
    </div>
  )
}

export default Nav
