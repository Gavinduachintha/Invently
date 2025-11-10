const Divider = ({ text }) => {
  return (
    <div className="relative flex items-center">
      <div className="flex-grow border-t border-gray-300"></div>
      {text && (
        <span className="flex-shrink mx-4 text-sm text-gray-500">{text}</span>
      )}
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

export default Divider;
