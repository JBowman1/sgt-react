import React from 'react';

export default function Header(props) {
  return (
    <div className='col'>
      <h1>Student Grade Table</h1>
      <h3>{props.title}</h3>
      <h4>{props.averageTitle} <span>{props.averageValue}</span></h4>
    </div>
  );
}
