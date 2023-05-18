import Grid from '@mui/material/Grid';
import { Task, DataState } from "../types/Model";
import { useSelector, useDispatch } from 'react-redux';
import BoardColumn from "./BoardColumn";
import { DragDropContext } from 'react-beautiful-dnd';
import {addTask, deleteTask, updateTask} from "../actions/dataActions";
import {useEffect} from "react";

function Board() {
    const tasksData: Task[] = useSelector((state: DataState) => state.tasks) || [];
    const rowsData: string[] = useSelector((state: DataState) => state.rows) || [];
    const dispatch = useDispatch();

    const onDragEnd = (result: { destination: any; source: any; draggableId: any; }) => {
        const { destination, source, draggableId } = result;

        // Check if the task was dropped outside a valid destination
        if (!destination) {
            return;
        }

        // Check if the task was dropped back to its original position
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const updatedTask = tasksData.find((task) => String(task.id) === draggableId);

        if (updatedTask) {
            const newTask = {
                ...updatedTask,
                rowId: destination.droppableId,
            };

            // Dispatch the action to update the task with the new rowId
            dispatch(updateTask(newTask));
        }
    };

    function getRows() {
        let grids = new Map();
        let rows = [];

        rowsData.map(rowName => grids.set(rowName, []));

        tasksData.forEach(task => {
            const rowID = task.rowId;
            if (!grids.has(rowID)) {
                grids.set(rowID, []);
            }
            grids.get(rowID).push(task);
        });

        for (let key of Array.from(grids.keys())) {
            let tasksForKey = grids.get(key)
            let row = <BoardColumn key={key} title={key} tasks={tasksForKey} />;
            rows.push(row);
        }

        return rows;
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
                {getRows()}
            </Grid>
        </DragDropContext>
    );
}

export default Board;
