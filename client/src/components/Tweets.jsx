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
  }

  getList() {
    axios.get("/api/tweets")
      .then((res) => {
        this.setState({ tweets: res.data})
      })
  }

  componentDidMount() {
    this.getList();
  }

  render() {
    console.log(this.state)
    return (
      <div className="tweetsContainer">
        <TweetCard />
      </div>
    )
  }

}

export default Tweets;
