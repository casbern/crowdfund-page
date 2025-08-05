import Button from "./Button"

interface CardProps {
  title: string;
  pledge: number;
  description: string;
  left: number;
}

const Card = ({title, pledge, description, left}: CardProps) => {

  const isOutOfStock = left === 0

  return (
    <div className={`
        border border-border rounded-lg p-9 mb-6 
        ${isOutOfStock ? "opacity-50 cursor-not-allowed" : ""}
      `}>
      <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between mb-6">
        <h3 className="text-lg font-bold">{title}</h3>
        <span className="text-sm font-medium text-call-action">Pledge ${pledge} or more</span>
      </div>

      <p className="mb-6 text-base font-normal text-txt">
        {description}
      </p>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex items-center gap-2  mb-6 md:mb-0">
          <strong className="text-3xl font-bold">{left}</strong> 
          <span className="text-txt text-sm font-normal">left</span>
        </div>
        <Button disabled={isOutOfStock}>{ isOutOfStock ? "Out of stock" : "Select Reward"}</Button>
      </div>
    </div>
  )
}

export default Card