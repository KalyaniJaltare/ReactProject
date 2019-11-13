import React from 'react'
import './Card.style.css'

export const Card = props =>(
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}set=set7&size=30*30`}/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)