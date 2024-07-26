import cartActionsType from "./actions-type";

export const addProductToCart = (payload) => ({
  type: cartActionsType.ADD_PRODUCT,
  payload,
});

export const removeProductFromCart = (payload) =>({
    type: cartActionsType.REMOVE_PRODUCT,
    payload,
})
