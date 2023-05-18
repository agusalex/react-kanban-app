import React from 'react';
import './App.css';
import Board from './components/Board';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import { Provider } from 'react-redux';
import rootReducer from './actions/dataReducer';
import { configureStore } from '@reduxjs/toolkit';

function App() {
    const persistedState = loadStateFromLocalStorage();

    const store = configureStore({
        reducer: rootReducer,
        preloadedState: persistedState, // Load the state from local storage
    });

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <div>
                        <NavBar />
                        <Routes>
                            <Route path="/" element={<Board />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('appState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        console.error('Failed to load state from local storage:', error);
        return undefined;
    }
};

export default App;
