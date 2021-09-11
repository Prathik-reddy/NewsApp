import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  constructor(){
    super();
    this.state={
      articles :[],
      loading : false,
      page : 1,

    };
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7384ba886c19455f9098f3eed2fc650e&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles:parsedData.articles,
      totalResults: parsedData.totalResults

    });

  }

  handlePrevClick = async ()=>{
    console.log("this is previous click");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7384ba886c19455f9098f3eed2fc650e&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      pages: this.state.page-1,
      articles:parsedData.articles,

    })
  }
  handleNextClick = async ()=>{
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){
        alert("max page reaached");
    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7384ba886c19455f9098f3eed2fc650e&page=${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(this.state.page);
    this.setState({
      page: this.state.page + 1,
      articles:parsedData.articles
    })
  }

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
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark"  onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
    )
  }
}

export default News
