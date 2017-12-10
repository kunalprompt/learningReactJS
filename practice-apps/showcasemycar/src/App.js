import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import swift80_53 from './Swift2018_80x53.png';
import './App.css';
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
										<img src={swift80_53} alt="Swift 2018" />
										<span>SWIFT 2018</span>
									</div>
								</div>
								<div className="LinksContainerCSS">
									<div className="LinksWrapperCSS">
										<Link className="ComponentLinkCSS" to={'/swift18'}>Home</Link>
										<Link className="ComponentLinkCSS" to={'/swift18/colors'}>Colors</Link>
										<Link className="ComponentLinkCSS" to={'/swift18/features'}>Features</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="SwitchesContainerCSS">
							<div className="SwitchesWrapperCSS">
								<Switch>
									<Route exact path="/swift18" component={HomePageComponent} />
									<Route exact path="/swift18/colors" component={ImagesComponent} />
									<Route exact path="/swift18/features" component={FeaturesComponent} />
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
