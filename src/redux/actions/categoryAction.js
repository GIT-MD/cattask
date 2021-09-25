import { CATEGORY_FETCH, IMAGE_FETCH } from "../types/types";

export const categoryAction = (data) => {
  return {
    type: CATEGORY_FETCH,
    payload: data,
  };
};

export const createCardAsynchThunk = () => async (dispatch) => {
  let myHeaders = new Headers();
  myHeaders.append("x-api-key", "DEMO-API-KEY");

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  let request = await fetch(
    "https://api.thecatapi.com/v1/categories",
    requestOptions
  );
  await request
    .json()
    .then((res) => dispatch(categoryAction(res)))
    .catch((err) => console.log(err));
};

export const imageAction = (data) => {
  return {
    type: IMAGE_FETCH,
    payload: data,
  };
};
export const createImagesAsynchThunk = () => async (dispatch) => {
  let myHeaders = new Headers();
  myHeaders.append("x-api-key", "DEMO-API-KEY");
  let requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  let request = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1",
    requestOptions
  );
  await request
    .json()
    .then((res) => dispatch(imageAction(res)))
    .catch((err) => console.log(err));
};
