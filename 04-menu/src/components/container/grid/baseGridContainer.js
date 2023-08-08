const BaseGridContainer = ({ children }) => {
  return (
    <div className="w-4/5 p-4  ">
      {/* 这个容器占页面的1/2宽度，有内边距和圆角边框 */}
      <div className="grid grid-flow-row  grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative ">
        {children}
      </div>
    </div>
  );
};
export default BaseGridContainer;
