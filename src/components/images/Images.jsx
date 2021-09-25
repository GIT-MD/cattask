import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createImagesAsynchThunk } from "../../redux/actions/categoryAction";

const Images = () => {
  const imageState = useSelector((state) => state.images);
  const dispatch = useDispatch();
  console.log(imageState);

  useEffect(() => {
    dispatch(createImagesAsynchThunk());
  }, []);

  return (
    <div>
      {imageState.map((image) => (
        <div className="image_container" key={image.id}>
          <div className="image_container__cards">
            <img src={image.url} alt={image.name} />
            <div className="image_container__name">{image.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Images;
