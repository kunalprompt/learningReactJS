import React, { Component } from "react";
import YouTube from 'react-youtube';

class SampleHomePageVideo extends React.Component {
    render() {
        const opts = {
            width: 1080,
            height: 520,
            suggestedQuality: 'large',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
                controls: 0,
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
        // access to player in all event handlers via event.target
        event.target.setPlaybackQuality('hd720');
        event.target.setVolume(0);
        event.target.playVideo();
    }
    _onPlayerStateChange(event) {
        if (event.data == 1) { // on Play
            event.target.setPlaybackQuality('hd720');
        }
        if (event.data == 2) { // on Pause
            // event.target.playVideo();
        }
    }
    _onPlaybackQualityChange(event) {
        event.target.setPlaybackQuality('large');
    }
}


export default class HomePageComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SampleHomePageVideo />
                <div>
                    All New Maruti Suzuki Swift

                    Expected Launch date (India) - Feb. 2018
                    </div>
            </div>
        )
    }
}