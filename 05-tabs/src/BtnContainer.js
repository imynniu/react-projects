const BtnConatinner = ({ company, handleClick, activeId }) => {
  return (
    <div className="flex flex-raw gap-3 my-8 lg:flex-col lg:justify-center ">
      {company.map((item, index) => {
        return (
          <div key={item} className="pr-4">
            <button
              onClick={() => handleClick(item)}
              className={
                activeId === item
                  ? `text-emerald-500 lg:border-l-4 lg:border-emerald-500 text-center w-32`
                  : `hover:text-emerald-500 hover:border-emerald-400 w-32 hover:border-b-4  lg:hover:border-l-4 lg:hover:border-b-0`
              }
            >
              {item}
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default BtnConatinner;
