import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items:[]
  },
  reducers: {
    
      addItemToCart: (state, action) => {

         const existingProduct = state.items.find(item => item.id === action.payload.id)
         if (existingProduct) {
        existingProduct.quantity += 1
      }
      else {
           state.items.push({
            ...action.payload,
            quantity: 1
           })
      }     
    },

    incrementItem: (state, action) => {
      const itemsToIncrement = state.items.find(item => item.id === action.payload.id)
      if (itemsToIncrement) {
        itemsToIncrement.quantity += 1
        console.log('Updated Items:', state.items); // Add this
      }
    },
    DecrementItem: (state, action) => {
      const itemsToDecrement = state.items.find(item => item.id === action.payload.id)
      if (itemsToDecrement && itemsToDecrement.quantity > 1) {
        itemsToDecrement.quantity -= 1
      }
      else {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        state.items.splice(index, 1);
      }
    },

    removeItem: (state,action)=>{
      const index=state.items.findIndex(item => item.id === action.payload.id );
        if (index !== -1) {
          // array.splice(startIndex, deleteCount);
    state.items.splice(index, 1); 
       }
    }



  }
})

// Action creators are generated for each case reducer function
export const { addItemToCart,incrementItem, DecrementItem,removeItem  } = cartSlice.actions

export default cartSlice.reducer