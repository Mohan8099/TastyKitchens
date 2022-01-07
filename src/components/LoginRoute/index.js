import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitFailure = errorMessage => {
    this.setState({errorMsg: errorMessage, showSubmitError: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const jwtToken = data.jwt_token
      const {history} = this.props

      Cookies.set('jwt_token', jwtToken, {
        expires: 30,
      })
      history.replace('/')
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="username-input-field"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {showSubmitError, errorMsg} = this.state
    return (
      <div className="login-container">
        <div className="login-form-container">
          <form className="form-container" onSubmit={this.submitForm}>
            <img
              className="mobile-logo"
              src="https://res.cloudinary.com/digwhjt1m/image/upload/v1641566977/MKay/Rectangle_1457_w6hmcr.png"
              alt="website login"
            />
            <img
              className="tab-logo"
              src="https://res.cloudinary.com/digwhjt1m/image/upload/v1641566976/MKay/Frame_274_zuxxwi.png"
              alt="website logo"
            />
            <h1 className="login-heading">Tasty Kitchens</h1>

            <h1 className="login-text-heading">Login</h1>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <button
              type="submit"
              className="login-button"
              onClick={this.submitForm}
            >
              Login
            </button>
            {showSubmitError && <p className="error-message">{errorMsg}</p>}
          </form>
        </div>

        <div className="img-container">
          <img
            className="kitchen-img"
            src="https://res.cloudinary.com/digwhjt1m/image/upload/v1641566980/MKay/Rectangle_1456_r7txn4.png"
            alt="web"
          />
        </div>
      </div>
    )
  }
}

export default LoginRoute
