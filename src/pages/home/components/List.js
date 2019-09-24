import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class List extends Component {

  render() { 
    const {articleList, page,getMoreList} = this.props
    return ( 
      <div>
      {
        articleList.map((item, index) => {
          return (
            <Link key={index} to={'/detail/' + item.get('id')}>
              <div className="ListItem">
                <img className='pic' src={item.get('imgUrl')} alt='' />
                <div className="ListInfo">
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </div>

              </div>
            </Link>
          )
        })
      }
      <div className="LoadMore" onClick={getMoreList.bind(this,page)}>更多文字</div>
    </div>
     );
  }
}


const mapStateToProps = (state) => {
  return {
    articleList: state.get('home').get('articleList'),
    page:state.get('home').get("page")
  }
}
const mapDispathToProps = (dispatch) => ({
  getMoreList(page){

  }
})
export default connect(mapStateToProps, mapDispathToProps)(List);