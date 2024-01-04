import { createSlice } from "@reduxjs/toolkit";


const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorite: [],
    },
    reducers:{
        addToFavorite: (state, action) =>{
            const itemPresent = state.favorite.find(
                (item) => item.id === action.payload.id
            );
                
            if(itemPresent) {
                itemPresent.favorited = !itemPresent.favorited;
            }else{
                state.favorite.push({...action.payload, favorited: true})
            }
        },
        // removeFromFavorite: (state, action) => {
        //     const itemPresent = state.favorite.find(
        //         (item) => item.id === action.payload.id
        //     );
        //     const removeFromCart = state.favorite.filter(
        //         (item) => item.id !== itemPresent.id
        //     );
        //     state.product = removeFromCart;
        // }
        
    }
})


export const{ addToFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;