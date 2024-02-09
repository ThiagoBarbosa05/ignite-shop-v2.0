import { Header } from "@/styles/pages/app";
import Image from "next/image";
import { ItemsQuantity } from "./ItemsQuantity";
import logoImg from '../assets/logo.svg'
import bag from '../assets/bag.svg'
import bagHasItems from '../assets/bag-card-product.svg'
import closeCart from '../assets/close.svg'
import check from '../assets/check.svg'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import * as Dialog from '@radix-ui/react-dialog'
import { CartContainer, CartItems, ContentItem} from "@/styles/pages/cart";
import { removeItemFromCart } from "@/features/cartSlice";
import { useState } from "react";
import axios from "axios";
import { CartEmpty } from "./CartEmpty";
import Link from "next/link";

export function HeaderApp() {

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
    const cart = useSelector((state: RootState) => state.cart.items)
    const dispatch = useDispatch()
    const itemsQuantity = cart.length > 0
   
    const totalQuantity = cart.reduce((total, cart) => total + cart.quantity, 0)
    const totalPrice = cart.reduce((total, cart) => total + cart.quantity * cart.newPrice!, 0)

    async function handleBuyButton() {
      try {
        setIsCreatingCheckoutSession(true)
  
        const response = await axios.post('/api/checkout', {
          lineItems: cart.map(item => {
            return {
              price: item.defaultPriceId,
              quantity: item.quantity
            }
          })
        })
  
        const {checkoutUrl} = response.data
  
        window.location.href = checkoutUrl
  
  
      } catch(err) {
        setIsCreatingCheckoutSession(false)
        alert('Falha ao redirecionar ao checkout!')
      }
    }
    
    return (
      <Dialog.Root>
           <Header>
            <Link href='/'>
              <Image src={logoImg} alt="" />
            </Link>
              <div>
                <Dialog.Trigger asChild>
                  <button disabled={!itemsQuantity}>
                    <Image src={itemsQuantity ? bagHasItems : bag} width={24} height={24} alt="" />
                  </button>
                </Dialog.Trigger>
                {itemsQuantity && <ItemsQuantity />}
              </div>            
            </Header>
            <Dialog.Portal>
              
              <CartContainer>

                <Dialog.Close asChild>
                  <button>
                    <Image src={closeCart} width={24} height={24} alt="" />
                  </button>
                </Dialog.Close>
                <h3>Sacola de items</h3>
                <CartItems>
                  
                  {cart.map(item => (
                    <ContentItem key={item.id}>
                        <div>
                          <Image src={item.imageUrl} width={95} height={95} alt="" />
                        </div>
                        <div>
                          <p>{item.name} <span>quantidade: {item.quantity}</span></p>
                          <strong>{item.price}</strong>
                          <button onClick={() => dispatch(removeItemFromCart(item.id))}>Remover</button>
                        </div>
                    </ContentItem>
                  ))}
                </CartItems>
                {itemsQuantity && 
                <footer>
                  <div>
                    <span>Quantidade</span>
                    <span>{totalQuantity} itens</span>
                  </div>
                  <div>
                    <strong>Valor total</strong>
                    <strong>{new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(totalPrice)}</strong>
                  </div>

                  <button disabled={isCreatingCheckoutSession} onClick={handleBuyButton}>
                    {isCreatingCheckoutSession ?  <Image src={check} width={24} height={24} alt="" /> : 'Finalizar compra'}
                  </button>
              </footer>}
              
              {!itemsQuantity && <CartEmpty />}
            </CartContainer>

              
            </Dialog.Portal>
      </Dialog.Root>
       
    )
}