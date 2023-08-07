import Tour from "./Tour";
import BaseGridContainer from "./components/container/grid/baseGridContainer";
const Tours = ({ tours, removeTour }) => {
  return (
    <BaseGridContainer>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </BaseGridContainer>
  );
};
export default Tours;
