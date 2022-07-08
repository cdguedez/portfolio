const Button = ({ children, border, full, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-inherit p-2 rounded-md hover:bg-blue-400 hover:text-white transition-all duration-200 ${border ? 'border-blue-400 border-2' : ''} ${full ? 'w-full' : 'm-2'}`}
    >
      {children}
    </button>
  )
}

export default Button
