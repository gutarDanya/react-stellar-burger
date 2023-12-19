export const GET_CURRENT_TAB = 'GET_CURRENT_TAB';

export const getCurrentTab = (currentTab: string) => {
    return ({type: GET_CURRENT_TAB, payload: currentTab})
}

interface IGetCurrentTab {
    readonly type: typeof GET_CURRENT_TAB;
    payload: string;
}

export type TScrollAction = IGetCurrentTab
