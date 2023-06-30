import { useContext } from "react";
import { PizzasContext } from "../context/PizzasContext";

const Cart = () => {
  const {cart, increment, decrement, total} = useContext(PizzasContext);
  return (
    <div className="container">
      <h5 className="mt-3">Detalles del pedido:</h5>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Pizza</th>
            <th scope="col">Valor</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Quitar</th>
            <th scope="col">Agregar</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>
                <img src={item.img} className="img-thumbnail" width={70} alt=""/>
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.count}</td>
              <td>
                <button className="btn btn-danger" onClick={() => decrement(index)}>-</button>
              </td>
              <td>
                <button className="btn btn-info" onClick={() => increment(index)}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total: ${total}</h3>
    </div>
  )
}

export default Cart;