import { useEffect, useState } from 'react';
import { hydrateRoot } from 'react-dom/client';
import './App.css';
function App() {
  let result="";
  const [url,SetUrl]=useState("");
  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:8080/cors', {mode:'cors'});
      const data = await response.json();
      console.log(data["http:"])
      SetUrl(data["http:"]);
      return data;
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    result= makeAPICall()
    .then(function(result){
      // console.log(result["http:"]);
    })
    
  }, [])
  
  return (
    <div className="App">
      <h1>React Cors Guide</h1>
      <h2>{url}</h2>
      <img className="img_" src ={url}/>
    </div>
  );
}
export default App;
