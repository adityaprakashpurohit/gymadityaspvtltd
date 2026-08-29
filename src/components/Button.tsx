

export const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 font-display uppercase tracking-wider transition-all duration-300";
  const variants = {
    primary: "bg-brand-accent text-brand-black hover:bg-white",
    secondary: "bg-white text-brand-black hover:bg-gray-200",
    outline: "border-2 border-white text-white hover:bg-white hover:text-brand-black",
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {children}
    </button>
  );
};
