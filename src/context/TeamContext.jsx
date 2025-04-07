// src/context/TeamContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const TeamContext = createContext();

const initialState = {
  players: [],
  loading: false,
  error: null,
};

function teamReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: true, error: null };
    case 'SET_PLAYERS':
      return { ...state, players: action.payload, loading: false };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

export const TeamProvider = ({ children }) => {
  const [state, dispatch] = useReducer(teamReducer, initialState);

  useEffect(() => {
    const fetchPlayers = async () => {
      dispatch({ type: 'SET_LOADING' });
      try {
        const res = await fetch('https://mocki.io/v1/0ddcc82f-9e2d-48b5-9026-8c7e080aa588');
        const data = await res.json();
        dispatch({ type: 'SET_PLAYERS', payload: data });
      } catch (err) {
        dispatch({ type: 'SET_ERROR', payload: err.message });
      }
    };

    fetchPlayers();
  }, []);

  return (
    <TeamContext.Provider value={{ state, dispatch }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => useContext(TeamContext);
