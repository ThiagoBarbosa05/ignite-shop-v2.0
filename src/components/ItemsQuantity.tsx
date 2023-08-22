import { RootState } from "@/app/store"
import { useSelector } from "react-redux"

export function ItemsQuantity() {
    const cart = useSelector((state: RootState) => state.cart.items)
  const itemsQuantity = cart.length
    return <span>{itemsQuantity}</span>
}