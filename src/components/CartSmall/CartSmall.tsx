import { useState } from "react";
import { cartItem } from "../../models/cartItem";
interface ICartSmallProps{
  cart:cartItem[];
}

export const CartSmall = (props:ICartSmallProps) => {

    return (
      <nav>
        {props.cart.length}
      </nav>
    );
  };
  