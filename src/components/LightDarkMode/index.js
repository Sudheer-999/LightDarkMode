import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  onDark = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {onDark} = this.state

    const buttonStat = onDark ? 'Dark Mode' : 'Light Mode'
    const bgColor = onDark ? 'light' : 'dark'

    return (
      <div className="bg-container">
        <div className={`sub-container ${bgColor}`}>
          <h1>Click To Change Mode</h1>
          <button type="button" onClick={this.onDark} className="button">
            {buttonStat}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
