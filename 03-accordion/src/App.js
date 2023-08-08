import "./App.css";
import { useState } from "react";
import BaseContainer from "./components/container/baseContainer";
import BaseForm from "./components/forms/baseForm";
import Questions from "./Questions";
import questions from "./data";
function App() {
  const [activeId, setActiveId] = useState(null);
  const toggleActiveId = (id) => {
    if (id === activeId) setActiveId(null);
    else setActiveId(id);
  };
  return (
    <BaseContainer>
      <BaseForm>
        <Questions
          questions={questions}
          activeId={activeId}
          toggleActiveId={toggleActiveId}
        ></Questions>
      </BaseForm>
    </BaseContainer>
  );
}

export default App;
