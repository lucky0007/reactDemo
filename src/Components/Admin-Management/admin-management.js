import React, { useState } from 'react';
import { render } from 'react-dom';
import { withRouter } from "react-router-dom";
import axios from "axios";

// const AdminManagement = () => {
//     return (

//         <>
//             <h1>Dashboard</h1>
//             <p>What is Lorem Ipsum?
// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//         </>
//     )

// }

// export default AdminManagement;

// export default withRouter(AdminManagement);


function AdminManagement() {
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
        <h1>ApI call</h1>
        {joke}
        <button onClick={getJoke}>click</button>
      </div>
    )
  }
  
  export default withRouter(AdminManagement);