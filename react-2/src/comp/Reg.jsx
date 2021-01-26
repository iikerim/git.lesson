import React from 'react';
import './Reg.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Reg() {
  return (
    <div className="Reg">
               <p/><div><input type="text" placeholder="Аты" size="50" /></div><p/>
               <div><input type="text" placeholder="Тегі" size="50"/></div><p/>
               <div><input type="email" placeholder="E-mail" size="50" /></div><p/>
               <input type="text" placeholder="Логин" size="50" /><p/>
                <input type="password" placeholder="Құпия сөз" size="50"/><p/>
                <input type="password" placeholder="Құпия сөзді қайта енгізіңіз" size="50"/><p/>
               <div><input type="text" placeholder="Телефон нөмері" size="50"/></div><p/>
               <div><Button variant="success" size='lg'>Тіркелу</Button></div><p/>
    </div>
  );
}

export default Reg;
