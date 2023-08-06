const BaseAvator = ({ url, alt }) => {
  return (
    <div className="w-10 h-10">
      <img
        src={url}
        alt={alt}
        className="w-full h-full object-cover rounded-full"
      ></img>
    </div>
  );
};
export default BaseAvator;
