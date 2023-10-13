import { GET_TASKS } from "@Store/TasksStore/types";

export const listTasks = () => ({
  type: GET_TASKS,
});

// const downloadProductsOk = (products) => ({
//   type: PRODUCTS_DOWNLOAD_OK,
//   payload: products,
// });

// export const downloadProductsAction = () => store.dispatch(downloadProducts());
