import List from "./components/List";
import "./App.css";
import BaseForm from "./components/forms/baseForm";
import BaseButton from "./components/button/BaseButton";
import peoples from "./data";
import { useState } from "react";
function App() {
  const [people, setPeople] = useState(peoples);
  return (
    <div className="w-screen h-screen bg-sky-50 flex justify-center items-center ">
      <BaseForm>
        <h3 className="w-full h-auto text-base text-gray-800 mb-3 mt-2 px-3 ">
          {people.length} birthdays today
        </h3>
        <List people={people}></List>
        <BaseButton
          name="Clear All"
          callback={() => {
            setPeople([]);
          }}
        />
      </BaseForm>
    </div>
  );
}

export default App;
