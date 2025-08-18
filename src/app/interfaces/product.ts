import { ProductOption } from "./product-option";

export interface Product {
     name: string;
  options?: ProductOption[];
  size?: string
  price?: string
}
