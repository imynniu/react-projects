const BaseForm = ({ children }) => {
  return (
    <div className="w-3/5  h-auto mt-10 mb-10 bg-white flex flex-col justify-center items-center  rounded   shadow  ">
      {children}
    </div>
  );
};
export default BaseForm;
