import { createSlice } from "@reduxjs/toolkit";
import ITask from "@Interfaces/ITask";

interface TasksState {
  tasks: ITask[];
  isLoading: boolean;
  isAddTaskStatusLoading: boolean;
  isDeleteTaskStatusLoading: boolean;
  isEditTaskStatusLoading: boolean;
}

const initialState: TasksState = {
  tasks: [],
  isLoading: false,
  isAddTaskStatusLoading: false,
  isDeleteTaskStatusLoading: false,
  isEditTaskStatusLoading: false,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    listTasksSlice: (state, { payload: { tasks } }) => {
      state.tasks = [...tasks];
      state.isLoading = true;
    },
    addTaskSlice: (state, { payload: { task } }) => {
      state.tasks.push(task);
    },
    deleteTaskSlice: (state, { payload: { taskId } }) => {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    editTaskSlice: (state, { payload: { editedTask } }) => {
      const index = state.tasks.findIndex((task) => task.id === editedTask.id);
      state.tasks[index] = editedTask;
    },
  },
});

export const { addTaskSlice, deleteTaskSlice, editTaskSlice, listTasksSlice } =
  taskSlice.actions;
export default taskSlice.reducer;
