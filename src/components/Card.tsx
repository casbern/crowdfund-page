import Button from "./Button"

interface CardProps {
  title: string;
  pledge: string;
  description: string;
  left: string;
}

const Card = ({title, pledge, description, left}: CardProps) => {
  return (
    <div className="border border-border rounded-lg p-9 mb-6">
      <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between mb-6">
        <h3 className="text-lg font-bold">{title}</h3>
        <span className="text-sm font-medium text-call-action">Pledge ${pledge} or more</span>
      </div>

      <p className="text-txt mb-6 text-base font-normal">
        {description}
      </p>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex items-center gap-2  mb-6 md:mb-0">
          <strong className="text-3xl font-bold">{left}</strong> 
          <span className="text-txt text-sm font-normal">left</span>
        </div>
        <Button>Select Reward</Button>
      </div>
    </div>
  )
}

export default Card