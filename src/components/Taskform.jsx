import { useState } from "react";

const Taskform = ({ addTaskFunction = () => {} }) => {
  const [taskText, setTaskText] = useState("");

  return (
    <form action="" className="flex justify-center items-center mb-10">
      <input
        type="text"
        className="flex-auto text-base py-1 bg-transparent font-normal border-b-2 text-white outline-none"
        placeholder="¿Qué tienes que hacer hoy?"
        onChange={(e) => setTaskText(e.currentTarget.value)}
        value={taskText}
        required={true}
        minLength={3}
      ></input>
      <button
        className="rounded-md px-7 py-2 text-sm font-semibold uppercase shadow-lg text-white text-[0.875rem] text-center cursor-pointer bg-sky-600 ml-6 hover:bg-sky-700"
        onClick={() => {
          if (taskText) {
            addTaskFunction(taskText);
            setTaskText("");
          }
        }}
      >
        Agregar
      </button>
    </form>
  );
};

export default Taskform;
