import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from '../home/store'

import './style.less'
class Detail extends Component {
  componentDidMount() {
    this.props.changeDetail()
  }
  render() {
    const detail= this.props.datail.toJS()
    return (
      <div className="DetailWrapper">
        <div className="Header">{detail.title}</div>
        <div className="Content" dangerouslySetInnerHTML={{ __html: detail.content }}></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    datail: state.get("home").get('datail')
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeDetail() {
    dispatch(actionCreators.getDetail())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Detail);