import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categoriesAsyncThunk,
  imagesAsyncThunk,
} from "../../redux/actions/categoryAction";
import { category } from "../../redux/selector/rootSelectors";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { categories, route } = useSelector((state) =>  state);

  const category = categories.map((category) => (
    <li key={category.id} className="Link">
      <NavLink
        onClick={() => dispatch(imagesAsyncThunk(1, category.id))}
        className="categorieslink"
        to={`/cats/${route.id}/${category.id}`}
      >
        {category.name}
      </NavLink>
    </li>
  ));

  useEffect(() => {
    dispatch(categoriesAsyncThunk());
  }, []);

  return (
    <div>
      <Router>
        <div>
          <ul className="category_list">{category}</ul>
        </div>
      </Router>
    </div>
  );
};

export default Sidebar;
