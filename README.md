做头部
## 使用react-redux
## 拆分store
## 使用immutable插件

## 在最外层的store中使用redux-immutable插件

# 使用redux-think中间件处理函数异步的接口返回的数据

#使用了 使用immutable数据的时候，store中存储的是immutable数据，同时我接口返回的时候也要是一个immutable数据，在返回
```
const changeList=(data)=>(
  {
    type: constants.CHANGE_LIST,
    data:fromJS(data)
  }
)
```
actionCreators与constants的拆分(1)
使用Immutable.js来管理store中的数据
使用redux-immutable统一数据格式.mp4

获取异步数据

搜索的换页

加icon的旋转效果

避免多次请求 优化
```
handleInputFocus(list) {
      if(list.size===0){
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())
    },
```

