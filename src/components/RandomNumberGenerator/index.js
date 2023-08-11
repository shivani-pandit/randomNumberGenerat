import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  State = {
    randomNumber: 0,
  }

  onIncrement = () => {
    const NewrandomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: NewrandomNumber})
  }

  render() {
    const {randomNumber} = this.State

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            *Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Generate
          </button>
          <p className="num">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
