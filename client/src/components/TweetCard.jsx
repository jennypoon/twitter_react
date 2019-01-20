import React, { Component } from 'react';


class TweetCard extends Component {
 constructor(props) {
    super(props);

    this.state = {
      tweets: []
    }

    this.handleLike = this.handleLike.bind(this)
  }

  handleLike(e) {
    e.preventDefault();
    if (this.props.tweet.like === 1) {
      this.props.likeTweet(0, this.props.tweet)
    } else {
      this.props.likeTweet(1, this.props.tweet)
    }
  }

  render() {
    return (
      <div className="tweetCard">
        <div className="userInfo">
          <h2>{this.props.tweet.username}</h2>
          <img className="userAvatar" src={this.props.tweet.profile_img} alt="userprofile" />
        </div>
        <div className="tweetMsg">
          {this.props.tweet.message}
        </div>
        {this.props.tweet.like === 1 ? (<span><i className="fas fa-heart like" onClick={this.handleLike}></i>Unlike</span>) : <span><i className="fas fa-heart unlike" onClick={this.handleLike}></i>Like</span>}
      </div>
    )
  }
}

export default TweetCard;
