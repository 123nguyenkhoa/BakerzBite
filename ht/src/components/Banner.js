import React from 'react';
import bannerImage from '../assets/banner.jpg'; // Đảm bảo đường dẫn đúng

const Banner = () => {
    return (
        <div className="banner">
            <img src={bannerImage} alt="Bakerz Bite Banner" />
        </div>
    );
}

export default Banner;
