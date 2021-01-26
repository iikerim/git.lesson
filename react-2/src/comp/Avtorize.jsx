import React from 'react';
import './Avtorize.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Avtorize() {
  return (
    <div className="Avtorize">
    <p/><input type="text" placeholder="Логин" size="50" /><p/>
                <input type="password" placeholder="Құпия сөз" size="50"/><p/>
                <div><Button variant="success" size='lg'>Кіру</Button></div><p/>
    </div>
  );
}

export default Avtorize;
