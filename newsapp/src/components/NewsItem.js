import React from "react";

const NewsItem = (props) => {
    let { title, description, imgURL, newsUrl, author, date } = props;
    return (
      <div className="my-3">
        <div className="card" >
          <img src={!imgURL ? "https://cdn3.vectorstock.com/i/1000x1000/20/42/latest-news-vector-21632042.jpg" : imgURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()} </small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary bg-dark btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}
export default NewsItem