import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import {Switch} from 'react-router-dom';

export default function App(){
  return(
    <Router> 
      <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link to='/' className='navbar-brand'>React CRUD App</Link>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to= '/' className='nav-link'>Home</Link>
             </li>
             <li>
             <Link to = '/create' className='nav-link'>Create</Link>
             </li>
             <li>
              <Link to = '/index' className='nav-link'>Index</Link>
             </li>
             
        </ul>
      </div>

      </nav>
      <br/>
      <h1> Welcome to REACT CRUD BY RUWI</h1>
   
    </div>
    </Router>
    
  );
}