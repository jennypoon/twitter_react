import React, { Component } from 'react';


class TweetCard extends Component {

  render() {
    console.log("TWEETCARD", this.props.tweet)
    return (
      <div className="tweet">
      testing
      {this.props.tweet.username}
      {this.props.tweet.profile_img}
      {this.props.tweet.message}
      </div>
    )
  }

}

export default TweetCard;
