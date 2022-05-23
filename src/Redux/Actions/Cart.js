import { ADDITEM,REMOVEITEM} from '../Types';
export const addItem = payload => {
    return {
        type:ADDITEM,
        payload: payload
    }
};
export const removeItem = () => {
    return {
        type: REMOVEITEM,
        payload: { uid: '' }
    }
};