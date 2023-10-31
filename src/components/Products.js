import { useContext } from "react"

import productsData from "../productsData";
import { CartContext } from "../store"


export default function Products(){
 
  
    const [state,dispatch] = useContext(CartContext);
    return (
        <div className="row row-cols-3 g-3">
              {productsData.map((product)=>{
                return(
                   <div className="col" key={product.id}>
                   <div class="card">
                     <img
                       src={product.img}
                       class="card-img-top"
                       alt="..."
                     />
                     <div class="card-body">
                       <h6 class="card-title">
                       {product.title}
                         <span className="float-end">NT {product.price}</span>
                       </h6>
                       <button type="button" class="btn btn-outline-primary w-100"
                         onClick={()=>{
                          dispatch({
                              type:"ADD_TO_CART",
                              payload:{
                                  ...product,
                                  quantity:1
                              },
                          });
                      }}>
                         加入購物車
                       </button>
                     </div>
                   </div>
                 </div>
                )
            })}  
          
        {/* <div className="col">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1697544663357-24835b6f680b?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h6 class="card-title">
                蔬菜
                <span className="float-end">NT 500</span>
              </h6>
              <button type="button" class="btn btn-outline-primary w-100"
                // onClick={()=>{
                //     dispatch({
                //         type:"ADD_TO_CART"
                //         payload:{
                //             .
                //         }
                //     })
                // }}
                >
                Go somewhere
              </button>
            </div>
          </div>
        </div>

        <div className="col">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1682687982107-14492010e05e?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h6 class="card-title">
                蔬菜
                <span className="float-end">NT 500</span>
              </h6>
              <button type="button" class="btn btn-outline-primary w-100">
                Go somewhere
              </button>
            </div>
          </div>
        </div>

        <div className="col">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1697544663357-24835b6f680b?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h6 class="card-title">
                蔬菜
                <span className="float-end">NT 500</span>
              </h6>
              <button type="button" class="btn btn-outline-primary w-100">
                Go somewhere
              </button>
            </div>
          </div>
        </div>

        <div className="col">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1697544663357-24835b6f680b?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h6 class="card-title">
                蔬菜
                <span className="float-end">NT 500</span>
              </h6>
              <button type="button" class="btn btn-outline-primary w-100">
                Go somewhere
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1697544663357-24835b6f680b?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h6 class="card-title">
                蔬菜
                <span className="float-end">NT 500</span>
              </h6>
              <button type="button" class="btn btn-outline-primary w-100">
                Go somewhere
              </button>
            </div>
          </div>
        </div> */}
      </div>
    )
}