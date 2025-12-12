import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
        <h3>welcome to daily news</h3>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      </div>
    )
  }
}

export default News
