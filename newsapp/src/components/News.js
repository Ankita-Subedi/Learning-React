import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

   const updateNews = async() => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    setloading(true)
    try {
      let data = await fetch(url);
      props.setProgress(30);
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }
      let parsedData = await data.json();
      props.setProgress(70);
      setArticles(parsedData.articles)
      settotalResults(parsedData.totalResults)
      setloading(false)
    } catch (error) {
      console.error("Error fetching data: ", error);
      setloading(false)
    }
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${props.category} - NewsJunction`;
    updateNews();
    //eslint-disable-next-line
  }, [])

  const handleNextClick = async () => {
    setpage(page + 1)
    updateNews();
  }

  const handlePrevClick = async () => {
    setpage(page - 1)
    updateNews();
  }

  const fetchMoreData = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
    setpage(page + 1)
    try {
      let data = await fetch(url);
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles))
      settotalResults(parsedData.totalResults)
      setloading(false)
    } catch (error) {
      console.error("Error fetching data: ", error);
      setloading(false)
    }
  }

    return (
      <>
        <h2 className="text-center" style={{ margin: "40px 0px", marginTop: "90px" }}>NewsJunction-Top {props.category} Headlines</h2>
        {loading && <Spinner />}
        <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner/>}
        >
          <div className="container my-3">
        <div className="row">
          {articles.map((element, index) => {
            return <div className="col-md-4" key={element.url + index}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgURL={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} />
            </div>
          })}
        </div>
      </div>
        </InfiniteScroll>
        </>
    );
}

News.defaultProps = {
  country: 'us',
  pageSize: 8,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News