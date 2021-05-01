import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Root from "./Containers/Root";
import "antd/dist/antd.css"; 
import firebase from './Firebase/firebaseconfig'

function App() {
  return (
    <BrowserRouter>
      <Root/>
    </BrowserRouter>
  );
}

export default App;
