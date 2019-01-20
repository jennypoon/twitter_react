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
      <div className="tweetsContainer">
        {this.displayTweets(this.state.tweets)}
      </div>
    )
  }

}

export default Tweets;
