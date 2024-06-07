import React from 'react';
import TasksForm from '@/components/TasksForm';
import { TaskProps, createTask } from '@/store/slices/tasksSlice';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useAppDispatch } from '@/store/hooks';

const TaskList = () => {
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
        gap: 5,
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
          Tasks
        </Typography>
      </Box>
    </Box>
  );
};

export default TaskList;
