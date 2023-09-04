export const GET_CURRENT_TAB = 'GET_CURRENT_TAB';

export const getCurrentTab = (currentTab) => {
    return ({type: GET_CURRENT_TAB, payload: currentTab})
}
