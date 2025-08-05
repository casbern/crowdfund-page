
interface ButtonProps {
  children: React.ReactNode
  disabled?: boolean
}

 const Button = ({ children, disabled }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`
         py-4 px-10  rounded-4xl text-white font-bold
        ${disabled ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
          : "bg-call-action  hover:bg-call-action-hover cursor-pointer"}
      `}>
        { children }
    </button>
  )
}

export default Button