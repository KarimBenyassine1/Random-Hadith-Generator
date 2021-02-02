import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from './Navbar';
import Card from "./Card"
import axios from "axios"

const App=()=>{

  const [hadith,setHadith] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const KEY = process.env.REACT_APP_SECRET_KEY

  useEffect(() => {
    setLoading(false)
    axios.get("/random",{
        headers: {
          'x-api-key': KEY
        }
      }).then(res =>{
        console.log(res.data)
        setHadith(res.data.hadith[0])
      }).catch(e =>{
        setError(true)
        console.log(e)
      })
  }, []);
  
  const newHadith = async () =>{
    setLoading(true)
    const response = await axios.get("/random",{
      headers: {
        'x-api-key': KEY
      }
    }).catch(e =>{
      setError(true)
      console.log(e)
    })
    
    console.log(response.data)
    setHadith(response.data.hadith[0])
    setLoading(false)
  }

  return (
    <div>
      <Navbar />
      <div className= "flexbox-container">
        <Card hadith = {hadith} error = {error} loading= {loading}/>
        <button onClick={newHadith} className="btn" type="submit">New Hadith</button>
      </div>
    </div>
  );
}

export default App;
