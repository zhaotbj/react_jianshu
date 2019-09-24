import { fromJS } from 'immutable'
const defaultState = fromJS(
  {
    loginState: false
  }
)

export default (state = defaultState, action) => {
  console.log(action)
  switch (action.type) {
    case 'loginState':
        return state.set('loginState',  action.loginState)
    default:
      return state
  }
}