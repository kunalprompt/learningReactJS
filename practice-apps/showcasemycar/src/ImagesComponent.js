import React, {Component} from "react";

import Swift_R from "./swift_red.png";
import Swift_BL from "./swift_blue.png";
import Swift_W from "./swift_white.png";
import Swift_BK from "./swift_black.png";

import Swift_L_G from "./swift_light_grey.png";
import Swift_L_R from "./swift_light_red.png";
import Swift_M_G from "./swift_medium_grey.png";

import Swift_BL_G from "./swift_blue_grey.png";
import Swift_BK_G from "./swift_black_grey.png";
import Swift_G_BK from "./swift_grey_black.png";


export default class ImagesComponent extends Component{
    constructor(props){
        super(props);
        this.colorsMap = {
            'red': ['#a21625', Swift_R],
            'blue': ['#01518e', Swift_BL],
            'white': ['#e3ebee', Swift_W],
            'black': ['#1d1b1e', Swift_BK],
            'lightGrey': ['#767b7e', Swift_L_G],
            'mediumGrey': ['#545358', Swift_M_G],
            'lightRed': ['#c3083c', Swift_L_R],
            // 'blueGrey': ['#01518e', Swift_BL_G, '#767b7e'],
            // 'blackGrey': ['#1d1b1e', Swift_BK_G, '#767b7e'],
            // 'greyBlack': ['#545358', Swift_G_BK, '#1d1b1e']
        }
        this.state = {
            image: Swift_R
        }
        this.changeItemImage = this.changeItemImage.bind(this);
    }
    componentDidMount(){
        document.getElementById('loader').style.display = 'none';
    }
    changeItemImage(event){
        let img = event.target.getAttribute("data-image");
        this.setState({
            image: img
        })
    }

    render(){
        return (
            <div className="ImagesContainerCSS">

                <div className="ImagesWrapperCSS">
                    <h1>Expected Colors</h1>
                    <div className="ShowcaseContainerCSS">
                        <img src={this.state.image}/>
                    </div>
                    <div className="ShowMakerButtonCSS">
                        {
                            Object.keys(this.colorsMap).map(
                                function(item, index){
                                    return (
                                        <button className="ColorButtonCSS"
                                            key={index}
                                            style={{backgroundColor: this.colorsMap[item][0]}}
                                            data-image={this.colorsMap[item][1]}
                                            onClick={this.changeItemImage}>
                                            &nbsp;
                                        </button>
                                    )
                                }.bind(this)
                            )
                        }

                    </div>

                </div>
                
            </div>
        )
    }
}