import React from 'react';
import {
  container
} from './card.module.scss';
export default function Card({title, content, topic}) {
  return (
    <div className={container}>
      <p>{title}</p>
    </div>
  )
}