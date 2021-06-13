import React from 'react';
import { SearchIcon } from '../../assets/icons';
import {
  searchbox
} from './styles.module.scss'
export default function SearchBox() {
  return (
    <div className={searchbox}>
      <SearchIcon />
      <input placeholder="Search Cards" />
    </div>  
  )
}