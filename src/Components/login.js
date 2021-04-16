import React, { useState } from 'react';
import { Grid, Avatar, TextField, Button, Typography } from '@material-ui/core';
import LokOutLinedIcon from '@material-ui/icons/LockOutlined';
import Link from '@material-ui/core/Link';
import fire from '../auth/FireBaseAuth';
import Box from '@material-ui/core/Box';
import { BrowserRouter as Router, Redirect, useHistory } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}



const Login = () => {

    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setLoggedIn] = useState(false);

  

    const [errorPopup, setErrorPopup] = React.useState(false);

    let history = useHistory();

    // firebase 
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
        fire.auth().signInWithEmailAndPassword(email, password).then(() => {

           // alert("Login success");
            history.push('/home');

            // isLoggedIn = true;

        }).catch((error) => {
            setErrorPopup(true, { vertical: 'top', horizontal: 'center' });
            const state = { vertical: 'top', horizontal: 'center' };
            setErrorPopup({ open: true, ...state })
        })


    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setErrorPopup(false);
    };

    const paperStyle = { padding: 10, width: 320, margin: "0px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnStyle = { margin: '8px 0' }
    return (
        <Grid>
            <Grid align="center" elevation={10} style={paperStyle}>
                <Avatar style={avatarStyle}><LokOutLinedIcon /></Avatar>
                <h2>Sign In</h2>
            </Grid>
            <form onSubmit={(e) => handleSubmit(e)}>
                <TextField label='Email' placeholder='Enter your email address' type='email' onChange={(ev) => setEmail(ev.target.value)} fullWidth required />
                <TextField label='Password' placeholder='Enter your password' type='password' onChange={(ev) => setPassword(ev.target.value)} fullWidth required />

                <Box mt={2}>
                    <Button type='Submit' color='primary' onClick={handleSubmit} variant='contained' fullWidth>Sign in</Button>
                </Box>
             


            </form>
            <div>

                <Snackbar open={errorPopup} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
                    <Alert onClose={handleClose} severity="error">
                        Please enter email password correctly.
                   </Alert>
                </Snackbar>


            </div>
        </Grid>
    )
}

export default Login;