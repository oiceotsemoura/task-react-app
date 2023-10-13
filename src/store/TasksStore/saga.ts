import TaskService from "@Services/TaskService";
import { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { GET_TASKS } from "./types";
import { listTasksSlice } from "./index";
import ITask from "@Interfaces/ITask";

// Generator function
export function* getTasksSaga() {
  try {
    // You can also export the axios call as a function.
    const response: AxiosResponse<{ tasks: ITask[] }> =
      yield TaskService.getTasks();
    yield put(listTasksSlice(response.data));
  } catch (error) {
    console.log(error);
  }
}

// Generator function
export function* tasksSaga() {
  yield takeLatest(GET_TASKS, getTasksSaga);
}
