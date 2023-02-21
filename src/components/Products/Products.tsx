import { useEffect, useState } from "react";
import { IProductSmall } from "../../models/IProductSmall";
import { getProducts } from "../../services/productService";
import { Product } from "../Product/Product";

interface IProductsProps{
  addProductToCart(p:IProductSmall):void;
}

export const Products = (props:IProductsProps) => {
  const [products,setProducts] = useState<IProductSmall[]>([]);
  useEffect(()=>{
    const getData = async ()=>{
      let products = await getProducts();
      setProducts(products);
    }
    if(products.length>0) return;

    getData();
  });

  let productsHtml = products.map((product)=>{
    return <Product product={product} addToCart={props.addProductToCart}></Product>;
  });

    return (<div className="products">{productsHtml}</div>);
  };
  