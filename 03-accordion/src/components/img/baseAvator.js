const BaseAvator = ({ url, alt, controlClass }) => {
  return (
    <div className={`${controlClass}`}>
      <img
        src={url}
        alt={alt}
        className="w-full h-full object-cover rounded-full"
      ></img>
    </div>
  );
};
export default BaseAvator;
