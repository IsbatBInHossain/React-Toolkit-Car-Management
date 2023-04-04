import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName, store } from "../store/store";

const CarForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => state.form);
  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  const handleCostChange = (event) => {
    dispatch(changeCost(parseInt(event.target.value) || 0));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name: </label>
            <input
              type="text"
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost: </label>
            <input
              type="number"
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
          <div className="field">
            <button className="is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CarForm;
