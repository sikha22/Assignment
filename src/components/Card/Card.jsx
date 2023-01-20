import React from "react"
// class components
class Card extends React.Component {
    constructor() {
        super()
        this.state = {
            age: "0",
        }
    }
    render() {
        return(
        <div className="card-container" style={{ backgroundColor: "blue"}}>
            <form>
                <lable>Enter Your Age:</lable>
                <input
                type="number"
                value={this.state.age}
                onChange={event => {
                    this.setState({
                        ...this.state,
                        age: event.target.value,
                    })
                }}
                ></input>
            </form>
            <h1>Your age is {this.state.age}</h1>
            {/* {age ===0 ? "you are not yet born :"} */}
            {this.state.age === 0 && "You are not born yet!"}
            {this.state.age <= 12 && this.state.age> 0 && <h1>You are kid!</h1>}
            {this.state.age <= 19 && this.state.age> 12 && (<h1>You are teenager! Learn from your mistakes</h1>)}
            {this.state.age> 19 && <h1>Welcome to adulthood!</h1>}
        </div>
        )
    
    }
}
export default Card