import { fromJS } from 'immutable'
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  page:1,
  datail:{},
  usersList:[]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    
    case 'CHANGE_HOME_LIST':
      return state.merge({
        'topicList':fromJS(action.topicList),
        'articleList':fromJS(action.articleList),
        'recommendList':fromJS(action.recommendList)
      })
    case 'SET_DETAIL':
      return state.set('datail', fromJS(action.data))
    case 'SET_USERS':
      return state.set('usersList', fromJS(action.data))
    default:
      return state
  }
}

