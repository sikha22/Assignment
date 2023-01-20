// export const Button = () => {
//     return <div>Button</div>
// }
// export const Idea = () => {
//     return <div> Idea</div>
// }
import { useState } from "react";
// functional Components
export const Button = () => {
  const [age, setAge] = useState(0);
  return (
    <div>
      <form>
        <lable>Enter Your Age:</lable>
        <input
          type="number"
          value={age}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        ></input>
      </form>
      <h1>Your age is {age}</h1>
    </div>
  )
}
