import React from 'react';
import Gl1 from './comp/Gl1';
import Avtorize from './comp/Avtorize';
import Reg from './comp/Reg'
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Gl2 from './comp/Gl2';
import Gl3 from './comp/Gl3';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Gl1/>
     <div className="content">
       <Gl2/>
      <Route path='/Kiru' component={Avtorize}/>
      <Route path='/Tirkelu' component={Reg}/>
      
     
     </div>

     <div className="content1">
     <Gl3/>
     </div>


    </div>
    </BrowserRouter>
  );
}

export default App;
