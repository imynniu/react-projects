import Duties from "./Duties";
const JobInfo = ({ jobs }) => {
  const { title, dates, duties, company } = jobs[0];
  return (
    <div className="w-2/3 h-auto  flex flex-col  ">
      <div className="text-3xl text-gray-800 captialize">{title}</div>
      <div className="flex flex-raw mt-2">
        <div className="text-xl bg-gray-300 px-4 text-gray-600 w-auto rounded">
          {company}
        </div>
      </div>
      <div className="text-base text-gray-500 mt-3">{dates}</div>
      <Duties duties={duties} />
    </div>
  );
};
export default JobInfo;
