import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from './Navbar';
import Card from "./Card"
import axios from "axios"

const App=()=>{
  /*
  const [hadith,setHadith] = useState({});
  const key = process.env.SECRET_KEY

  useEffect(() => {
    const response = axios.get()
  }, []); 

  */
  return (
    <div>
      <Navbar />
      <div className= "flexbox-container">
        <Card />
      </div>
    </div>
  );
}

export default App;
