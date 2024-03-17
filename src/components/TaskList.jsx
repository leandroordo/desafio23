import TaskItem from "./TaskItem";

const TaskList = ({ taskList, deleteTaskFunction }) => {
  return (
    <ul className="flex flex-col pl-0 mb-0">
      {taskList.map((task) => (
        <TaskItem
          key={task.id}
          taskText={task.text}
          deleteTaskFunction={() => deleteTaskFunction(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
