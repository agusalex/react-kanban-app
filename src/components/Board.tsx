import Grid from '@mui/material/Grid';
import {Task, DataState} from "../types/Model";
import {useSelector} from 'react-redux';
import BoardColumn from "./BoardColumn";


function Board() {

    const tasksData: Task[] = useSelector((state: DataState) => state.tasks) || [];
    const rowsData: string[] = useSelector((state: DataState) => state.rows) || [];

    function getRows() {
        let grids = new Map();
        let rows = []; // This array is populated on its own in the future
        rowsData.map(rowName => grids.set(rowName,[]))
        tasksData.forEach(task => {
            const rowID = task.rowId;
            if (!grids.has(rowID)) {
                grids.set(rowID, []);
            }
            grids.get(rowID).push(task);
        });
        // Iterate over the keys in the map
        for (let key of Array.from(grids.keys())) {
            let tasksForKey = grids.get(key)
            let row = <BoardColumn key={key} title={key} tasks={tasksForKey}/>;
            rows.push(row)
        }
        return rows;
    }

    return (
        <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
            {getRows()}
        </Grid>
    );
}

export default Board
