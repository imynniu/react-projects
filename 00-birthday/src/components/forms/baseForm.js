const BaseForm = ({ children }) => {
  return (
    <div className="w-72 h-auto bg-white flex flex-col items-center  rounded-md shadow-md">
      {children}
    </div>
  );
};
export default BaseForm;
