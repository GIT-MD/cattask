import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { imagesAsyncThunk, moreCats } from "../../redux/actions/categoryAction";
import "./Images.scss";

const Images = () => {
  const { page, id } = useParams();
  let flag = window.location.pathname === "/";
  const [pageNum, setPageNum] = useState({ page: page || 1, id: id || 1 });
  const imageState = useSelector((state) => state.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(imagesAsyncThunk(page, id));
  }, [page, id]);

  const addMoreCats = () => {
    const { id, page } = pageNum;
    dispatch(moreCats(id, page));
  };

  return (
    <>
      <div className="image">
        {imageState.map((image) => (
          <div className="image__image_container" key={image.id}>
            <div className="image__cards">
              <img className="image__img" src={image.url} alt={image.name} />
            </div>
          </div>
        ))}
      </div>
      {!flag ? (
        <NavLink to={`/cats/${page}/${id}`}>
          <button
            className="add_more_cats"
            onClick={() => {
              addMoreCats();
            }}
          >
            Add More Cats
          </button>
        </NavLink>
      ) : null}
    </>
  );
};

export default Images;
