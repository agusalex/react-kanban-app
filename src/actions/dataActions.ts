import {DataState, Task} from "../types/Model";

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const DELETE_ROW = 'DELETE_ROW';
export const ADD_ROW = 'ADD_ROW';
interface AddTaskAction {
    type: typeof ADD_TASK;
    payload: { task: Task };
}

interface DeleteTaskAction {
    type: typeof DELETE_TASK;
    payload: { taskId: number };
}

interface DeleteRowAction {
    type: typeof DELETE_ROW;
    payload: { rowId: string };
}

interface AddRowAction {
    type: typeof ADD_ROW;
    payload: { rowId: string };
}


export type DataActionTypes = AddTaskAction | DeleteTaskAction | DeleteRowAction | AddRowAction;

export const addTask = (task: Task): AddTaskAction => ({
    type: ADD_TASK,
    payload: {task},
});

export const deleteTask = (taskId: number): DeleteTaskAction => ({
    type: DELETE_TASK,
    payload: {taskId},
});

export const deleteRow = (rowId: string): DeleteRowAction => ({
    type: DELETE_ROW,
    payload: {rowId},
});


export const addRow = (rowId: string): AddRowAction => ({
    type: ADD_ROW,
    payload: {rowId},
});

export const dataReducer = (state: DataState, action: DataActionTypes): DataState => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload.task]
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload.taskId)
            };

        case ADD_ROW:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.rowId !== action.payload.rowId),
                rows: state.rows.filter((row) => row !== action.payload.rowId)
            };
        case DELETE_ROW:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.rowId !== action.payload.rowId),
                rows: state.rows.filter((row) => row !== action.payload.rowId)
            };
        default:
            return state;
    }
};
export default dataReducer;
