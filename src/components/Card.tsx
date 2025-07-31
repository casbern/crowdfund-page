import Button from "./Button"

const Card = () => {
  return (
    <div>
      <div>
        <h3>Bamboo Stand</h3>
        <span>Pledge $25 or more</span>
      </div>

      <p>
        You get an ergonomic stand made of natural bamboo. 
        You've helped us launch our promotional campaign, and you’ll 
        be added to a special Backer member list.
      </p>

      <div>
        <span> <strong>101</strong> left</span>
        <Button>Select Reward</Button>
      </div>
    </div>
  )
}

export default Card