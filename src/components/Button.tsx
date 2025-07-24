
interface ButtonProps {
  children: React.ReactNode;
}

 const Button = ({ children }: ButtonProps) => {
  return (
    <a href="#" className="cursor-pointer py-4 px-10 bg-call-action hover:bg-call-action-hover rounded-4xl text-white font-bold">
      { children }
    </a>
  )
}

export default Button