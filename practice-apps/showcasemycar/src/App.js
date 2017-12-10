import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import swift_logo from './logo_swift_white.png';
import './CustomComponents.css';
import HomePageComponent from "./HomePageComponent";
import ImagesComponent from "./ImagesComponent";
import FeaturesComponent from "./FeaturesComponent";


class App extends Component {
	render() {
		return (
			<div className="AppContainerCSS">
				<BrowserRouter>
					<div className="AppElementsContainerCSS">
						<div className="RoutesContainerCSS">
							<div className="RoutesWrapperCSS">
								<div className="LogoContainerCSS">
									<div className="LogoWrapperCSS">
										<img src={swift_logo} alt="Swift 2018" />
										<span>SWIFT 2018</span>
									</div>
								</div>
								<div className="LinksContainerCSS">
									<div className="LinksWrapperCSS">
										<Link className="ComponentLinkCSS" to={`${process.env.PUBLIC_URL}/`}>Home</Link>
										<Link className="ComponentLinkCSS" to={`${process.env.PUBLIC_URL}/colors`}>Colors</Link>
										<Link className="ComponentLinkCSS" to={`${process.env.PUBLIC_URL}/features`}>Features</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="SwitchesContainerCSS">
							<div className="SwitchesWrapperCSS">
								<Switch>
									<Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePageComponent} />
									<Route exact path={`${process.env.PUBLIC_URL}/colors`} component={ImagesComponent} />
									<Route exact path={`${process.env.PUBLIC_URL}/features`} component={FeaturesComponent} />
								</Switch>
							</div>
						</div>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
