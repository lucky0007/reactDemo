import React, { useState } from 'react';
import { Avatar, Typography, Grid, Button, TextField } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Box from '@material-ui/core/Box';
import fire from '../auth/FireBaseAuth';


const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  

    const paperStyle = { padding: 10, width: 320, margin: "0px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
  

    const handleSubmit = (event) => {
        event.preventDefault();
        //Firebase
        fire.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log (email, password)
            // 
          alert ("user created");
        }).catch(() => {
            alert("Error Occured or user not created");
        })
    }

    return (
        
        <Grid>
             
            <Grid align='center' style={paperStyle}>
                <Avatar style={avatarStyle}><AddCircleIcon /></Avatar>
                <h2>Signup</h2>
                <Typography variant='caption'>Please fill this form to create an account!</Typography>

            </Grid>
            <form onSubmit={handleSubmit}>
           
                {/* <TextField label='Name' placeholder='Enter your name' fullWidth /> */}
                <TextField label='Email' onChange={(ev)=>setEmail(ev.target.value)} placeholder='Enter your email' fullWidth />
                {/* <TextField label='Phone no' onChange={(ev)=>setPhone(ev.target.value)} placeholder='Enter your phone no' fullWidth /> */}
                <TextField label='Password' onChange={(ev)=> setPassword(ev.target.value)} placeholder='Enter your password' type='password' fullWidth />
                {/* <TextField label='Confirm Password' placeholder='Enter your confirm password' type='password' fullWidth /> */}
                <Box mt={2}>
                    <Button type="Submit" variant='contained' color='primary' mt="2rem" fullWidth>Signup</Button>
                </Box>
          
                </form>
        </Grid>
       
    )
}

export default Signup;