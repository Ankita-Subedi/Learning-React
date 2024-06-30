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
    },
    {
    "source": {
    "id": null,
    "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "1970-01-01T00:00:00Z",
    "content": "[Removed]"
    },
    {
    "source": {
    "id": null,
    "name": "Spaceflight Now"
    },
    "author": null,
    "title": "Live coverage: SpaceX to launch 20 Starlink satellites on Falcon 9 rocket from Vandenberg Space Force Station – Spaceflight Now - Spaceflight Now",
    "description": null,
    "url": "https://spaceflightnow.com/2024/06/18/live-coverage-spacex-to-launch-20-starlink-satellites-on-falcon-9-rocket-from-vandenberg-space-force-station/",
    "urlToImage": null,
    "publishedAt": "2024-06-18T22:31:57Z",
    "content": "A stack of SpaceX Starlink satellites, which included the first six featuring Direct to Cell capabilities. The batch launched on the Starlink 7-9 mission, which lifted off from Vandenberg Space Force… [+1542 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New York Post"
    },
    "author": "Erich Richter",
    "title": "Jerry Jones slams Bengals during ‘NFL Sunday Ticket’ lawsuit testimony - New York Post ",
    "description": "Cowboys owner Jerry Jones threw a stray jab at the Cincinnati Bengals while under oath testifying in the ongoing NFL Sunday Ticket trial.",
    "url": "https://nypost.com/2024/06/18/sports/jerry-jones-slams-bengals-during-nfl-sunday-ticket-testimony/",
    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/06/jerry-jones-bengals.jpg?quality=75&strip=all&1718726264&w=1024",
    "publishedAt": "2024-06-18T22:25:00Z",
    "content": "Cowboys owner Jerry Jones threw a stray jab at the Cincinnati Bengals while under oath testifying in the ongoing “NFL Sunday Ticket” trial. \r\nThe NFL is accused of monopolizing the product of “NFL Su… [+1957 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "WCVB Boston"
    },
    "author": "Phil Tenser",
    "title": "Duck boat parade: City schedules celebration of Celtics' 18th championship - WCVB Boston",
    "description": "A rolling rally parade will be held Friday to celebrate the Boston Celtics 18th NBA Championship.",
    "url": "https://www.wcvb.com/article/boston-celtics-duck-boat-victory-parade-nba-champions/61115897",
    "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/celtics-2008-parade-ap080619041603-666ce9c78bb62.jpg?crop=1.00xw:0.846xh;0,0.0709xh&resize=1200:*",
    "publishedAt": "2024-06-18T22:22:00Z",
    "content": "BOSTON —Boston's iconic Duck Boats are set to carry the NBA champion Boston Celtics and the Larry O'Brien Trophy on a victory parade through the city on Friday.\r\nBoston beat the Dallas Mavericks 106-… [+5822 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New York Post"
    },
    "author": "Lauren Sarner",
    "title": "Howie Mandel says his wife wasn't drunk in bloody fall at Vegas hotel — but here's what she did take - New York Post ",
    "description": "“I’m going to tell you the truth: she took gummies. So it’s not an alcohol problem, she was on pot,” said Howie Mandel.",
    "url": "https://nypost.com/2024/06/18/entertainment/howie-mandel-says-his-wife-wasnt-drunk-in-bloody-fall-at-vegas-hotel-but-heres-what-she-did-take/",
    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/06/newspress-collage-saastytuh-1718748792558.jpg?quality=75&strip=all&1718734470&w=1024",
    "publishedAt": "2024-06-18T22:17:00Z",
    "content": "The gummies were the problem.  \r\nHowie Mandel is speaking out to clarify his wifes recent accident that left her in a pool of blood.\r\nFirst of all, she wasnt drunk, Mandel, 68, told TMZ on Tuesday. \r… [+2808 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Financial Times"
    },
    "author": null,
    "title": "Israeli military approves plan for 'offensive' in Lebanon - Financial Times",
    "description": "Fears of all-out conflict between Israel and Hizbollah grow as US envoy holds crisis meetings in the region",
    "url": "https://www.ft.com/content/5cc7acfe-4eba-4a49-bf98-d36955e34e7f",
    "urlToImage": null,
    "publishedAt": "2024-06-18T21:51:18Z",
    "content": "Then 75,700 per month.Complete digital access to quality FT journalism on any device. Cancel anytime during your trial."
    },
    {
    "source": {
    "id": "associated-press",
    "name": "Associated Press"
    },
    "author": "KIM TONG-HYUNG",
    "title": "Russia's Vladimir Putin visits North Korea's Kim Jong Un - The Associated Press",
    "description": "Russian President Vladimir Putin arrived in North Korea early Wednesday, after he said the two countries want to cooperate closely to overcome U.S.-led sanctions in the face of intensifying confrontations with Washington. Putin was met at Pyongyang’s airport …",
    "url": "https://apnews.com/article/putin-kim-jong-un-russia-north-korea-05f0ed66f9978ac1ba34f2d708ad7504",
    "urlToImage": "https://dims.apnews.com/dims4/default/396cd52/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F29%2F54%2Fea6ba726ccbed06ccd5b60b272bb%2F4583f452b36f4b76a12ca20484bc5c7b",
    "publishedAt": "2024-06-18T21:45:00Z",
    "content": "SEOUL, South Korea (AP) Russian President Vladimir Putin arrived in North Korea early on Wednesday, after saying the two countries want to cooperate closely to overcome U.S.-led sanctions in the face… [+7021 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Mercury News"
    },
    "author": "Caelyn Pender",
    "title": "San Jose homeless encampments face Shigella outbreak, public health department says - The Mercury News",
    "description": "The public health department has confirmed three cases and is working to distribute test and hygiene kits.",
    "url": "https://www.mercurynews.com/2024/06/18/san-jose-homeless-encampments-face-shigella-outbreak-public-health-department-says/",
    "urlToImage": "https://www.mercurynews.com/wp-content/uploads/2023/03/CDC_issues_warning_over_an_increase_of_drug-resistant_bacteria1.jpg?w=1024&h=788",
    "publishedAt": "2024-06-18T21:33:21Z",
    "content": "An outbreak of the gastrointestinal illness Shigella has been identified in encampments of people experiencing homelessness in San Jose since June 3, according to Santa Clara County’s public health d… [+3281 chars]"
    },
    {
    "source": {
    "id": "the-verge",
    "name": "The Verge"
    },
    "author": "Justine Calma",
    "title": "Amazon union workers and the Teamsters ink a deal - The Verge",
    "description": "Amazon Labor Union members in New York voted to affiliate with the Teamsters, one of the largest labor unions in the US.",
    "url": "https://www.theverge.com/2024/6/18/24181246/amazon-labor-union-teamsters-affiliate-agreement-warehouse-workers",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/K0425rUxvGxO4--Ue5Mu-bCAurk=/0x0:4034x2541/1200x628/filters:focal(2017x1271:2018x1272)/cdn.vox-cdn.com/uploads/chorus_asset/file/25496847/1239668154.jpg",
    "publishedAt": "2024-06-18T21:25:29Z",
    "content": "Amazon union workers and the Teamsters have inked a deal\r\nAmazon union workers and the Teamsters have inked a deal\r\n / Amazon Labor Union workers have joined forces with one of biggest unions in the … [+2704 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Investopedia"
    },
    "author": "Michael Bromberg",
    "title": "S&P 500 Gains and Losses Today: Index Hits Record as Nvidia Takes Market Cap Crown - Investopedia",
    "description": "The S&P 500 added 0.3% on Tuesday, June 18, 2024, as Nvidia grabbed headlines by surpassing Microsoft as the world's highest-valued public company.",
    "url": "https://www.investopedia.com/s-and-p-500-gains-and-losses-today-index-hits-record-as-nvidia-takes-market-cap-crown-8665589",
    "urlToImage": "https://www.investopedia.com/thmb/6wJndfCHFfA3hTJKVPVdhZuduKw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/INV_NvidiaOffice_GettyImages-1258367321-0b7b032ee0624dfcbd1e8c11144c9a04.jpg",
    "publishedAt": "2024-06-18T21:05:16Z",
    "content": "<ul><li>The S&amp;P 500 added 0.3% on Tuesday, June 18, 2024, as Nvidia grabbed headlines by surpassing Microsoft as the world's highest-valued public company.</li><li>Walgreens Boots Alliance stock … [+2806 chars]"
    },
    {
    "source": {
    "id": "usa-today",
    "name": "USA Today"
    },
    "author": "Mike Brehm",
    "title": "Panthers vs. Oilers live updates: Stanley Cup Final Game 5 score, highlights - USA TODAY",
    "description": "The Florida Panthers will try again to clinch their first Stanley Cup title in Game 5 against the Edmonton Oilers. Follow along for live updates.",
    "url": "https://www.usatoday.com/story/sports/nhl/2024/06/18/stanley-cup-finals-live-updates-panthers-oilers-game-5-score/74132290007/",
    "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/06/18/USAT/74141640007-bob-618.jpg?crop=1857,1045,x192,y120&width=1857&height=1045&format=pjpg&auto=webp",
    "publishedAt": "2024-06-18T21:02:58Z",
    "content": "The Florida Panthers' first attempt to clinch a Stanley Cup title didn't go well with an 8-1 loss to the Edmonton Oilers on Saturday night.\r\nThe Panthers will try again to clinch the franchise's firs… [+6702 chars]"
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Caroline O'Donovan",
    "title": "Amazon fined $5.9 million for breaking labor law in California - The Washington Post",
    "description": "The company is among the first to run afoul of a union-backed law aimed at protecting warehouse workers from aggressive productivity quotas.",
    "url": "https://www.washingtonpost.com/technology/2024/06/18/amazon-fine-labor-law-california/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/SX4ZZVVD2EI6VCMOWINZVA7XSI.jpg&w=1440",
    "publishedAt": "2024-06-18T21:00:00Z",
    "content": "SAN FRANCISCO California labor officials fined Amazon $5.9 million for violating a state law aimed at preventing warehouse workers from being pushed to work so quickly that their health and safety ar… [+4831 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Futurism"
    },
    "author": "Frank Landymore",
    "title": "NASA Rover Discovers Strange Stones, Never Before Seen on Mars - Futurism",
    "description": "One stone in particular is distinctly lighter colored than all the stones surrounding it, a Mars discovery that is \"in a league of its own.\"",
    "url": "https://futurism.com/the-byte/nasa-rover-stones-never-seen-mars",
    "urlToImage": "https://wp-assets.futurism.com/2024/06/nasa-rover-stones-never-seen-mars.jpg",
    "publishedAt": "2024-06-18T19:49:02Z",
    "content": "\"A type never observed before on Mars.\"\r\nStark Contrast\r\nNASA's Perseverance Mars rover took a shortcut to steer clear of a path riddled with boulders and stumbled into a field full of stones the lik… [+3100 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Gizmodo.com"
    },
    "author": "Passant Rabie",
    "title": "Is Leaky Starliner Stuck at the ISS? Boeing and NASA Say No Despite Yet Another Delay - Gizmodo",
    "description": "NASA and Boeing are now targeting June 26 to return the Crew Flight Test mission from the ISS, marking the third delay in departure.",
    "url": "https://gizmodo.com/boeing-starliner-third-departure-delay-iss-nasa-1851547013",
    "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/fca74c0e7435b31af774acfb3ba38593.webp",
    "publishedAt": "2024-06-18T19:45:00Z",
    "content": "Two NASA astronauts wont be returning back from the International Space Station (ISS) for an additional four days, the latest in a series of delays that has marred the Starliner program for years.\r\nN… [+4068 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": null,
    "title": "More than 300 Egyptians die from heat during Hajj pilgrimage in Saudi Arabia, diplomats say - CBS News",
    "description": "At least 323 Egyptian and 60 Jordanian pilgrims died during the Hajj pilgrimage​ in western Saudi Arabia, most of them succumbing to heat-related illnesses, diplomats told AFP on Tuesday.",
    "url": "https://www.cbsnews.com/news/saudi-arabia-hajj-egyptian-jordanian-pilgrims-die-mecca/",
    "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/06/18/0c479c42-efa9-4b82-9616-acb0829afe69/thumbnail/1200x630/ad3d48906df8525ff6bb2ed022fd6986/gettyimages-2157595865.jpg?v=5842509bb796a146f9b20d3e8b03dac6",
    "publishedAt": "2024-06-18T19:24:31Z",
    "content": "At least 323 Egyptian pilgrims died during the Hajj pilgrimage in western Saudi Arabia, most of them succumbing to heat-related illnesses, two Arab diplomats coordinating their countries' responses t… [+2004 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "El Paso Times"
    },
    "author": "Aaron A. Bedoya",
    "title": "See South Fork Fire images near Ruidoso - El Paso Times",
    "description": "The South Fork Fire and the Salt Fire are burning on Mescalero tribal land, near Ruidoso.",
    "url": "https://www.elpasotimes.com/picture-gallery/news/2024/06/18/images-of-south-fork-fire-near-ruidoso/74136353007/",
    "urlToImage": "https://www.elpasotimes.com/gcdn/authoring/authoring-images/2024/06/18/PTX1/74144404007-20240618-t-203723-z-702139303-rc-2-md-8-apz-78-u-rtrmadp-3-usawildfires.JPG?crop=5499,3093,x0,y550&width=3200&height=1800&format=pjpg&auto=webp",
    "publishedAt": "2024-06-18T19:16:04Z",
    "content": "A burned car stands in front of a ruined building as the South Fork Fire burned most of the structures in Cedar Creek after mass evacuations of the village of Ruidoso, New Mexico, U.S. June 18, 2024.… [+3882 chars]"
    }
    ]

  constructor(){
    super();
    console.log("Hello I am constructor.")
    this.state = {
      articles : this.articles,
      loading : false
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsJunction-Top Headlines</h2>
        <div className="row">
          {this.state.articles.map}
          <div className="col-md-4">
            <NewsItem title="Yo title ho" description="Yo desc ho" imgURL="https://cdn.abcotvs.com/dip/images/14972168_061824-kabc-3pm-lausd-cell-phones-vid.jpg?w=1600" newsUrl="todo" />
          </div>
        </div>
      </div>
    );
  }
}
