import {fromJS} from 'immutable'
const defaultState=fromJS({
  focused:false,
  mouseIn:false,
  list:[],
  page:1,
  totalPage:1
})

export default (state=defaultState, action)=>{
  switch(action.type){
    case 'CHANGE_FOUCE':
      return state.set('focused', true)
    case 'CHANGE_BLUE':
      return state.set('focused', false)
    case 'MOUSE_ENTER':
      return state.set('mouseIn', true)
    case 'MOUSE_LEAVE':
      return state.set('mouseIn', false)
    case 'CHANGE_LIST':
     return state.merge({
        'list':fromJS(action.data),
        'totalPage':Math.ceil(action.data.length / 10)
      })

    case 'CHANGE_PAEGSIZE':
      return state.set('page', fromJS(action.data))
    default :
    return state
  }
}

