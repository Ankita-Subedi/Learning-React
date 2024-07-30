# NewsJunction

NewsJunction is a React-based news application that provides users with the latest news articles from various categories such as Business, Entertainment, General, Health, Science, Sports, and Technology. The application leverages the NewsAPI to fetch and display news articles, and it features infinite scrolling for a seamless browsing experience.

## Features

- Top headlines from different categories.
- Infinite scrolling for a continuous news feed.
- Responsive design using Bootstrap.
- Loading indicator while fetching news articles.
- Detailed news articles with images, authors, and publication dates.

## Components

### `App.js`
- The main component that sets up the routing and layout for the application.
- Utilizes `react-router-dom` for routing and `react-top-loading-bar` for progress indication.

### `NavBar.js`
- Contains the navigation bar with links to different news categories.
- Uses `react-router-dom` for navigation.

### `News.js`
- Fetches and displays news articles based on the selected category.
- Implements infinite scrolling using the `react-infinite-scroll-component`.

### `NewsItem.js`
- Represents a single news article with title, description, image, author, and publication date.

### `Spinner.js`
- Displays a loading spinner while fetching data.

## Dependencies

- React
- React Router DOM
- PropTypes
- Bootstrap
- React Infinite Scroll Component
- React Top Loading Bar