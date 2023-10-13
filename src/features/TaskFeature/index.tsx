import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTasks } from "@Store/TasksStore/actions";
import { Button, Container, Card, Task } from "@Components/";
import { RootState } from "@Store/store";

const TaskFeature = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.taskState.tasks);

  // useEffect(() => {
  //   dispatch(listTasks());
  // }, [dispatch]);

  return (
    <Container>
      <Card>
        <span>Tasks</span>
      </Card>
      <Card>
        <div style={{ flexDirection: "row", display: "flex" }}>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      </Card>
    </Container>
  );
};

export default TaskFeature;
