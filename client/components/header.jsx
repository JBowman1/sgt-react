import React from 'react';

export default function Header(props) {
  return (
    <div className='col'>
      <h1>Student Grade Table</h1>
      <h4>{props.title}</h4>
      <h4 className="average">{props.averageTitle} <span className="badge badge-secondary">{props.averageValue}</span></h4>
    </div>
  );
}
