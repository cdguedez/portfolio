const Button = ({ children, border, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-inherit p-2 rounded-md m-2 hover:bg-blue-400 hover:text-white transition-all duration-200 ${border ? 'border-blue-400 border-2' : ''}`}
    >
      {children}
    </button>
  )
}

export default Button
