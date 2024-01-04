import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: []
    },
    reducers: {
        getProducts: (state, action) => {
            state.product.push({...action.payload});
        },
        favorited: (state, action) =>{
            const itemPresent = state.product.find(
                (item) => item.id === action.payload.id
            );
                
            if(itemPresent) {
                itemPresent.favorited = !itemPresent.favorited;
            }else{
                itemPresent.favorited = true;
            }

        },
        incrementQty: (state, action) => { 
            const itemPresent = state.product.find(
                (item) => item.id === action.payload.id
            );
                itemPresent.quantity++;
        },
        decrementQty: (state, action) => { 
            const itemPresent = state.product.find(
                (item) => item.id === action.payload.id
            );
            if (itemPresent.quantity == 1) {
                const removeFromCart = state.product.filter(
                    (item) => item.id!== action.payload.id
                );
                state.product = removeFromCart;
            } else {
                itemPresent.quantity--;
            }
        },
        removeProduct: (state, action) => {
            const removeFromCart = state.product.filter(
                (item) => item.id!== action.payload.id
            );
            state.product = removeFromCart;
        }
    }
});
    
export const { getProducts, incrementQty ,favorited, decrementQty, removeProduct } = productSlice.actions;

export default productSlice.reducer;