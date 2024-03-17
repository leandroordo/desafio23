const TaskItem = ({ id, taskText, deleteTaskFunction }) => {
  return (
    <li className="list-item" key={id}>
      {taskText}
      <a
        href="#!"
        className="text-2xl text-sky-600"
        onClick={deleteTaskFunction}
      >
        ×
      </a>
    </li>
  );
};

export default TaskItem;
