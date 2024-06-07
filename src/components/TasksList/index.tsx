import React from 'react';
import { Typography } from '@mui/material';
import { TaskProps } from '@/store/slices/tasksSlice';
import { useAppSelector } from '@/store/hooks';
import TaskItem from '../TaskItem';

const TasksList = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const handleEditTask = (task: TaskProps) => {
    // Make sure id is passed
    console.log('Edit task', task);
  };
  const handleDeleteTask = (taskId: TaskProps['id']) => {
    // Make sure id is passed
    console.log('Delete task with id ', taskId);
  };
  console.log(tasks);
  return (
    <>
      {tasks ? (
        <ul>
          {tasks.map((task) => {
            return (
              <li>
                <TaskItem
                  key={task.id}
                  {...task}
                  onEdit={handleEditTask}
                  onDelete={handleDeleteTask}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <Typography>Create some amazing tasks and see them here</Typography>
      )}
    </>
  );
};

export default TasksList;
