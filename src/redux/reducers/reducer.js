import { CATEGORY_FETCH, IMAGE_FETCH, MORE_CATS } from "../types/types";

const initialState = {
  categories: [],
  cats: [],
  route: {
    page: 1,
    id: 1,
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_FETCH:
      return {
        ...state,
        categories: payload,
      };
    case IMAGE_FETCH:
      return {
        ...state,
        cats: payload,
      };
    case MORE_CATS:
      return {
        ...state,
        cats: [...state.cats, ...payload],
        route: {
          page: state.route.page + 1,
          id: state.route.id,
        },
      };
    default:
      return state;
  }
};

export default reducer;
