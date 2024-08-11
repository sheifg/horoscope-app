import React from 'react';

export default function Card({item}) {
    const {title, date, desc, image} = item;
  return (
    <div className='cards'>
        <div className='title'>
            <h1>{title}</h1>
        </div>
        <div className='images'>
            <img src={image} alt={title} />
        </div>
        <div className='card-over'>
            <h3>{date}</h3>
            <p>{desc}</p>
        </div>
    </div>
  );
}

