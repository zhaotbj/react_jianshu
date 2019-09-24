import React, { Component } from 'react';
import { connect } from 'react-redux'

import { actionCreators } from '../store'

class Writer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    this.props.getUser()
  }
  render() {
    console.log(this.props.usersList, '=users')
    let usersList = this.props.usersList.toJS()
    return (
      <div className="recommended-author-wrap">
        <div className="recommended-authors">
          <div className="title"><span>推荐作者</span>
            <a className="page-change">
              <i className="iconfont ic-search-change"></i>
              换一批 </a></div>

          <a href="/recommendations/users?utm_source=desktop&amp;utm_medium=index-users" target="_blank" className="find-more"></a>

          <ul className="list">
            {
              usersList.map(item => {
                return (
                  <li key={item.id}>
                    <a href="/u/62fc150bab96?utm_source=desktop&amp;utm_medium=index-users" target="_blank" className="avatar">
                      <img src={item.avatar_source} />
                    </a>
                    <a className="follow" state="0"><i className="iconfont ic-follow"></i>关注</a>
                    <a href="/u/62fc150bab96?utm_source=desktop&amp;utm_medium=index-users" target="_blank" className="name">{item.nickname} </a> <p>
                      写了{item.total_likes_count}k字 ·{item.total_wordage}k喜欢</p>
                  </li>
                )
              })
            }


          </ul>

        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    usersList: state.get('home').get('usersList')
  }
}
const mapDispathToProps = (dispatch) => ({
  getUser() {
    dispatch(actionCreators.getUsersList())
  }
})
export default connect(mapStateToProps, mapDispathToProps)(Writer)