import { Trash } from "lucide-react";
import useCart from "../useHooks/useCart";

export default function CartItems({ item, serial }) {
  const { handleRemoveItem } = useCart();
  return (
    <tr>
      <th>{serial + 1}</th>
      <td>{item.title}</td>
      <td>{item.quantity}</td>
      <td>{item.quantity * item.price}</td>
      <td>
        {" "}
        <Trash
          size={20}
          className="text-gray-500 cursor-pointer hover:text-gray-950 hover:scale-105 transition-all"
          onClick={() => {
            handleRemoveItem(item);
          }}
        />
      </td>
    </tr>
  );
}
