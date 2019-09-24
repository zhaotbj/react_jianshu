import React, { Component } from 'react';
import { connect } from 'react-redux'
class Topic extends Component {
  render() {
    return (
      <div className="TopicWrapper">
        {
          this.props.topicList.map(item => {
            return (
              <div className="TopicItem" key={item.get('id')}>
                <img className="topic-pic"
                  src={item.get('imgUrl')} alt='' />
                {item.get('title')}
              </div>
            )
          })
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    topicList: state.get('home').get('topicList')
  }
}
export default connect(mapStateToProps, null)(Topic);