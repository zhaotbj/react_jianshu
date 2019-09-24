// import { combineReducers} from 'redux'
// 使用redux-immutable
import {combineReducers} from 'redux-immutable'
// 减少两次目录， 在store文件的index里面导出
import {reducer as headerReducer} from '../common/header/store'

import {reducer as homeReducer} from '../pages/home/store'

// import {reducer as detailReducer} from '../pages/detail/store'
// import {reducer as loginReducer} from '../pages/login/store'

// 分模块
const reducer = combineReducers({
  header:headerReducer,
  home:homeReducer,
  // detail:detailReducer,
  // login:loginReducer
})
export default  reducer