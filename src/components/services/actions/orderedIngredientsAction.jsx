export const COLLECT_ORDER = 'COLLECT_ORDER';
export const OPEN_MODAL_WINDOW = 'OPEN_MODAL_WINDOW';
export const CLOSE_MODAL_WINDOW = 'CLOSE_MODAL_WINDOW';
export const SEND_ORDER = 'SEND_ORDER';

export const collectOrderGenerator = (ingredients) => {
    return{type: COLLECT_ORDER, payload: ingredients}
}
