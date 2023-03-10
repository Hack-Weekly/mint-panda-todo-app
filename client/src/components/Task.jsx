import { useState } from 'react';
import './Task.css';
export default function Task({ task }) {
  // The cleanCreatedAt variable is getting only the day and month of the UTCString date
  const cleanCreatedAt = task.createdAt.split(' ').slice(0, 4).join(' ');

  return (
    <div className="container">
      <div className="left">
        <p className="text">{task.text}</p>
        {task.createdAt && <p className="createdAt">{cleanCreatedAt}</p>}
      </div>
      <div className="right">
        <button className="edit">Edit</button>
        <button className="complete">Complete</button>
        <button className="archive">Archive</button>
      </div>
    </div>
  );
}
