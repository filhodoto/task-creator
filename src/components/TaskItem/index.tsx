import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from '@mui/material/styles';
import {
  TextField,
  Typography,
  IconButton,
  Button,
  Card,
  CardContent,
  CardActions,
  Grow,
  Tooltip,
  Divider,
} from '@mui/material';
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
  const [itemTitle, setItemTitle] = useState(name);
  const [itemDescription, setItemDescription] = useState(description);

  const handleSave = () => {
    onEdit({ id, name: itemTitle, description: itemDescription });
    setIsEditing(false);
  };

  // Elements to be rendered when we are editing tasks
  const renderEditEl = () => {
    return (
      <>
        <TextField
          size="small"
          variant="standard"
          defaultValue={itemTitle}
          sx={{ width: '100%', marginBottom: 2 }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setItemTitle(e.target.value);
          }}
        />
        <TextField
          size="small"
          variant="standard"
          multiline
          rows={2}
          defaultValue={itemDescription}
          sx={{ width: '100%' }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setItemDescription(e.target.value);
          }}
        />
      </>
    );
  };

  // Elements to be rendered when we are only displaying task vaues
  const renderTextEl = () => {
    return (
      <>
        <Typography gutterBottom variant="h6" component="div">
          {itemTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {itemDescription}
        </Typography>
      </>
    );
  };

  return (
    <Grow in>
      <Card
        sx={{
          gap: theme.spacing(1),
          borderRadius: theme.shape.borderRadius,
          marginBottom: theme.spacing(2),
        }}
      >
        <CardContent
          sx={{
            padding: theme.spacing(3),
          }}
        >
          {isEditing ? renderEditEl() : renderTextEl()}
        </CardContent>
        <Divider orientation="horizontal" />
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Tooltip title="Delete">
            <IconButton onClick={() => onDelete(id)}>
              <DeleteIcon color="error" />
            </IconButton>
          </Tooltip>
          {isEditing ? (
            <Button
              size="small"
              variant="contained"
              color="success"
              onClick={() => handleSave()}
            >
              save
            </Button>
          ) : (
            <Tooltip title="Edit task">
              <IconButton onClick={() => setIsEditing((prev) => !prev)}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          )}
        </CardActions>
      </Card>
    </Grow>
  );
};

export default TaskItem;
