import {Task} from "../types/Model";
import {styled} from "@mui/material";
import Grid from "@mui/material/Grid";
import BoardHeader from "./BoardHeader";
import BoardCard from "./Card";

interface ColumnProps {
    tasks: Task[]
    title: string
}

function BoardColumn(props: ColumnProps) {
    const StyledGrid = styled(Grid)`
      padding: 20px;
    `;
    const sortedTasks = props.tasks.sort((t1: Task, t2: Task) => {
        return t1.title.toLowerCase() > t2.title.toLowerCase() ? 1 : -1;
    });
    const starred = sortedTasks.filter(t => t.star)
    const unstarred = sortedTasks.filter(t => !t.star)
    return (
        <StyledGrid key={props.title}>
            <Grid item justifyContent="center">
                <BoardHeader row={props.title}/>

                {starred.map(t => (
                    <BoardCard key={t.id} task={t}/>
                ))
                }
                {unstarred.map(t => (
                    <BoardCard key={t.id} task={t}/>
                ))
                }
            </Grid>
        </StyledGrid>
    );
}

export default BoardColumn
