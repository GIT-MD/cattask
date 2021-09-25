import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCardAsynchThunk } from "../../redux/actions/categoryAction";

const Sidebar = () => {
  const categoryState = useSelector((state) => state.categories);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(createCardAsynchThunk());
  }, []);

  return (
    <div>
      {categoryState.map((card) => (
        <div key={card.id}>{card.name}</div>
      ))}
    </div>
  );
};

export default Sidebar;
