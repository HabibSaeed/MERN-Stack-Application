import React from 'react';
import { Badge, Box, IconButton, Avatar } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SportsVolleyballRoundedIcon from '@mui/icons-material/SportsVolleyballRounded';
import './Navbar.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { items } = useSelector((state) => state.cartSlice);
    console.log("selector hai yeh", items);
    const navigate = useNavigate();
    return (
        <>
            <div className='parentDiv'>
                <div className='childDiv1'>
                    <SportsVolleyballRoundedIcon className="icon" />
                    <h2 className='peakPurchase' onClick={() => {
                        navigate("/");
                    }}>Peak Purchase</h2>
                </div>
                <div className="userSection">
                    <Box>
                        <IconButton
                            size="large"
                            aria-label="show shopping cart"
                            color="inherit"
                            onClick={() => {
                                navigate("/cart");
                            }}
                        >
                            <Badge badgeContent={items.length} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>

                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </div>
            </div>
        </>
    );
};

export default Navbar;
