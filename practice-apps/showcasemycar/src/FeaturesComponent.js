import React, {Component} from "react";
import SwiftInterior from './swift_interior.jpg';


export default class FeaturesComponent extends Component{
    componentDidMount(){
        document.getElementById('loader').style.display = 'none';
    }

    render(){
        return (
            <div className="FeaturesComponentCSS">
                <div className="InteriorsComponentCSS"
                    style={{backgroundImage: `url(${SwiftInterior})`, 
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"}}>
                    
                    <div className="InteriorComponentFooterContainerCSS">
                        <div className="InteriorComponentFooterWrapperCSS">
                            <h1>Brand New Re-designed Interior</h1>
                            <h2>Circular Dials and Monitors</h2>
                            <h3>Re-designed centre console</h3>
                        </div>
                    </div>
                </div>
                <div className="FeatuersContainerCSS">
                    <h1>Engine options and other details</h1>
                    <div className="OptionsContainerCSS JosefinFont">
                        <div className="OptionsWrapperCSS">
                            <div className="Percent40WidthCSS CreteFont">
                                Petrol
                            </div>
                            <div className="Percent60WidthCSS">
                                1.0 litre turbocharged BoosterJet Petrol, updated 1.2 litre K-Series Petrol
                            </div>
                        </div>
                        <div className="OptionsWrapperCSS">
                            <div className="Percent40WidthCSS CreteFont">
                                Diesel
                            </div>
                            <div className="Percent60WidthCSS">
                                1.3 litre Diesel
                            </div>
                        </div>
                        <div className="OptionsWrapperCSS">
                            <div className="Percent40WidthCSS CreteFont">
                                Transmission
                            </div>
                            <div className="Percent60WidthCSS">
                                5-speed Manual and AMT units
                            </div>
                        </div>
                        <div className="OptionsWrapperCSS">
                            <div className="Percent40WidthCSS CreteFont">
                                Platform
                            </div>
                            <div className="Percent60WidthCSS">
                                <span className="CreteFont">HEARTECT</span>
                                <ul>
                                    <li>Lighter and Rigid</li>
                                    <li>Safer (Global Safety Norms compliance)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="OptionsWrapperCSS">
                            <div className="Percent40WidthCSS CreteFont">
                                Dimensions
                            </div>
                            <div className="Percent60WidthCSS">
                                <ul className="DimensionsList">
                                    <li>
                                        <b>Length</b> 
                                        3,840mm
                                    </li>
                                    <li>
                                        <b>Width</b>
                                        1,735mm
                                    </li>
                                    <li>
                                        <b>Height</b> 
                                        1,495mm
                                    </li>
                                    <li>
                                        <b>Luggage Capacity</b>(rear seatback folded) 
                                        579litres
                                    </li>
                                    <li>
                                        <b>Luggage Capacity</b>(rear seatback raised) 
                                        265litres
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}