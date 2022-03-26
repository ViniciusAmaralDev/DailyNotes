import React, { useReducer, createContext } from "react";
import theme from "./Theme";
import { notes } from "./Note";
import reducer from "./Reducer";
import { State, Theme } from "../interfaces";

const initialState: State = {
  notes,
};

type Context = {
  state: State;
  dispatch: React.Dispatch<any>;
  theme: Theme;
};

const Context = createContext<Context>({} as Context);

export const ContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, theme, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
