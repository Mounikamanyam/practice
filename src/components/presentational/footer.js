import React from 'react';
import {FilterLink} from './../container/filterLink';

export const Footer=()=>(
  <p>Show : {''} <FilterLink filter='all'>all</FilterLink> {''}
                 <FilterLink filter='active'>active</FilterLink> {''}
                 <FilterLink filter='completed'>completed</FilterLink> 

  </p>
  )