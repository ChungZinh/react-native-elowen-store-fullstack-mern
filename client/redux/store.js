import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './reducers/cartReducer'
import productSlice from './reducers/productReducer'
import favoriteReducer from './reducers/favoriteReducer'

export default configureStore ({
    reducer: {
        cart: cartReducer,
        product: productSlice,
        favorite: favoriteReducer,
    }
})