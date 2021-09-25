import { CATEGORY_FETCH, IMAGE_FETCH } from "../types/types";

const initialState = {
  categories: [],
  images: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log('state',state);

  switch (type) {
    case CATEGORY_FETCH:
      return {
        ...state,
        categories: [...state.categories, ...payload],
      };
    case IMAGE_FETCH:
      return {
        ...state,
        images: [...state.images, ...payload],
      };
    default:
      return state;
  }
};

export default reducer;
