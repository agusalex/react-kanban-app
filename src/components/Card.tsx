import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red, yellow} from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
import {Task} from "../types/Model";
import {useDispatch} from 'react-redux';
import {addTask, deleteTask} from '../actions/dataActions';
import {Delete} from "@mui/icons-material";

interface BoardCardProps {
    task: Task;
}

export default function BoardCard({task}: BoardCardProps) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    const handleStar = () => {


        const newTask: Task = {
            id: task.id,
            rowId: task.rowId,
            title: task.title,
            description: task.description,
            image: task.image,
            star: !task.star
        };

        dispatch(deleteTask(task.id));
        dispatch(addTask(newTask));
    };

    return (
        <Card
            sx={{
                maxWidth: 345,
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                marginBottom: '20px', // Add margin at the bottom
            }}
        >
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                        {task.title.charAt(0)} {/* Display the first character of the title as the avatar */}
                    </Avatar>
                }
                action={
                    <IconButton onClick={handleDelete} aria-label="settings">
                        <Delete/>
                    </IconButton>
                }
                title={task.title}
            />
            {task.image ? (
                <CardMedia component="img" height="194" image={task.image} alt={task.title}/>
            ) : (
                <></>
            )}
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {task.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton onClick={handleStar} aria-label="add to favorites">
                    <StarIcon sx={task.star ? {color: yellow[700]} : {}}/>
                </IconButton>
            </CardActions>
        </Card>
    );
}
