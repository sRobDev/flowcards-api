import React from 'react';
import {
  searchbox
} from './styles.module.scss'
export default function SearchBox() {
  return (
    <div className={searchbox}>
      <input placeholder="Search Cards" />
    </div>  
  )
}