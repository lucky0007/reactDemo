import React, { useState } from 'react';
import './main.css';
import axios from "axios";
import { withRouter } from "react-router-dom";



function Main() {
    const [joke, setJoke] = useState(" ");
  
    const getJoke = () => {
      axios.get("https://official-joke-api.appspot.com/random_joke")
        .then((res) => {
          console.log(res.data);
          setJoke(`${res.data.setup}...${res.data.punchline}`);
        });
    }
    return (
      <div className="App">
        <h1>Main js</h1>
        {joke}
        <button onClick={getJoke}>click</button>
      </div>
    )
  }
  
  export default withRouter(Main);