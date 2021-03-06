import React, { Component } from "react";
import YouTube from 'react-youtube';
import Swift2018_256x170 from './Swift2018_256x170.png';


class SampleHomePageVideo extends React.Component {
    render() {
        const opts = {
            width: window.innerWidth * 0.75,
            height: 520,
            suggestedQuality: 'large',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
                controls: 1,
                disablekb: 0,
                loop: 1,
                showinfo: 0,
                iv_load_policy: 3,
                rel: 0,
            }
        };

        return (
            <YouTube
                videoId="GVaKdsZszGg"
                opts={opts}
                onReady={this._onReady}
                onStateChange={this._onPlayerStateChange}
                onPlaybackQualityChange={this._onPlaybackQualityChange}
            />
        );
    }

    _onReady(event) {
        event.target.setPlaybackQuality('hd720');
        event.target.setVolume(100);
        // event.target.playVideo();
    }
    _onPlayerStateChange(event) {
        if (event.data === 1) { // on Play
            event.target.setPlaybackQuality('hd720');
        }
        if (event.data === 2) { // on Pause
            // event.target.playVideo();
        }
    }
    _onPlaybackQualityChange(event) {
        event.target.setPlaybackQuality('large');
    }
}


class NewsArticleComponent extends Component {
    render(){
        return (
            <div className="NewsArticleComponentCSS JosefinFont">
                <a href={this.props.url}>
                    {this.props.item_number%2 === 0 ? (
                            <div>
                                <div className="NewsArticleImageContainerCSS">
                                    <div className="NewsArticleImageWrapperCSS">
                                        {this.props.image ?
                                            (
                                                <img src={this.props.image}
                                                    onError={(event)=>event.target.setAttribute("src", Swift2018_256x170)}
                                                    alt="Swift 2018"/>
                                            ) : (
                                                <img src={Swift2018_256x170} alt="Swift 2018"/>

                                            )
                                        }
                                    </div>
                                </div>
                                <div className="NewsArticleTextContainerCSS">
                                    <div className="NewsArticleTextWrapperCSS LeftPadding">
                                        <h2 className="CreteFont">{this.props.title}</h2>
                                        <h4>{this.props.source_name}</h4>
                                        <p>{Date(this.props.publish_time)}</p>
                                        <p>{this.props.description}</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="NewsArticleTextContainerCSS">
                                    <div className="NewsArticleTextWrapperCSS">
                                        <h2 className="CreteFont">{this.props.title}</h2>
                                        <h4>{this.props.source_name}</h4>
                                        <p>{Date(this.props.publish_time)}</p>
                                        <p>{this.props.description}</p>
                                    </div>
                                </div>
                                <div className="NewsArticleImageContainerCSS">
                                    <div className="NewsArticleImageWrapperCSS MoveRight">
                                        {this.props.image ?
                                            (
                                                <img src={this.props.image}
                                                    onError={(event)=>event.target.setAttribute("src", Swift2018_256x170)}
                                                    alt="Swift 2018" />
                                            ) : (
                                                <img src={Swift2018_256x170}
                                                    alt="Swift 2018"/>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </a>
            </div>
        )
    }
}


export default class HomePageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news_data: []
        }
        this.fetchLatestSwiftNews=this.fetchLatestSwiftNews.bind(this);
    }
    fetchLatestSwiftNews(){
        var self = this;

        document.getElementById('FetchSwiftNews').value='Loading...';

        let apiKey = 'b523d9f4be244bf9b9556da0f44a1972',
            query = 'maruti swift 2018 india',
            origin = 'https://newsapi.org/v2/everything';
        let url = origin + '?q=' + query + '&apiKey=' + apiKey;
        let req = new Request(url, {
            'Access-Control-Allow-Origin': '*'
        });

        fetch(req)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (data) {
                if('articles' in data)
                    self.setState({ news_data: data.articles });
                document.getElementById('NewsButtonLoaderContainer').style.display='none';
            }).catch(function (error){
                alert("Something went wrong. Please check your Network connection.");
                document.getElementById('FetchSwiftNews').value='Get Latest News about Swift';
            });
    }

    componentDidMount() {
        document.getElementById('loader').style.display = 'none';
    }

    render() {
        return (
            <div>
                <SampleHomePageVideo />
                <div className="SectionBelowVideoCSS">
                    <h1>
                        All New Maruti Suzuki Swift
                    </h1>
                    <h2>
                        Expected Launch date (India) - Feb. 2018
                    </h2>
                    <div id="NewsButtonLoaderContainer">
                        <input id="FetchSwiftNews" 
                            className="CreteFont"
                            type="submit" 
                            onClick={this.fetchLatestSwiftNews}
                            value="Get Latest News about Swift" />
                    </div>
                </div>
                <div className="ArtciclesContainerCSS">
                    {
                        this.state.news_data.map(function(item, index){
                            return (
                                <NewsArticleComponent
                                    key={index}
                                    item_number={index}
                                    url={item.url}
                                    title={item.title}
                                    description={item.description}
                                    image={item.urlToImage}
                                    publish_time={item.publishedAt}
                                    source_name={item.source.name} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
