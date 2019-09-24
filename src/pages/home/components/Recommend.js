import React, { Component } from 'react';
import { connect } from 'react-redux'
class Recommend extends Component {

  render() {
    return (
      <div className="RecommendWrapper">
        <img className="RecommendItem" alt="" src={require('../../../assets/banner1.png')} />
        <img className="RecommendItem" alt="" src={require('../../../assets/banner2.png')} />
        <img className="RecommendItem" alt="" src={require('../../../assets/banner3.png')} />
        <img className="RecommendItem" alt="" src={require('../../../assets/banner4.png')} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recommendList: state.get('home').get('recommendList'),
  }
}
const mapDispathToProps = (dispatch) => ({
  getMoreList(page) {

  }
})
export default connect(mapStateToProps, mapDispathToProps)(Recommend);