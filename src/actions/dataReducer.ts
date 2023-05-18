import {
    ADD_TASK,
    DELETE_TASK,
    DELETE_ROW,
    ADD_ROW,
    DataActionTypes,
} from './dataActions';
import {DataState} from "../types/Model";
import { dataTaskMock, dataRowMock } from "../data/Mock";

// Load state from local storage
const loadStateFromLocalStorage = (): DataState => {
    try {
        const serializedState = localStorage.getItem('appState');
        if (serializedState === null) {
            return { tasks: dataTaskMock(), rows: dataRowMock(), loading: false, error: null }; // Fallback to initialState if no state found in local storage
        }
        return JSON.parse(serializedState);
    } catch (error) {
        console.error('Failed to load state from local storage:', error);
        return { tasks: [], rows: [], loading: false, error: null }; // Fallback to initialState if an error occurs
    }
};

const initialState: DataState = loadStateFromLocalStorage();

const dataReducer = (state = initialState, action: DataActionTypes): DataState => {
    switch (action.type) {
        case ADD_TASK:
            const newStateWithAddedTask = {
                ...state,
                tasks: [...state.tasks, action.payload.task],
            };
            saveStateToLocalStorage(newStateWithAddedTask);
            return newStateWithAddedTask;

        case DELETE_TASK:
            const newStateWithDeletedTask = {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload.taskId),
            };
            saveStateToLocalStorage(newStateWithDeletedTask);
            return newStateWithDeletedTask;


        case ADD_ROW:
            const newStateWithAddedRow = {
                ...state,
                rows: [...state.rows, action.payload.rowId], // Add new row to the rows array
            };
            saveStateToLocalStorage(newStateWithAddedRow);
            return newStateWithAddedRow;

        case DELETE_ROW:
            const newStateWithDeletedRow = {
                ...state,
                tasks: state.tasks.filter(task => task.rowId !== action.payload.rowId),
                rows: state.rows.filter(row => row !== action.payload.rowId),
            };
            saveStateToLocalStorage(newStateWithDeletedRow);
            return newStateWithDeletedRow;


        default:
            return state;
    }
};

const saveStateToLocalStorage = (state: DataState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('appState', serializedState);
    } catch (error) {
        console.error('Failed to save state to local storage:', error);
    }
};

export default dataReducer;
