import axios from 'axios'

const changeList = (data) => ({
  type: "CHANGE_HOME_LIST",
  topicList: data.topicList,
  articleList: data.articleList,
  recommendList:data.recommendList
})

const setDetail=(data)=>({
  type:'SET_DETAIL',
  data
})


const setUsers=(data)=>({
  type:'SET_USERS',
  data
})
export const getHomeList = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {

      dispatch(changeList(res.data.data))
    })
  }
}

// 获取详情

export const getDetail = () => {
  return (dispatch) => {
    axios.get('/api/detail.json').then(res => {
  
      dispatch(setDetail(res.data.data))
    })
  }
}

// 获取作者列表

export const getUsersList = () => {
  return (dispatch) => {
    axios.get('/api/userList.json').then(res => {
      dispatch(setUsers(res.data.users))
    })
  }
}
