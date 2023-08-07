import { useEffect, useState } from "react";
import "./App.css";
import LoadingSpinner from "./components/Loading/LoadingSpinner";
import Tours from "./Tours";
import BaseContainer from "./components/container/baseContainer";
import BaseButton from "./components/button/BaseButton";
const url = "https://course-api.com/react-tours-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      setTours(data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (tours.length === 0) {
    return (
      <BaseContainer>
        <div className="text-6xl text-gray-600 mt-16">There is no Tours</div>
        <div class="border-t-4 border-blue-500 w-48 mt-2 mb-3"></div>
        <BaseButton name="refresh" callback={() => fetchTours()} />
      </BaseContainer>
    );
  }
  return (
    <BaseContainer>
      <div className="text-6xl text-gray-600 mt-16">Tours</div>
      <div class="border-t-4 border-blue-500 w-48 mt-2 mb-3"></div>
      <Tours tours={tours} removeTour={removeTour} />
    </BaseContainer>
  );
}

export default App;
