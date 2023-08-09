import { TiPin } from "react-icons/ti";
const Duties = ({ duties }) => {
  return (
    <div className="flex flex-col  ">
      {duties.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-raw justify-start items-center my-4 gap-8"
          >
            <div className="text-xl text-emerald-500">
              <TiPin></TiPin>
            </div>
            <div className="text-gary-600 indent-4">{item}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
