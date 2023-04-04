import { useSelector } from "react-redux";

const CarValue = () => {
  const totalCost = useSelector(({ cars: { searchTerm, list } }) => {
    const filteredCars = list.filter((car) =>
      car.name.toLowerCase().includes(searchTerm)
    );
    return filteredCars.reduce((acc, cars) => acc + cars.cost, 0);
  });

  return <div className="car-value">Total Cost: ${totalCost}</div>;
};
export default CarValue;
