import { IAddress } from "./IAddress";
import { ICustomer } from "./ICustomer";
import { IProducts } from "./Products";

export interface IOrder{
    orderId:number,
    orderDate:Date,
    orderStatus:number,
    customer:ICustomer,
    address:IAddress,
    product:IProducts
}