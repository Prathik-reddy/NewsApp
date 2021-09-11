import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  articles =[
    {
    "source": {
        "id": "google-news-in",
        "name": "Google News (India)"
    },
    "author": "K Shriniwas Rao",
    "title": "India vs England: Fifth Test between England and India indefinitely postponed; BCCI says players' safety most important",
    "description": "Cricket News: The fifth Test between England and India scheduled to begin at the Old Trafford in Manchester has been indefinitely postponed to a later date, probabl",
    "url": "https://timesofindia.indiatimes.com/sports/cricket/india-in-england/india-vs-england-fifth-test-between-england-and-india-indefinitely-postponed-bcci-says-players-safety-most-important/articleshow/86090359.cms",
    "urlToImage": "https://static.toiimg.com/thumb/msid-86090397,width-1070,height-580,imgsize-45826,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    "publishedAt": "2021-09-10T07:34:00+00:00",
    "content": "India vs England: Fifth Test between England and India indefinitely postponed; BCCI says players' safety most important\r\n<ul><li>News</li>\r\n<li>Sports News</li>\r\n<li>Cricket News</li>\r\n<li>India vs E… [+118 chars]"
}, {
    "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
    },
    "author": null,
    "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    "publishedAt": "2020-04-27T11:41:47Z",
    "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
}, {
    "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
    },
    "author": null,
    "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    "publishedAt": "2020-03-30T15:26:05Z",
    "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
}]
  constructor(){
    super();
    console.log("hello i am a constructor");
    this.state={
      articles : this.articles,
      loading : false,
    };
}
    render() {
        return (
            <div className="container my-2">
              <h2>NewsAction - Top headlines</h2>
              <div className="row">
              {this.state.articles.map((element) =>{
                  return <div className="col-md-4" key={element.url}>
                    <NewsItems  title={element.title.length>80?element.title.slice(0,70)+"...":element.title} description={element.description.slice(0,80)} imgUrl={element.urlToImage} newsUrl={element.url}/>
                  </div>
              })}
              </div>
            </div>
        )
    }
}

export default News
