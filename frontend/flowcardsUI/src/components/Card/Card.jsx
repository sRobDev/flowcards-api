import React from 'react';
import { 
  DeleteIcon,
  EditIcon
} from '../../assets/icons';
import {
  container,
  divider,
  controls
} from './card.module.scss';
export default function Card({title, content, topic}) {
  return (
    <div className={container}>
      <div>
        <h3>{title}</h3>
        <div className={divider}>&nbsp;</div>
      </div>
      <p>{content}</p>

      <div className={controls}>
        <button><DeleteIcon/></button>
        <button><EditIcon/></button>
      </div>
    </div>
  )
}