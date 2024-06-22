import React from 'react';

const Section = ({ id, title, items }) => {
    return (
        <section id={id}>
            <h2>{title}</h2>
            <div className="items">
                {items.map((item, index) => (
                    <div key={index} className="item">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Section;
