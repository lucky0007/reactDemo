import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from '../Components/login';
import Signup from '../Components/signup';
import fire from '../auth/FireBaseAuth';

const ContainerLoginSignup = () => {

    const [userInfo, setUserInfo] = useState(" ")

    function checkStatus() {

        fire.auth().onAuthStateChanged(
            (user) => {
                if (user) {
                    setUserInfo(user.email);
                    
                }
            }
        )
    }

    const paperStyle = { width: 400, height: 600, margin: "20px auto" }

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (

            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}>
                <h2> {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}</h2>
            </div>

        );
    }

    const [value, setvalue] = useState(0);

    const handleChange = (event, newValue) => {
        setvalue(newValue);
    }

    return (
        <div>
            <h5 style={{ textAlign: "center", padding: "20px" }}>{checkStatus()} {userInfo ? userInfo : " "}</h5>
            <Paper elevation={20} style={paperStyle}>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example">
                    <Tab label="Log In" />

                    <Tab label="Signup" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Login />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Signup />
                </TabPanel>
            </Paper>
        </div>
    )

}

export default ContainerLoginSignup;