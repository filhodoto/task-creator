import { Alert } from '@mui/material';
import { TaskProps, deleteTask } from '@/store/slices/tasksSlice';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import TaskItem from '../TaskItem';

const TasksList = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const dispatch = useAppDispatch();
  const handleEditTask = (task: TaskProps) => {
    // Make sure id is passed
    console.log('Edit task', task);
  };
  const handleDeleteTask = (taskId: TaskProps['id']) => {
    // Delete task from state
    dispatch(deleteTask(taskId));
  };
  console.log(tasks);
  return (
    <>
      {tasks.length ? (
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <TaskItem
                  {...task}
                  onEdit={handleEditTask}
                  onDelete={handleDeleteTask}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <Alert severity="info" sx={{ width: 'auto' }}>
          Create some amazing tasks and see them here
        </Alert>
      )}
    </>
  );
};

export default TasksList;
