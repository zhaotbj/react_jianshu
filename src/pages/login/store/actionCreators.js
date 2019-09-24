import * as constants from './constants';
import axios from 'axios'
import {fromJS} from 'immutable'

const changeLogin=(data)=>(
  {
    type:'loginState',
    loginState:fromJS(data),

  }
)
export const handleLogin=(accout, password)=>{
  return (dispatch) =>{
    axios.get('/api/login.json?account=' + accout + '&password=' + password).then(res=>{
      console.log(res.data)
      dispatch(changeLogin(res.data.data))
    })
  }
}