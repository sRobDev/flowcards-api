import React from 'react';
import { removeCard } from '../../services/flow.service';
import { 
  DeleteIcon,
  EditIcon
} from '../../assets/icons';
import {
  container,
  divider,
  controls
} from './card.module.scss';
export default function Card({title, content, topic, onRemove}) {

  return (
    <div className={container}>
      <div>
        <h3>{title}</h3>
        <div className={divider}>&nbsp;</div>
      </div>
      <p>{content}</p>

      <div className={controls}>
        <button onClick={onRemove}><DeleteIcon/></button>
        <button><EditIcon/></button>
      </div>
    </div>
  )
}