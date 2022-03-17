import React from "react";
import "../../../styles/components/Checkout/checkout.css";
import { store } from "../../../index";
import CheckoutItem from "./CheckoutItem";
import { getBasketTotal } from "../../../redux/slice";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  return (
    <div className="checkout">
      <div className="checkout__items">
        {store.getState().user.basket.map((item, i) => {
          return (
            <CheckoutItem
              key={i}
              image={item.image}
              link={item.link}
              name={item.name}
              rating={item.rating}
              price={item.price}
              genre={item.genre}
              description={item.description}
              id={item.id ? item.id : 0}
            />
          );
        })}
      </div>
      <div className="checkout__info-container">
        <div className="checkout__info">
          <div className="checkout__subtotal">
            Subtotal ({store.getState().user.basket.length} items):{" "}
            <strong> $ {getBasketTotal(store.getState().user.basket)}</strong>
          </div>
          <div className="checkout__gift">
            <input type="checkbox" /> This order contains a gift
          </div>
          <button onClick={() => navigate("/payment")}>
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
