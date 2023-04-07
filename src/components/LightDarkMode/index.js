// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {changeMode: true}

  onChange = () => {
    this.setState(prevState => ({changeMode: !prevState.changeMode}))
  }

  render() {
    const {changeMode} = this.state
    const bgChange = changeMode ? 'dark-mode' : 'light-mode'
    const buttonText = changeMode ? 'Light Mode' : 'Dark Mode'
    const changeHeading = changeMode
      ? 'dark-mode-heading'
      : 'light-mode-heading'
    return (
      <div className="bg-container">
        <div className={bgChange}>
          <h1 className={changeHeading}>Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onChange}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
