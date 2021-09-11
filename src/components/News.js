import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';

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
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7384ba886c19455f9098f3eed2fc650e&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles:parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false

    });

  }

  handlePrevClick = async ()=>{
    console.log("this is previous click");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7384ba886c19455f9098f3eed2fc650e&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page-1,
      articles:parsedData.articles,
      loading:false,

    })
  }
  handleNextClick = async ()=>{
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7384ba886c19455f9098f3eed2fc650e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(this.state.page);
        this.setState({
          page: this.state.page + 1,
          articles:parsedData.articles,
          loading:false,
        })
  }

  }
  render() {
    return (
        <div className="container my-2">
          <h1 className="text-center">NewsAction - Top headlines</h1>
          {this.state.loading &&<Spinner/>}
          <div className="row">
          {!this.state.loading && this.state.articles.map((element) =>{
              return <div className="col-md-4" key={element.url}>
                <NewsItems  title={element.title?element.title.length>60?element.title.slice(0,60)+"...":element.title:" "} description={element.description?element.description.length>100?element.description.slice(0,80)+"...":element.description:" "} imgUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
          })}
          </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark"  onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
    )
  }
}

export default News
