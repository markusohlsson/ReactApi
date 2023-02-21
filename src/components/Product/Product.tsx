import { IProductSmall } from "../../models/IProductSmall";

interface IProductProps{
product:IProductSmall;
addToCart(p:IProductSmall):void;
}

export const Product = (props:IProductProps) => {
const handleClick=()=>{
    props.addToCart(props.product);
};
    return (
      <div className="product">
        <h4>{props.product.name}</h4>
        <div className="image-container">
            <img src={props.product.imageUrl} alt= {props.product.name}>

            </img>
        </div>
        <p>{props.product.price} Kr</p>
        <button onClick={handleClick}> Lägg till varukorg</button>
      </div>
    );
  };
  