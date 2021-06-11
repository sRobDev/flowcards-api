import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import {
  container
} from './styles.module.scss';

export default function Navbar() {
  return (
    <div className={container}>
      <SearchBox />
    </div>
  )
}