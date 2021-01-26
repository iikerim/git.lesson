import React from 'react';
import {NavLink} from 'react-router-dom'
import './Gl2.css';

function Gl2() {
  return (
    <div className="Gl2">
    
    <h4 align='right'><b><NavLink to="/Kiru" activeClassName="activeLink">Кіру</NavLink>
    <NavLink to="/Tirkelu" activeClassName="activeLink"> Тіркелу</NavLink></b></h4><br/>

    <p align='center'><img src="book.jfif"/> <img src="lbook.jfif"/> <img src="ebook.jfif"/></p>
    </div>
  );
}

export default Gl2;
