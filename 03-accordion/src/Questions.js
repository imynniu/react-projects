import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, toggleActiveId, activeId }) => {
  return (
    <>
      <div className="text-4xl text-gray-800   capitalize my-8">questions</div>
      {questions.map((question) => {
        const { id } = question;
        return (
          <SingleQuestion
            key={id}
            question={question}
            activeId={activeId}
            toggleActiveId={toggleActiveId}
          ></SingleQuestion>
        );
      })}
    </>
  );
};
export default Questions;
