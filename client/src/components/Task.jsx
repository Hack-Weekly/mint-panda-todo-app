import './Task.css';

export default function Task({ task }) {
  // The cleanCreatedDate variable is getting only the day and month of the UTCString date
  // const cleanCreatedDate = task.createdDate.split(' ').slice(0, 4).join(' ');

  return (
    <div className="container">
      <div className="left">
        <p className="text">{task.text}</p>
        {task.createdDate && <p className="createdDate">{cleanCreatedDate}</p>}
      </div>
      <div className="right">
        <button className="edit">Edit</button>
        <button className="complete">Complete</button>
        <button className="archive">Archive</button>
      </div>
    </div>
  );
}
