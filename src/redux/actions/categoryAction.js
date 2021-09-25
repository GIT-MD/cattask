import { CATEGORY_FETCH, IMAGE_FETCH, MORE_CATS } from "../types/types";

export const categoryAction = (data) => {
  return {
    type: CATEGORY_FETCH,
    payload: data,
  };
};

export const categoriesAsyncThunk = () => async (dispatch) => {
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
export const imagesAsyncThunk =
  (page = 1, id = 1) =>
  async (dispatch) => {
    let myHeaders = new Headers();
    myHeaders.append("x-api-key", "DEMO-API-KEY");
    let requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    let request = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${id}`,
      requestOptions
    );
    request
      .json()
      .then((res) => dispatch(imageAction(res)))
      .catch((err) => console.log(err));
  };

export const addCats = (data) => {
  return {
    type: MORE_CATS,
    payload: data,
  };
};
export const moreCats = (id, page) => async (dispatch) => {
  let req = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&page=${
      page
    }&category_ids=${id}`
  );
  let resp = await req.json();
  dispatch(addCats(resp));
};
