import React from 'react'
import { Grid } from '@mui/material';
import { Card } from '../../Components';
import { useSelector } from 'react-redux';

const Cart = () => {
    const { items } = useSelector((state) => state.cartSlice);
    console.log(items, "items");
    return (
        <div>
            <Grid container columnSpacing={2} rowSpacing={2}>
                {items.length &&
                    items.map((product) => {
                        return (
                            <Grid key={product.id} item lg={3} md={6} sm={6} xs={12}>
                                <Card product={product} removeCart={true} />
                            </Grid>
                        );
                    })}
            </Grid>
            {
                !items.length && (
                    <h1 className="text-center mt-10 text-2xl">NO ITEM IN CART</h1>
                )
            }
        </div >
    );
};

export default Cart;