import "./assetstyles.css"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AssetDisplay from './assetdisplay.js'
import * as images from '../images/images';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#64646434',
    boxShadow: '0 4px 8px rgba(99, 98, 98, 0.336)',
    color: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

function Assets() {

const [searchTerm, setSearchTerm] = useState('');
const [selectedCategory, setSelectedCategory] = useState('');
const [selectedAuthor, setSelectedAuthor] = useState('');

const assets = [
  
];

const filteredAssets = assets.filter(asset => {
  return (
    asset.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || asset.category === selectedCategory)
  );
});


return (<>
    <div className = 'asset-container'>
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
        <Box sx={{ flexGrow: 1 }} style={{height: 'auto', overflowY: 'auto', paddingTop:'6vh', paddingBottom: '10vh', paddingLeft:32, paddingRight:16, backgroundColor: '#222'}}>
            <Grid container spacing={0} className="items-title">
                <Grid item xs={12} md={12}>
                    <Item className="items-title"><h1>View our available balance: </h1></Item> // Coi chỉnh thuật toán cho cái này nó show cái số dư tài khoản
                </Grid>
            </Grid>
                <div className="search-filter-container">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12} lg ={12} >
                        <input
                            type="text" 
                            placeholder="Ammount..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        </Grid>
                        <Grid item xs={12} md={12} lg ={12} >
                        <input
                            type="text" 
                            placeholder="Message..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        </Grid>
                    
                <Grid container spacing={2}>
                        <Grid item xs={6} md={6} >
                        <FormControl fullWidth className="form-assets">
                            <InputLabel className="white-text-center">Currency</InputLabel>
                            <Select
                            value={selectedCategory}
                            className="white-text-center"
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value="Ethereum">Ethereum</MenuItem>
                            <MenuItem value="Bitcoin">Bitcoin</MenuItem>
                            <MenuItem value="Bitcoin">Dollar</MenuItem>
                            </Select>
                        </FormControl>
                        </Grid>
                        <Grid item xs={6} md ={6} style={{marginBottom: '2rem'}}>
                        <FormControl fullWidth className="form-assets">
                            <InputLabel className="white-text-center">Account</InputLabel>
                            <Select
                            value={selectedAuthor}
                            className="white-text-center"
                            onChange={(e) => setSelectedAuthor(e.target.value)}
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value="Phan Vu">PHAN VU</MenuItem>
                                <MenuItem value="Phong Pham">PHAM DO TIEN PHONG</MenuItem>
                                <MenuItem value="Nguyen Kien">NGUYEN TRUNG KIEN </MenuItem>
                            </Select>
                        </FormControl>
                        </Grid>
                        {filteredAssets.map((asset, index) => (
                            <Grid item xs={12} sm={12} lg={3} xl={3} style={{marginBottom: '2rem', paddingTop:'6vh'}}>
                            <AssetDisplay key={index} {...asset} />
                        </Grid>
                        ))}
                </Grid>
                </Grid>
                </div>
        </Box>
        
    </div>
    </>
    );
}

export default Assets;