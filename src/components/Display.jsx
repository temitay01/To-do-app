import Button from "./Button";

function Display({ tasks, onDelete }) {
  return (
    <ul className="the-list">
      {tasks.map((task, index) => (
        <li key={index}>
          <span>{task}</span>
          <Button name="delete" handleClick={() => onDelete(index)} />
        </li>
      ))}
    </ul>
  );
}

export default Display;
