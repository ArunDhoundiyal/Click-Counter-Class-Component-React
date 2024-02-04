import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(state => {
      console.log(`count of numbers ${state.count}`)
      return {count: state.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading-style">
          The Button has been clicked
          <br />
          <span className="number-style">{count}</span> times.
        </h1>
        <p className="paragraph-style">
          Click the button to increase the count!
        </p>

        <button
          className="style-button"
          type="button"
          onClick={this.onIncrement}
        >
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
