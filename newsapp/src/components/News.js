import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      "source": {
        "id": null,
        "name": "KABC-TV"
      },
      "author": "Jaysha Patel, Leo Stallworth",
      "title": "LAUSD moving forward with plan to ban student cellphone use during school day - KABC-TV",
      "description": "The LAUSD board voted in favor of banning phones and social media throughout the school day, including break periods. The policy will go into effect as early as January 2025.",
      "url": "https://abc7.com/post/lausd-votes-ban-student-cellphone-use-during-school/14971043/",
      "urlToImage": "https://cdn.abcotvs.com/dip/images/14972168_061824-kabc-3pm-lausd-cell-phones-vid.jpg?w=1600",
      "publishedAt": "2024-06-19T00:26:22Z",
      "content": "LOS ANGELES (KABC) -- The Los Angeles Unified School District is moving forward with a plan to ban cellphone use during the school day, a move that has teachers and parents at odds.\r\nThe district sch… [+2310 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": null,
      "title": "Justin Timberlake charged with DWI, released from police custody - CNN",
      "description": "Justin Timberlake was arraigned on one count of driving while intoxicated and released from police custody in New York, according to his attorney.",
      "url": "https://www.cnn.com/2024/06/18/entertainment/justin-timberlake-dwi/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/thumbnail-timberlake-mugsho.JPG?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-06-19T00:14:00Z",
      "content": "Justin Timberlake was arraigned on one count of driving while intoxicated and released from police custody in New York, according to his attorney.\r\nAccording to police, the singer was observed around… [+2407 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Clare Foran, Ted  Barrett",
      "title": "Senate GOP blocks effort by Democrats to pass bump stock ban after Supreme Court ruling - CNN",
      "description": "Senate Republicans on Tuesday blocked an attempt by Democrats to pass a bill to ban bump stocks in the wake of a recent Supreme Court ruling.",
      "url": "https://www.cnn.com/2024/06/18/politics/senate-bump-stock-ban-bill/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2156779620.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-06-18T23:26:00Z",
      "content": "Senate Republicans on Tuesday blocked an attempt by Democrats to pass a bill to ban bump stocks in the wake of a recent Supreme Court ruling.\r\nThe bill would enact a federal ban on the sale of bump s… [+2877 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "SEUNG MIN KIM, STEPHEN GROVES",
      "title": "Half a million immigrants could eventually get US citizenship under a sweeping new plan from Biden - The Associated Press",
      "description": "President Joe Biden has ordered an expansive election year step to offer relief to potentially hundreds of thousands of immigrants without legal status in the U.S. It comes after the Democratic president's own aggressive immigration crackdown at the southern …",
      "url": "https://apnews.com/article/president-joe-biden-immigration-border-citizenship-spouses-69b9212c382d9bb265369b29b62622d7",
      "urlToImage": "https://dims.apnews.com/dims4/default/3387aae/2147483647/strip/true/crop/7736x4352+0+403/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F05%2Fe9%2F614962975c9f67bff62539e46029%2F014b77752bf548ccb18d778a0c4fa688",
      "publishedAt": "2024-06-18T23:17:00Z",
      "content": "WASHINGTON (AP) President Joe Biden ordered expansive election-year action Tuesday to offer potential citizenship to hundreds of thousands of immigrants without legal status in the U.S., aiming to ba… [+8011 chars]"
    }
  ]

  constructor() {
    super();
    console.log("Hello I am constructor.")
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=f113c98a610d4156bd5fdad4f11bed77";
        let data = await fetch(url);
        let parsedData = data.json;
        console.log(parsedData);
        this.setState({articles : parsedData.articles});
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsJunction-Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
          return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imgURL={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
      </div>
    );
  }
}
