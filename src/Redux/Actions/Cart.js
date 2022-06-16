import { ADDITEM,ADDQUANTITY,REMOVEITEM, REMOVEQUANTITY,EMPTYCART} from '../Types';
export const addItem = payload => {
    return {
        type:ADDITEM,
        payload: payload
    }
};
export const removeItem = (payload) => {
    return {
        type: REMOVEITEM,
        payload: payload
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
export const emptyCart=(payload)=>{
    return{
        type:EMPTYCART,
        payload: payload
    }
}