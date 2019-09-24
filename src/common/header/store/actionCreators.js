import axios from 'axios'

export const changeSearchFouce=()=>(
  {
    type:'CHANGE_FOUCE'
  }
)
export const changeSearchBlue=()=>(
  {
    type:'CHANGE_BLUE'
  }
)

export const changeMouseEnter=()=>(
  {
    type:"MOUSE_ENTER"
  }
)
export const changeMouseLeave=()=>(
  {
    type:"MOUSE_LEAVE"
  }
)

export const changePageSize=(data)=>(
  {
    type:"CHANGE_PAEGSIZE",
    data
  }
)


const changeList=(data)=>(
  {
    type:'CHANGE_LIST',
    data
  }
)


export const getList=()=>{
  return (dispatch)=>{
    axios.get('/api/header.json').then(res=>{
   
      dispatch(changeList(res.data))
    })
  }
}