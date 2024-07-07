import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgURL, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={!imgURL?"https://cdn3.vectorstock.com/i/1000x1000/20/42/latest-news-vector-21632042.jpg":imgURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary bg-dark btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
