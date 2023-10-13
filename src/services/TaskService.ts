import Axios from "axios";
import ITask from "@Interfaces/ITask";

const baseUrl = "";

export const getTasks = async () => {
  return await Axios.get(`${baseUrl}/tasks`);
};

export const createTask = async (task: ITask) => {
  return await Axios.post(`${baseUrl}/tasks`, { task });
};

export const removeTask = async (id: string) => {
  return await Axios.delete(`${baseUrl}/tasks/${id}`);
};

export const updateTask = async (newTask: ITask) => {
  return await Axios.put(`${baseUrl}/tasks`, { task: newTask });
};

const TaskService = {
  getTasks,
  updateTask,
  createTask,
  removeTask,
};

export default TaskService;
