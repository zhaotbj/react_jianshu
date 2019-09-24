import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { actionCreators } from './store'
import './style.less'
class Login extends Component {
  render() {

    if(!this.props.loginState){
      return (
        <div className="LoginWrapper">
          <div className="LoginBox">
  
            <input className="Input" placeholder='账号' ref={(input) => { this.account = input }} />
            <input className="Input" placeholder='密码' type='password' ref={(input) => { this.password = input }} />
            <button className="Button" onClick={() => this.props.login(this.account, this.password)}>登陆</button>
          </div>
        </div>
      )
    } else {
      return <Redirect to="/" />
    }

  }
}

const mapState = (state) => ({
  loginState: state.get('login').get('loginState')
})
const mapActions = (dispatch) => {
  return {
    login(account, password) {
      console.log(account.value, password.value)
      dispatch(actionCreators.handleLogin(account.value, password.value))
    }
  }
}
export default connect(mapState, mapActions)(Login);