import React,{Component} from 'react'
import { connect} from 'react-redux'
import List from './components/List'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

import { actionCreators } from './store'

import './style.less'
class Home extends Component {

    componentDidMount(){
      this.props.changeHomeList()
    }
  render() { 
    return ( 
      <div className="HomeWrapper">

      <div className="HomeLeft">
        <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
        <Topic />
        <List />
      </div>
      <div className="HomeRight">
        <Recommend />
        <Writer />
      </div>
      {/* {this.props.showScroll ? <div className="BackTop" onClick={this.handToTop}>顶部</div> : ''} */}
    </div>
     );
  }
}

const mapStateToProps=(state)=>{
  return {

  }
}

const mapDispatchToProps=(dispatch)=>({
  changeHomeList(){
    dispatch(actionCreators.getHomeList())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
