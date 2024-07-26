import userActionsType from "./actions-type";

const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionsType.LOGIN:
      return { ...state, currentUser: action.payload };
    case userActionsType.LOGOUT:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};

export default userReducer;
