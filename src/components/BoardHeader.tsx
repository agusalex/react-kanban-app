import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
// import the deleteTask action from dataActions
import CardFormPopup from "./CardForm";
import {deleteRow} from "../actions/dataActions";
import {Delete, SortByAlpha} from "@mui/icons-material";

interface HeaderProps {
    row: string
    onSort: () => void;
}

function BoardHeader(props: HeaderProps) {
    const dispatch = useDispatch();
    const [openForm, setOpenForm] = useState(false);

    const handleOpenForm = () => {
        setOpenForm(true);
    };

    const handleCloseForm = () => {
        setOpenForm(false);
    };

    // dispatch deleteTask action
    const handleDelete = () => {
        dispatch(deleteRow(props.row));
    }

    return <Box>
        <Box display="flex" justifyContent="center" flex-direction="row" alignItems="center">
            <h1>{props.row}</h1>
            <IconButton style={{paddingTop: "12px"}} size="small" color="inherit" onClick={handleDelete}>
                <Badge>
                    <Delete/>
                </Badge>
            </IconButton>
        </Box>
        <IconButton size="large" color="inherit" onClick={props.onSort}>
            <Badge>
                <SortByAlpha/>
            </Badge>
        </IconButton>
        <IconButton size="large" color="inherit" onClick={handleOpenForm}>
            <Badge>
                <AddIcon/>
            </Badge>
        </IconButton>
        <CardFormPopup open={openForm} row={props.row} onClose={handleCloseForm}/>
    </Box>
}

export default BoardHeader
