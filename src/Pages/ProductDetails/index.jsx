import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = (props) => {
    const { id, title } = useParams();

    useEffect(() => {
        console.log("Fetching product details for ID:", id);
        // Add your data fetching logic here
    }, [id]);

    return (
        <div>
            <h1>Product Details for ID: {id}</h1>
            <h1>Title:{title}</h1>
            {/* Display product details here */}
        </div>
    );
};

export default ProductDetails;
