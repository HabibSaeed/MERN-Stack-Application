import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeToCart } from '../../store/slices/cartSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Card.css';

const Card = ({ product, removeCart }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    }

    const handleRemoveToCart = () => {
        dispatch(removeToCart(product));
    }

    const handleShowMore = () => {
        navigate(`/product-details/${product.id}`);
    }


    return (
        <div className='cardMain'>
            <div className="card">
                <img
                    src={product?.image}
                    alt="Card Image"
                    className="card-image"
                />
                <div className="card-content">
                    <h2 className="card-title">{product?.title.length > 15 ? product.title.slice(0, 15) + '...' : product.title}</h2>
                    <p className="card-description">
                        {product?.description.length > 50 ? product.description.slice(0, 50) + '...' : product.description}
                    </p>
                    <p className='card-price'>Rs : {product?.price}</p>
                    <div className='buttondiv'>
                        {removeCart && (
                            <button onClick={handleRemoveToCart} className='cardbuttons'>Remove from Cart</button>
                        )}
                        {!removeCart && (
                            <button onClick={handleAddToCart} className='cardbuttons'>Add to Cart</button>
                        )}
                        <button onClick={handleShowMore} className='cardbuttons'>Show More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
