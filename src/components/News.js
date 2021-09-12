import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,

  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0,
    };
    document.title =`NewsAction - ${this.props.category}`;
  }

  async componentDidMount() {
    this.UpdateNews();
  }
  async UpdateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7384ba886c19455f9098f3eed2fc650e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      totalResults: parsedData.totalResults,
      articles: parsedData.articles,
      loading: false,
    })

  }

  handlePrevClick = async () => {
    console.log("this is previous click");
    this.setState({
      page: this.state.page - 1,
    })
    this.UpdateNews();
  }
  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    })
    this.UpdateNews();

  }
  fetchMoreData = async () => {
    this.setState({
      page:this.state.page+1
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7384ba886c19455f9098f3eed2fc650e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      totalResults: parsedData.totalResults,
      articles: this.state.articles.concat(parsedData.articles),
    })


  };

  render() {
    return (
      <div className="container my-2">
        <h1 className="text-center my-0">NewsAction - Top {this.props.category} headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length != this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItems title={element.title ? element.title.length > 60 ? element.title.slice(0, 60) + "..." : element.title : " "} description={element.description ? element.description.length > 100 ? element.description.slice(0, 80) + "..." : element.description : " "} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "anonymous"} date={element.publishedAt ? element.publishedAt : ""} />
            </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
      </div>
    )
  }
}

export default News
