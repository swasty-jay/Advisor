function Button({ children, className = "" }) {
  return (
    <button
      className={`text-white bg-green-500 rounded-full py-2 px-6 font-bold hover:bg-green-600 w-40 h-14 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
