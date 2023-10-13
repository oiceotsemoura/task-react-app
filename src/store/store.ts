import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import TasksReducer from "@Store/TasksStore";
import { tasksSaga } from "@Store/TasksStore/saga";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { taskState: TasksReducer },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(tasksSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
