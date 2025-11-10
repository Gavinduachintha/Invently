const Checkbox = ({ label, checked, onChange, name }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2"
      />
      {label && (
        <label
          htmlFor={name}
          className="ml-2 text-sm text-gray-700 cursor-pointer"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
