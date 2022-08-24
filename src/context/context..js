import { createContext, useReducer } from "react";

const initialState = {
  sidebarOpen: false,
};

const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Context;
