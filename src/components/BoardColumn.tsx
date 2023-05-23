import {Task} from "../types/Model";
import {styled} from "@mui/material";
import Grid from "@mui/material/Grid";
import BoardHeader from "./BoardHeader";
import BoardCard from "./Card";
import {Droppable} from "react-beautiful-dnd";
import Box from "@mui/material/Box";
import {useState} from "react";

interface ColumnProps {
    tasks: Task[]
    title: string
}


function BoardColumn(props: ColumnProps) {
    const StyledGrid = styled(Grid)`
      padding: 20px;
    `;
    let [getAlphabeticOrder, setAlphabeticOrder] = useState(false)

    function getUnstarredFn(): Task[] {
        let unstarred = props.tasks.filter(t => !t.star)
        if (getAlphabeticOrder) {
           unstarred.sort((t1: Task, t2: Task) => {
                return t1.title.toLowerCase() > t2.title.toLowerCase() ? -1 : 1;
            });
        }
        if (unstarred.length >0) {
            console.log(unstarred)
        }

        return unstarred
    }


    function sortTasks() {
        setAlphabeticOrder(!getAlphabeticOrder)
    }

    const starred = props.tasks.filter(t => t.star);

    return (

        <StyledGrid
            key={props.title}>
            <Grid item justifyContent="center">
                <BoardHeader row={props.title} onSort={sortTasks}/>
                <Droppable droppableId={props.title}>
                    {(provided) => (
                        <Box {...provided.droppableProps}
                             ref={provided.innerRef}>
                            {starred.map((t) => (
                                <BoardCard key={t.id} task={t}/>
                            ))}

                            {getUnstarredFn().map((t, index) => (
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
