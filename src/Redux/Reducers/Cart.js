import { ADDITEM, ADDQUANTITY, EMPTYCART, REMOVEITEM, REMOVEQUANTITY } from '../Types';
const intialState = {
    cart: [],
    totalprice:0
   
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case ADDITEM: {
           console.log(action.payload[action.payload?.length-1].ProdPrice)
            return {
                ...state,
                cart: action.payload,
                totalprice:state.totalprice+parseInt(action.payload[action.payload?.length-1].ProdPrice)
               
              
            }
        }
case ADDQUANTITY:{
  
    let temp=[...state.cart]
    temp[action.payload.index].quantity=temp[action.payload.index].quantity+action?.payload?.quantity
   
    return{
        ...state,
        cart:temp,
        totalprice:state.totalprice+parseInt(action.payload.ProdPrice)
    }
}
case REMOVEQUANTITY:{
    let temp=[...state.cart]
    temp[action.payload.index].quantity=action?.payload?.quantity
    console.log(state.totalprice,action.payload.price)
 
    return{
        ...state,
        cart:temp,
        totalprice:state.totalprice-parseInt(action.payload.ProdPrice)
    }
}
        
        case REMOVEITEM: {
            let temp=[...state.cart]
           
             
          return{
              ...state,
              cart:temp.filter(item => item.id != action.payload.id),
              totalprice:state.totalprice-parseInt(action.payload.ProdPrice)
            
        }
    }
    case EMPTYCART: {
       
       
         
      return{
          ...state,
          cart:[],
          totalprice:0
          
        
    }
}
        default:
            return state

    }
}
export default reducer;