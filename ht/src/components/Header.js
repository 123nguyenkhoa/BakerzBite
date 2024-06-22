import React, { useEffect, useState } from 'react';

const Header = () => {
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        const count = localStorage.getItem('visitorCount') || 0;
        setVisitorCount(parseInt(count) + 1);
        localStorage.setItem('visitorCount', parseInt(count) + 1);
    }, []);

    return (
        <header>
            <div className="logo">Bakerz Bite</div>
            <div className="visitor-count">Visitors: <span>{visitorCount}</span></div>
        </header>
    );
}

export default Header;
