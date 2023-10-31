import { useContext } from "react"
import { CartContext } from "../store"


export default function Carts(){
  const [state,dispatch] = useContext(CartContext);
// console.log('state',state.carLists);

    return(
      
        <div className="bg-light p-3">
          {/* {JSON.stringify(state.cartList)} */}
        <table className="table aligen-middle">
          <tbody>
            {state.cartList.map((item)=>{
              return (
            <tr key={item.id}>
              <td>
                <button type="button" className="btn btn-sm" onClick={()=>{
                  dispatch({
                    type:"REMOVE_CART_ITEM",
                    payload:{
                      ...item
                    }
                  })
                }} >X</button>
              </td>
              <td>
                <img src={item.img} alt="" className="table-img"></img>
              </td>
              <td>
                {item.title}
                <br />
                <small className="text-muted">NT$ {item.price}</small>
              </td>
              <td>
                <select className="form-select" 
                value={item.quantity}
                onChange={(e)=>{
                  e.preventDefault();
                  const selectQuantity = parseInt(e.target.value);
                  dispatch({
                    type:"CHANGE_CART_QUANTITY",
                    payload:{
                      ...item,
                      quantity:selectQuantity
                    }
                  })
                }}>
                  {[...Array(20)].map((_,i)=>{
                    return (
                      <option key={i} value={i+1} >{i+1}</option>
                    )
                  })}
                </select>
              </td>
              <td className="text-end">NT$  {item.price * item.quantity}</td>
            </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5} className="text-end">
             總金額 NT$ {state.total}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
}