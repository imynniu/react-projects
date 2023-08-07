const BaseForm = ({ children }) => {
  return (
    <div className="w-full  h-auto   bg-white flex flex-col items-center  rounded-md  relative shadow hover:shadow-lg">
      {children}
    </div>
  );
};
export default BaseForm;
