import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {addRow} from '../actions/dataActions';
import Box from "@mui/material/Box";

interface CardFormPopupProps {
    open: boolean;
    onClose: () => void;
}

export default function RowFormPopup({open, onClose}: CardFormPopupProps) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleSubmit = () => {
        dispatch(addRow(title));
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Row</DialogTitle>
            <DialogContent >
                <Box style={{padding: "20px"}}>
                    <TextField
                        label="Row Title"
                        value={title}
                        onChange={handleTitleChange}
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
