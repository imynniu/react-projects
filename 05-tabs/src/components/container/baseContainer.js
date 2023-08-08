const BaseContainer = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center bg-sky-50 w-full h-full min-h-screen">
      {children}
    </div>
  );
};
export default BaseContainer;
