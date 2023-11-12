import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Body.css';
import Button from '../Button';
import Card from '../CardCmp';

const BodyCmp = () => {
    return (
        <>
            <div className='mainDiv'>
                <div className="bodyNested1">
                    <Carousel infiniteLoop autoPlay showThumbs={false}>
                        <div>
                            <img src="https://wallpapers.com/images/high/music-symbols-treble-clef-in-blue-and-orange-7zyg2qb6n7nwcbzh.webp" alt="My Picture" />
                        </div>
                        <div>
                            <img src="https://wallpapers.com/images/high/music-4k-headphones-nw4padndnep0wut4.webp" alt="" />
                        </div>
                        <div>
                            <img src="https://wallpapers.com/images/high/kid-with-radio-music-4k-05vuvrtqe511s36j.webp" alt="" />
                        </div>
                    </Carousel>
                </div>
                <div className='bodyNested2'>
                    <h1>Welcome to Our E-Commerce App</h1>
                    <div className='bodyNested3'>
                        <div className='firebase same-1'>
                            <img src="https://6513481158bf70152f67ae9e--melodic-cascaron-b671a7.netlify.app/assets/f2-bb945d1f.png" alt="" />
                            <h2>Free Shipping</h2>
                            <Button name="Order Now" color="blue" />
                        </div>
                        <div className='jses6 same-1'>
                            <img src="https://6513481158bf70152f67ae9e--melodic-cascaron-b671a7.netlify.app/assets/f4-f974cf6f.png" alt="" />
                            <h2>Best Quality</h2>
                            <Button name="Order Now" color="#adad1f" />
                        </div>
                        <div className='react same-1'>
                            <img src="https://6513481158bf70152f67ae9e--melodic-cascaron-b671a7.netlify.app/assets/f5-e103eb3f.png" alt="" />
                            <h2>Customer Care</h2>
                            <Button name="Order Now" color="#087ea4" />
                        </div>
                        <div className='lightred same-1'>
                            <img src="https://6513481158bf70152f67ae9e--melodic-cascaron-b671a7.netlify.app/assets/f1-8a4aa52a.png" alt="" />
                            <h2>Online Delivery</h2>
                            <Button name="Order Now" color="rgb(202, 78, 44)" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BodyCmp;
