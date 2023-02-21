import axios from "axios";
import { IProductSmall } from "../models/IProductSmall";

export const getProducts = async() => {
    let response = await axios.get<IProductSmall[]>("https://medieinstitutet-wie-products.azurewebsites.net/api/products/");

    return response.data;
}
