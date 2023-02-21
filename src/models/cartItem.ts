import { IProductSmall } from "./IProductSmall";

export class cartItem {
    constructor(public product:IProductSmall, public quantity:number){}
}