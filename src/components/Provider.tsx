import { ReactNode, useReducer, createContext } from "react";
import { IAction, IContext, IState } from "utils/types";

const initialState:IState = {
    modal: true,
    viewMode: false,
    viewData: "showroom",
    headerType: "NORMAL"
};

function reducer(state:IState, action:IAction){
    switch(action.type){
        case "CHECK_TODAY_MODAL":
            const cookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith("ces_cookie="));
            if (cookie && cookie.trim().endsWith("true")) {
                return { ...state, modal: false };
            } else {
                return { ...state, modal: true };
            }
        case "CLOSE_MODAL":
            return { ...state, modal: action.payload };
        case "OPEN_VIEW_MODE":
            return { ...state, viewMode: action.payload };
        case "HANDLE_VIEW_MODE":
            return { ...state, viewData: action.payload };
        case "HANDLE_HEADER":
            return { ...state, headerType: action.payload };
    default:
        return state;
    }
}

export const Context = createContext<IContext | undefined>(undefined);

export function Provider({ children }:{ children : ReactNode}) {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    );
  }