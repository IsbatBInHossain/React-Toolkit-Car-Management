import { useDispatch, useSelector } from "react-redux";
import { deleteCar } from "../store/store";

const CarList = () => {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(({ cars: { searchTerm, list }, form }) => {
    const filterdList = list.filter((car) =>
      car.name.toLowerCase().includes(searchTerm)
    );
    return {
      cars: filterdList,
      name: form.name,
    };
  });

  const handleDelete = (car) => {
    dispatch(deleteCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    let carInfo;
    if (car.name.toLowerCase().includes(name.toLowerCase()) && name !== "") {
      carInfo = (
        <p>
          <strong>
            {car.name} - ${car.cost}
          </strong>
        </p>
      );
    } else {
      carInfo = (
        <p>
          {car.name} - ${car.cost}
        </p>
      );
    }
    return (
      <div key={car.id} className="panel">
        {carInfo}
        <button className="button is-danger" onClick={() => handleDelete(car)}>
          Delete
        </button>
      </div>
    );
  });

  return <div className="car-list">{renderedCars}</div>;
};
export default CarList;
