export interface IState {
    modal: boolean;
    viewMode: boolean;
    viewData: string;
}

export interface IContext {
    state: IState;
    dispatch: React.Dispatch<IAction>;
}


interface CheackTodayAction {
    type: "CHECK_TODAY_MODAL";
}

interface CloseModalAction {
    type: "CLOSE_MODAL";
    payload: boolean;
}

interface OnHandleViewModeAction {
    type: "HANDLE_VIEW_MODE";
    payload: string;
}

interface OpenViewModeAction {
    type: "OPEN_VIEW_MODE";
    payload: boolean;
}

export type IAction = CheackTodayAction | OnHandleViewModeAction | OpenViewModeAction | CloseModalAction;