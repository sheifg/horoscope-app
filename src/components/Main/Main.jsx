import React from 'react';
import "./Main.scss";
import Card from './Card';
import {data} from "../../helpers/data";

export default function Main() {
  return (
    <div className='card-container'>
        {data.map((item, index) => (
            <Card item={item} key={index} />
        ))}
    </div>
  )
}
