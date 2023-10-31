import { createContext } from "react";

export const  caculateTotalPrice =function (cartList) {
    const array = cartList.map((item) => {
      return item.quantity * item.price;
    });
    // console.log(array);
    //reduce(a,b) 陣列累加：a > 目前累加值   b > 當前值
    const total = array.reduce((a, b) => {
      return a + b;
    }, 0);
    return total;
  }

export const CartContext = createContext({});
export const cartInit = {
    cartList:[],
  }
export const cartReducer = (state,action)=>{
    // console.log('act',action);
    const cartList = [...state.cartList];
      const itemIndex =  cartList.findIndex((item)=>{ return item.id === action.payload.id})
    switch(action.type){
      case "ADD_TO_CART":
        //#1 先取得當前購物車目標品項的索引
    
        if(itemIndex === -1){
          //加入項目不在購物車中
          cartList.push(action.payload);
        }
        else{
          cartList[itemIndex].quantity += action.payload.quantity;
        }

        
        
        return {
          ...state,
          cartList,
          total:caculateTotalPrice(cartList),
        }

      case "CHANGE_CART_QUANTITY":
        //#1 先找到品項索引
        cartList[itemIndex].quantity = action.payload.quantity;
        return {
          ...state,
          cartList,
          total:caculateTotalPrice(cartList),
        }

      case "REMOVE_CART_ITEM":
        cartList.splice(itemIndex,1);
        return {
          ...state,
          cartList,
          total:caculateTotalPrice(cartList),
        }
      default:
        return state;
    }
    

  }