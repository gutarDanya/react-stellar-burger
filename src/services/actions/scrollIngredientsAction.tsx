export const GET_CURRENT_TAB = 'GET_CURRENT_TAB';
export const CLEAR_STATE_SCROLL_REDUCER: 'CLEAR_STATE_SCROLL_REDUCER' = 'CLEAR_STATE_SCROLL_REDUCER';

export const getCurrentTab = (currentTab: string) => {
    return ({ type: GET_CURRENT_TAB, payload: currentTab })
}

interface IGetCurrentTab {
    readonly type: typeof GET_CURRENT_TAB;
    payload: string;
}

interface IClearState {
    readonly type: typeof CLEAR_STATE_SCROLL_REDUCER
}

export type TScrollAction = IGetCurrentTab | IClearState
