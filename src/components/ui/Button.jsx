const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  fullWidth = false,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[#8458B3] text-white hover:bg-[#6d3fa0] focus:ring-[#8458B3] shadow-sm hover:shadow-md disabled:hover:bg-[#8458B3]",
    secondary:
      "bg-[#a28089] text-white hover:bg-[#8b6572] focus:ring-[#a28089] shadow-sm hover:shadow-md disabled:hover:bg-[#a28089]",
    ghost:
      "text-[#a28089] hover:text-[#8458B3] hover:bg-[#f1eef8] focus:ring-[#a28089] disabled:hover:bg-transparent",
    danger:
      "bg-[#d9534f] text-white hover:bg-[#c9302c] focus:ring-[#d9534f] shadow-sm hover:shadow-md disabled:hover:bg-[#d9534f]",
    white:
      "bg-white text-[#8458B3] border-2 border-[#8458B3] hover:bg-[#8458B3] hover:text-white focus:ring-[#8458B3] shadow-sm hover:shadow-md disabled:hover:bg-white",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
