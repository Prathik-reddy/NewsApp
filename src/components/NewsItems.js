import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
       let {title,description,imgUrl,newsUrl} = this.props;
        return (
            <div className="my-3">
                <div className="card ">
                    <img src={imgUrl?imgUrl:"https://media.istockphoto.com/vectors/breaking-news-banner-template-breaking-news-background-for-lower-vector-id1193558441?b=1&k=20&m=1193558441&s=612x612&w=0&h=pj1aUkidj8laXmy5bpWWEq5bLt5OJTV5JbS2c1SPOGw="} className="card-img-top border-bottom border-danger border-5 " alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
