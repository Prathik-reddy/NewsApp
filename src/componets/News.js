import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  constructor(){
    super();
    this.state={
      articles :[],
      loading : false,
    };
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7384ba886c19455f9098f3eed2fc650e";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles:parsedData.articles});

  }

  render() {
    return (
        <div className="container my-2">
          <h1>NewsAction - Top headlines</h1>
          <div className="row">
          {this.state.articles.map((element) =>{
              return <div className="col-md-4" key={element.url}>
                <NewsItems  title={element.title?element.title.length>60?element.title.slice(0,60)+"...":element.title:" "} description={element.description?element.description.length>100?element.description.slice(0,80)+"...":element.description:" "} imgUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
          })}
          </div>
        </div>
    )
  }
}

export default News
