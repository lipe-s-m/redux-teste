import userActionsType from "./actions-type";

export const loginUser = (payload) => ({
  type: userActionsType.LOGIN,
  payload,
});
export const logoutUser = () => ({
  type: userActionsType.LOGOUT,
});
