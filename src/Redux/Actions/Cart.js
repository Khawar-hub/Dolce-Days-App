import { ADDITEM,ADDQUANTITY,REMOVEITEM, REMOVEQUANTITY} from '../Types';
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
export const setAddQuantity=(payload)=>{
    return{
        type:ADDQUANTITY,
        payload: payload
    }
}
export const setRemoveQuantity=(payload)=>{
    return{
        type:REMOVEQUANTITY,
        payload: payload
    }
}