
import React, { useState } from 'react';
import { TextField, Button, Typography, Link, Grid, Paper } from '@mui/material';
import './form.css';

const Login = ({ switchForm }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            console.log('Username:', username);
            console.log('Password:', password);
        }
    };

    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh' }}>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <Paper elevation={3} sx={{ padding: '2rem', backgroundColor: '#222', color: '#fff' }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Login
                    </Typography>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        InputProps={{
                            className: "white-text-center",
                            style: { backgroundColor: '#999', color: '#fff' } // Specify background and text color
                        }}
                        InputLabelProps={{ style: { color: 'white'} }}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            className: "white-text-center",
                            style: { backgroundColor: '#999', color: '#fff' } // Specify background and text color
                        }}
                        InputLabelProps={{ style: { color: 'white' } }}
                    />
                    <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
                        Login
                    </Button>
                    <Typography variant="body2" align="center" mt={2}>
                        Don't have an account?
                        <Link onClick={() => switchForm('register')}> Register here</Link>
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Login;
