import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { actionCreators } from './store'
import './style.less'

class Header extends Component {
  getListArea(){
    
    const { focused,mouseIn,page, totalPage,list, mounseEnter, mouseLeave ,handleChangePage} = this.props
    
    let newList =[];
    if(list.size>0 ){
      newList=list.toJS()
    }
    
		const pageList = [];

		if (newList.length>0) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
          <div className="SearchInfoItem" key={newList[i]}>{newList[i]}</div>
				)
			}
		}
    if(focused|| mouseIn) {

      return (
        <div className="SearchInfo" onMouseEnter={mounseEnter} onMouseLeave={mouseLeave}>

              <div className="SearchInfoTitle" onClick={()=>handleChangePage(page, totalPage)}>
                <span className="SearchInfoSwitch">
                  <i className="iconfont spin">&#xe851;</i>
                  换一批
                </span>
              </div>

              <div className="SearchInfoList">
                {
                 pageList
                }
                

              </div>

            </div>
      )      
    } else {
      return ''
    }
  }
  render() {
    const { focused, list, mounseEnter, mouseLeave } = this.props
    return (
      <div className="header">

        <Link to="/"><div className="logo"></div></Link>

        <div className="nav">
          <div className="nav_item left active">
            首页
          </div>
          <div className="nav_item left">
            下载App
          </div>
          <div className="nav_item right">
            退出
          </div>
          <div className="nav_item right">
            <Link to="/login">登陆</Link>
          </div>
          <div className='SearchWrapper'>
            <input
              className={focused ? 'NavSearch focused' : 'NavSearch'}
              onFocus={this.props.handleInputFocus.bind(this, list)}
              onBlur={this.props.handleInputBlur} />
            <a className="SearchInfoItem"></a>

            {this.getListArea()}
            
          </div>

        </div>

        <div className="Addition">
          <Link to='/write'>
            <button className='Button writting'>
              <i className="iconfont">&#xe615;</i>
              写文章
						</button>
          </Link>
          <button className='Button reg'>注册</button>
        </div>


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get("focused"),
    mouseIn: state.get('header').get('mouseIn'),
    list: state.get('header').get("list"),
    page: state.get('header').get('page'),
    totalPage: state.get("header").get('totalPage')
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if(list.size===0){
        dispatch(actionCreators.getList())
      }
      
      dispatch(actionCreators.changeSearchFouce())
    },
    handleInputBlur() {
      dispatch(actionCreators.changeSearchBlue())
    },
    mounseEnter() {
      dispatch(actionCreators.changeMouseEnter())
    },
    mouseLeave() {
      dispatch(actionCreators.changeMouseLeave())
    },
    handleChangePage(page, totalPage) {
      if(page<totalPage){
        dispatch(actionCreators.changePageSize(page+1))
      } else {
        dispatch(actionCreators.changePageSize(1))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);