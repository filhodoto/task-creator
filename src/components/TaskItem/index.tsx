import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from '@mui/material/styles';
import { Box, TextField, Typography, IconButton } from '@mui/material';
import { TaskProps } from '@/store/slices/tasksSlice';

interface TaskItemProps extends TaskProps {
  onEdit: (props: TaskProps) => void;
  onDelete: (number: TaskProps['id']) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  id,
  name,
  description,
  onEdit,
  onDelete,
}) => {
  const theme = useTheme();
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = (updatedTitle: string, updatedDescription: string) => {
    setIsEditing(false);
    onEdit({ id, name: updatedTitle, description: updatedDescription });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(1),
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[1],
        marginBottom: theme.spacing(2),
        color: 'black',
      }}
    >
      <Typography variant="h6">
        {isEditing ? (
          <TextField
            value={name}
            onChange={(e) => handleSave(e.target.value, description)}
          />
        ) : (
          name
        )}
      </Typography>
      <Typography variant="body1">
        {isEditing ? (
          <TextField
            multiline
            rows={4}
            value={description}
            onChange={(e) => handleSave(name, e.target.value)}
          />
        ) : (
          description
        )}
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={onDelete}>
          <DeleteIcon color="error" />
        </IconButton>
        <IconButton onClick={handleEdit}>
          {isEditing ? 'Save' : <EditIcon />}
        </IconButton>
      </div>
    </Box>
  );
};

export default TaskItem;
