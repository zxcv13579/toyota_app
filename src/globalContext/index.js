import React from 'react';
import {createContext, useReducer} from 'react';

export const GlobalContext = createContext();

const initialState = {
  audioThumbVisibility: 'hidden',
  currentAudioTrack: {},
  backTitle: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setVisibility':
      return {...state, audioThumbVisibility: action.payload};
    case 'setCurrentAudioTrack':
      return {
        ...state,
        currentAudioTrack: {
          ...action.payload,
        },
      };
    case 'setBackTitle':
      return {
        ...state,
        backTitle: action.payload,
      };
    default:
      return state;
  }
};

const Global = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Global;
