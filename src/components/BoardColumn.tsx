import {Task} from "../types/Model";
import {styled} from "@mui/material";
import Grid from "@mui/material/Grid";
import BoardHeader from "./BoardHeader";
import BoardCard from "./Card";
import {Droppable} from "react-beautiful-dnd";
import Box from "@mui/material/Box";

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

    const starred = props.tasks.filter(t => t.star);
    const unstarred = props.tasks.filter(t => !t.star);

    return (

        <StyledGrid
            key={props.title}
        >
            <Grid item justifyContent="center">
                <BoardHeader row={props.title}/>
                <Droppable droppableId={props.title}>
                    {(provided) => (
                        <Box {...provided.droppableProps}
                             ref={provided.innerRef}>
                            {starred.map((t) => (
                                <BoardCard key={t.id} task={t} />
                            ))}
                            {unstarred.map((t, index) => (
                                <BoardCard key={t.id} task={t}/>
                            ))}

                            {provided.placeholder}
                        </Box>
                    )}
                </Droppable>
            </Grid>

        </StyledGrid>

    );
}

export default BoardColumn;
