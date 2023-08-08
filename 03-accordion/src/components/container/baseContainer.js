const BaseContainer = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-sky-200 w-full h-full min-h-screen">
      {children}
    </div>
  );
};
export default BaseContainer;
