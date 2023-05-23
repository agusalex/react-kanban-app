import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Task} from "../types/Model";
import {addTask} from '../actions/dataActions';
import Box from "@mui/material/Box";

interface CardFormPopupProps {
    open: boolean;
    row: string;
    onClose: () => void;
}

export default function CardFormPopup({open, row, onClose}: CardFormPopupProps) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImageUrl(event.target.value);
    };

    const handleSubmit = () => {
        const task: Task = {
            id: Date.now(),
            rowId: row,
            title,
            description,
            image: imageUrl,
            star: false
        };
       // console.log(task);
        dispatch(addTask(task));
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Task</DialogTitle>
            <DialogContent>
                <Box style={{padding: "20px"}}>
                    <TextField
                        label="Title"
                        value={title}
                        onChange={handleTitleChange}
                        fullWidth
                    />
                    <TextField
                        label="Description"
                        value={description}
                        onChange={handleDescriptionChange}
                        fullWidth
                        multiline
                        rows={4}
                        margin="normal"
                    />
                    <TextField
                        label="ImageUrl"
                        value={imageUrl}
                        onChange={handleImageChange}
                        fullWidth
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
}
