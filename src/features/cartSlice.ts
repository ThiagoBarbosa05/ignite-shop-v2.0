import { convertCurrencyStringToNumber } from '@/lib/convertCurrencyStringToNumber';
import { createSlice } from '@reduxjs/toolkit'


export interface CartTypeStore {
    items: {
        id: string;
        name: string;
        imageUrl: string;
        price: string;
        quantity: number;
        newPrice?: number;
        defaultPriceId: string
      }[];
}

const initialState: CartTypeStore = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const itemAlreadyExists = state.items.find(item => item.id === action.payload.id);
            if(itemAlreadyExists) {
                itemAlreadyExists.quantity += action.payload.quantity
            } else {
                
                const newState = {
                    ...action.payload,
                    newPrice: convertCurrencyStringToNumber(action.payload.price)
                }
                state.items.push(newState);
            } 
        },
        removeItemFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }

})


export const {addItemToCart, removeItemFromCart} = cartSlice.actions

export default cartSlice.reducer