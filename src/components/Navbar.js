import { useContext } from "react"
import { CartContext } from "../store"

export default function Navbar (){
 const [state] = useContext(CartContext);
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand" href="#">
            甜點蛋糕店
          </span>
          <button
            className="btn btn-outline-dark position-relative"
            type="submit"
          >
            購物車
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {state.cartList.length}
            </span>
          </button>
        </div>
      </nav>
    )
}