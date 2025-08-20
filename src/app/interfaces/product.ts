import { ProductOption } from "./product-option";

export interface Product {
  id: number;
     name: string;
  options?: ProductOption[];
  size?: string
  price?: string
}
