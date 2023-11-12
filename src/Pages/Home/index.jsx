import React, { useEffect, useState } from 'react'
import { BodyCmp, Card } from '../../Components'
import axios from 'axios';
import { Box, Grid } from '@mui/material';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
            const products = await axios.get(
                "https://fakestoreapi.com/products"
            );
            console.log(products.data)
            setProducts(products.data)
        })();
    }, []);

    return (
        <>
            <BodyCmp />
            <Box>
                <Grid container columnSpacing={2} rowSpacing={2}>
                    {products.length &&
                        products.map((product) => {
                            return (
                                <Grid key={product.id} item lg={3} md={6} sm={6} xs={12}>
                                    <Card product={product} />
                                </Grid>
                            )
                        })}

                </Grid>
            </Box>
        </>
    )
}

export default Home