import { message } from "antd";
import { useRouter } from "next/navigation";
import { clearCart } from "@/features/cart/cartSlice";
import { addOrder } from "@/features/order/orderSlice";
import { useAppSelector, useAppDispatch } from "@/hooks";
import CheckoutForm from "@/components/organisms/CheckoutForm";
import OrderDetailsCard from "@/components/organisms/OrderDetailsCard";

const Checkout = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { cartItems, totalPrice } = useAppSelector((state) => state.cart);

  const handleCheckout = async (data: any) => {
    const orderItems = cartItems.map((item) => {
      return {
        craft: item._id,
        quantity: item.quantity,
      };
    });

    const payload = {
      ...data,
      orderTotal: totalPrice,
      orderItems,
    };

    try {
      const result = await dispatch(addOrder(payload));
      if (result?.error) {
        return message.error(result.payload);
      }
      //if order is success clear cart and redirect to success page
      dispatch(clearCart());
      router.replace("/order/success");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <OrderDetailsCard items={cartItems} totalPrice={totalPrice} />
      </div>
      <div>
        <CheckoutForm handleFormSubmit={handleCheckout} />
      </div>
    </div>
  );
};

export default Checkout;
