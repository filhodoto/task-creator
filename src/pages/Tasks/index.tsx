import React from 'react';
import TasksForm from '@/components/TasksForm';
import { TaskProps, createTask } from '@/store/slices/tasksSlice';
import { Box, Typography, useTheme } from '@mui/material';
import { useAppDispatch } from '@/store/hooks';
import TasksList from '@/components/TasksList';

const Tasks = () => {
  const theme = useTheme();

  const dispatch = useAppDispatch();

  const handleFormSubmit = (task: TaskProps) => {
    // Make sure id is passed
    if (!task.id) {
      console.error('Task must have an id');
      return;
    }

    // Update state with new task
    dispatch(createTask(task));
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gap: 10,
        gridTemplateColumns: {
          md: 'repeat(2, 1fr)',
        },
      }}
    >
      <Box>
        <Typography variant="h4" component="h2" marginBottom={theme.spacing(2)}>
          Create your task
        </Typography>
        <TasksForm onSubmit={handleFormSubmit} />
      </Box>
      <Box>
        <Typography variant="h4" component="h2" marginBottom={theme.spacing(2)}>
          All my tasks
        </Typography>
        <TasksList />
      </Box>
    </Box>
  );
};

export default Tasks;
