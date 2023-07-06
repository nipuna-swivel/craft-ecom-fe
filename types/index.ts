export interface ICraft {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
}

export interface ICraftState {
  crafts: ICraft[];
  craft: ICraft | null;
  loading: boolean;
  error: string | null;
}

export interface ICartItem extends ICraft {
  quantity: number;
}

export interface ICartState {
  cartItems: ICartItem[];
  totalPrice: number;
}

export interface IOrderItem {
  _id: string;
  craft: ICraft;
  quantity: number;
}

export interface IOrder {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  deliveryAddress: string;
  postalCode: string;
  phoneNumber: string;
  orderTotal: number;
  orderItems: IOrderItem[];
}

export interface IOrderState {
  loading: boolean;
  error: string | null;
  orders: IOrder[];
  analytics: {
    totalSales: number;
    totalOrders: number;
    totalCraftsSold: number;
    craftsSoldCount: { name: string; quantity: number }[];
    topFiveCraftsSold: { name: string; quantity: number }[];
  };
}
