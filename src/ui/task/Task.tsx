import { useCounterContext } from "../../player/player.ts";
import React from "react";
import AnimatedButton from "../core/AnimatedButton.tsx";

interface TaskProps {
  title: string;
  description: string;
}

const Task: React.FC<TaskProps> = ({title, description}) => {
  const {increment} = useCounterContext();

  return (
    <div
      className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5
        className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >{title}</h5>
      <p
        className="mb-3 font-normal text-gray-700 dark:text-gray-400"
      >{description}</p>
      <AnimatedButton onClick={increment}>Görevi Yap</AnimatedButton>
    </div>

  );
}

export default Task;
