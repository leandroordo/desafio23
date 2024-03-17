import { useState } from "react";
import Taskform from "./components/Taskform";
import TaskList from "./components/TaskList";

function App() {
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (taskText) => {
    setTaskList([...taskList, { id: taskList.length + 1, text: taskText }]);
  };

  const handleDeleteTask = (taskId) => {
    setTaskList(taskList.filter((task) => task.id !== taskId));
  };

  return (
    <section className="py-12 px-6 mt-0 mx-3 flex justify-center">
      <div className="flex-1 xl:flex-initial xl:w-5/6 rounded-2xl bg-stone-700 p-12">
        <h1 className="mt-0 mb-4 font-medium text-xl xl:text-2xl text-slate-50">
          Mi super lista de tareas
        </h1>
        <Taskform addTaskFunction={handleAddTask} />
        <TaskList taskList={taskList} deleteTaskFunction={handleDeleteTask} />
      </div>
    </section>
  );
}

export default App;
