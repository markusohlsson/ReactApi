import { cartItem } from "../../models/cartItem";
import { CartSmall } from "../CartSmall/CartSmall";

interface INavProps{
cart: cartItem[];
}
export const Nav = (props:INavProps) => {
    return (
      <>
      <CartSmall cart={props.cart}></CartSmall>
      </>
    );
  };
  