import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description } = this.props;
        return (
            <div>
                This is NewsItem component
            </div>
        )
    }
}
