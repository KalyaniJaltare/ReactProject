import React from 'react'
import {Card} from '../card/Card.component'
import './Cardlist.style.css'

export const Cardlist = props => (

     <div className='Cardlist'>
         {props.monsters.map(monster => (
         <Card key = {monster.id} monster={monster}/>
       ))}
     </div>
  )