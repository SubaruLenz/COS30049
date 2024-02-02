import React, { useState } from 'react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import './assetstyles.css'; // Importing the assetstyle.css file

function Assets() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCurrency] = useState('');
    const [selectedAuthor, setSelectedAccount] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [balance, setBalance] = useState(0);


    const assets = [];

    const filteredAssets = assets.filter(asset => {
        return (
            asset.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory === '' || asset.category === selectedCategory)
        );
    });

    const handleTransfer = () => {
        console.log("Transfer amount:", amount);
        console.log("Transfer message:", message);
    };

    return (
        <>
            <div className='asset-container'>
                <Grid container spacing={0} alignItems="center" justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <div className="assetsPage-title">
                            <h2>
                                Transfer
                                <Divider />
                                <Typography
                                    sx={{ mt: 0.2, ml: 1 }}
                                    color="text.secondary"
                                    display="block"
                                    variant="caption"
                                >
                                </Typography>
                            </h2>
                        </div>
                    </Grid>
                </Grid>
                <Paper sx={{padding: '2rem', backgroundColor: '#222', marginBottom: '0.5rem' }}>
                    <Typography variant="h6" className="white-text-center">Balance: ${balance}</Typography>
                </Paper>

                <Paper sx={{ padding: '2rem', backgroundColor: '#222', marginBottom: '2rem' }} className="fill-out-area">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <InputLabel className="white-text-center">Currency</InputLabel>
                                <Select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCurrency(e.target.value)}
                                    className="white-text-center"
                                    style={{ backgroundColor: '#999', color: '#fff' }}
                                >
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value="Ethereum">Ethereum</MenuItem>
                                    <MenuItem value="Bitcoin">Bitcoin</MenuItem>
                                    <MenuItem value="Dollar">Dollar</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <InputLabel className="white-text-center">Account</InputLabel>
                                <Select
                                    value={selectedAuthor}
                                    onChange={(e) => setSelectedAccount(e.target.value)}
                                    className="white-text-center"
                                    style={{ backgroundColor: '#999', color: '#fff' }}
                                >
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value="Phan Vu">PHAN VU</MenuItem>
                                    <MenuItem value="Phong Pham">PHAM DO TIEN PHONG</MenuItem>
                                    <MenuItem value="Nguyen Kien">NGUYEN TRUNG KIEN </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Amount"
                                type="number"
                                fullWidth
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                InputLabelProps={{ className: "white-text-center" }}
                                InputProps={{
                                    className: "white-text-center",
                                    style: { backgroundColor: '#999', color: '#fff' }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Message"
                                fullWidth
                                multiline
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                InputLabelProps={{ className: "white-text-center" }}
                                InputProps={{
                                    className: "white-text-center",
                                    style: { backgroundColor: '#999', color: '#fff' }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center">
                                <Button variant="contained" color="primary" onClick={handleTransfer}>
                                Transfer
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </>
    );
}

export default Assets;
