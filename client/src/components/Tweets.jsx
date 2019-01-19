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
  }

  getList() {
    axios.get("/api/tweets")
      .then((res) => {
        this.setState({ tweets: res.data})
      })
  }

  displayTweets(tweets) {
    return tweets.map((tweet) => {
      console.log("DISPLAY TWEETS", tweets)
      return <TweetCard tweet={tweet}/>
    })
  }


  componentDidMount() {
    this.getList();
  }

  render() {
    console.log(this.state)
    return (
      <div className="tweetsContainer">
        {this.displayTweets(this.state.tweets)}
      </div>
    )
  }

}

export default Tweets;
