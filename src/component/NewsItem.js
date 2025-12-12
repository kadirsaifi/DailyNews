import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://platform.theverge.com/wp-content/uploads/sites/2/2025/12/tetris_myplaywatch_1.jpg?quality=90&strip=all&crop=0%2C10.740836125969%2C100%2C78.518327748063&w=1200" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
