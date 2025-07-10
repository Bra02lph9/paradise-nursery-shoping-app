import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // chaque item aura { id, name, quantity, price, ... }
  },
  reducers: {
    addItem: (state, action) => {
      // action.payload = { id, name, price, ... }
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0) {
        // Si l'item existe déjà, on augmente la quantité
        state.items[itemIndex].quantity += 1;
      } else {
        // Sinon, on ajoute l'item avec quantité = 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      // action.payload = id de l'item à retirer
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    updateQuantity: (state, action) => {
      // action.payload = { id, quantity }
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0) {
        // Met à jour la quantité seulement si >= 1, sinon supprime l'item
        if (action.payload.quantity > 0) {
          state.items[itemIndex].quantity = action.payload.quantity;
        } else {
          // supprime l'item si quantité <= 0
          state.items.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
