import React, { useState, useEffect } from "react";

type TaskProps = {
  title: string;
  details: string;
  reward: string;
  risk: string;
  duration: string;
  imageUrl: string; // Resim URL'si
  onClick: () => void;
};

const Task = (props: TaskProps) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleClick = () => {
    setIsDisabled(true);
    setCountdown(parseInt(props.duration)); // Süreyi saniye olarak başlat
    props.onClick();
  };

  useEffect(() => {
    let timer: number;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0 && isDisabled) {
      setIsDisabled(false); // Geri sayım bittiğinde button'u etkinleştir
    }

    return () => clearInterval(timer);
  }, [countdown, isDisabled]);

  return (
    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-start">
      {/* Resim */}
      <img
        src={props.imageUrl}
        alt={props.title}
        className="w-32 h-32 rounded-lg mr-4"
      />
      {/* Yazılar */}
      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.details}
        </p>
        <div className="mb-3">
          <p>
            <strong>Ödül:</strong> {props.reward}
          </p>
          <p>
            <strong>Risk:</strong> {props.risk}
          </p>
          <p>
            <strong>Görev Süresi:</strong> {props.duration} saniye
          </p>
        </div>
        <button
          onClick={handleClick}
          disabled={isDisabled}
          className="py-1 px-3 rounded-md border-2
    bg-blue-600 hover:bg-blue-700 border-blue-700 hover:border-blue-800 text-white
    disabled:bg-gray-300 disabled:border-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed"
        >
          {isDisabled ? `Bekleyin (${countdown}s)` : "Görevi Yap"}
        </button>
      </div>
    </div>
  );
};

export default Task;
