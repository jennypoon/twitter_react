import React, { Component } from 'react';
import axios from 'axios';
import TweetCard from './TweetCard.jsx'


class Tweets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    }

    this.getList = this.getList.bind(this)
    this.displayTweets = this.displayTweets.bind(this)
    this.likeTweet = this.likeTweet.bind(this)
  }

//GET TWEETS
  getList() {
    axios.get("/api/tweets")
      .then((res) => {
        this.setState({ tweets: res.data})
      })
  }

//UPDATE STATUS OF LIKE
  likeTweet(like, tweet){
   axios.post("/api/likeTweet", {
      tweetid: tweet.id,
      tweetlike: like
    })
    .then((res) => {
      this.getList()
    })
  }

  //RENDER INDIVIDUAL TWEETS
  displayTweets(tweets) {
    return tweets.map((tweet) => {
      return <TweetCard key={tweet.id} tweet={tweet} likeTweet={this.likeTweet} update={this.getList}/>
    })
  }

  componentDidMount() {
    this.getList();
  }

  render() {
    return (
      <div>
        <div className="leftContainer">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="tweetsContainer">
          {this.displayTweets(this.state.tweets)}
        </div>
      </div>
    )
  }

}

export default Tweets;
