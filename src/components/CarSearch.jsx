import { useDispatch, useSelector } from "react-redux";
import { changeTerm } from "../store/store";

const CarSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.cars.searchTerm);
  const handleSearchTerm = (event) => {
    dispatch(changeTerm(event.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="is-3 title">My Car</h3>
      <div className="search field is-horizontal">
        <label className="label"></label>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTerm}
          className="input"
        />
      </div>
    </div>
  );
};
export default CarSearch;
