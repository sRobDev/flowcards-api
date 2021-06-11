import React from 'react';
import {
  container
} from './AddCardButton.module.scss';
export default function AddCardButton({
  onClick
}) {
  return (
    <div className={container} onClick={onClick}>
      +
    </div>
  )
}