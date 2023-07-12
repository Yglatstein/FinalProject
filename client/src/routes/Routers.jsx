import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from "../views/Home";
import Login from '../views/Login';
import Register from '../views/Register';

const Routers = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Navigate to ='/home'/>}/>
            <Route path='/home' element = {<Home />}/>
            <Route path='/login' element = {<Login />}/>
            <Route path='/register' element = {<Register />}/>
          </Routes>
        </BrowserRouter>
      );
  };
  
  export default Routers;