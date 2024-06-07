import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'; // for validation schema
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { TaskProps } from '@/store/slices/tasksSlice';

interface TasksFormProps {
  onSubmit: (data: TaskProps) => void;
}

// Yup validation Schema for form
const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  description: yup.string().required('Description is required'),
});

const TasksForm: React.FC<TasksFormProps> = ({ onSubmit }) => {
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmitHandler = (data: Omit<TaskProps, 'id'>) => {
    // Create id to task object, so we can use this value add edit it later
    // NOTE:: in a project for production we would use UUID, or if we store tasks in a DB the if would be created for us
    const id = Date.now();

    onSubmit({ id, ...data });

    // Clean form after submission
    reset();
  };

  return (
    <Paper
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        padding: theme.spacing(3),
        backgroundColor: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[2],
      }}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <TextField
        {...register('name')}
        label="Name"
        error={!!errors.name} // Show error helper text if there's an error
        helperText={errors.name?.message} // Set error helper text from validation schema
      />
      <TextField
        {...register('description')}
        label="Description"
        error={!!errors.description}
        helperText={errors.description?.message}
        multiline
        rows={3}
      />
      <Button
        variant="contained"
        type="submit"
        color="primary"
        sx={{ alignSelf: 'flex-end' }}
      >
        Create Post
      </Button>
    </Paper>
  );
};

export default TasksForm;