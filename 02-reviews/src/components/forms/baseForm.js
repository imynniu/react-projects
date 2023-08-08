const BaseForm = ({ children }) => {
  return (
    <div className="w-1/2  h-auto   bg-white flex flex-col justify-center items-center  rounded   shadow ">
      {children}
    </div>
  );
};
export default BaseForm;
