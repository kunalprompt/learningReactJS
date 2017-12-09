import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import swift80_53 from './Swift2018_80x53.png';
import './App.css';
import './CustomComponents.css';
import HomePageComponent from "./HomePageComponent";
import ImagesComponent from "./ImagesComponent";
import SpecificationComponent from "./SpecificationComponent";


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
										<img src={swift80_53}/>
										<span>SWIFT 2018</span>
									</div>
								</div>
								<div className="LinksContainerCSS">
									<div className="LinksWrapperCSS">
										<Link className="ComponentLinkCSS" to={'/'}>Home</Link>
										<Link className="ComponentLinkCSS" to={'/images'}>Images</Link>
										<Link className="ComponentLinkCSS" to={'/specifications'}>Specifications</Link>
										<Link className="ComponentLinkCSS" to={'/purchase'}>Purchase</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="SwitchesContainerCSS">
							<div className="SwitchesWrapperCSS">
								<Switch>
									<Route exact path="/" component={HomePageComponent} />
									<Route exact path="/images" component={ImagesComponent} />
									<Route exact path="/specifications" component={SpecificationComponent} />
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
