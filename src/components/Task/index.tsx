import { useEffect } from "react";
import type { RootState } from "@Store/store";
import { useSelector } from "react-redux";
import { Button, Container, Card } from "@Components/";
import ITask from "@Interfaces/ITask";

interface ITaskProps {
  task: ITask;
}

export const Task = ({ task }: ITaskProps) => {
  return (
    <div>
      <span>{task.name}</span>
    </div>
  );
};
