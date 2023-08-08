import BaseAvator from "./img/baseAvator";

const List = ({ people }) => {
  console.log(people);

  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div
            key={id}
            className="w-full h-full flex flex-row  justify-start mb-5 px-4 gap-2 "
          >
            <BaseAvator url={image} alt={name}></BaseAvator>
            <div className="">
              <h4 className="text-sm text-gray-800">{name}</h4>
              <p className="text-xs text-gray-600">{age} years</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default List;
