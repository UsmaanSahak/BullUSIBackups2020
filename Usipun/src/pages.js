import React from "react";
import ReactDOM from "react-dom";




class FantasticEntry extends React.Component {
	render() {
	var outBorder = {
		display:"inline-block",
		border:"2px dotted black"
	};
	var midBorder = {
		display:"inline-block",
		border: "5px solid rgb(100,100,100)"
	};
	var innerBorder = {
		display:"inline-block",
		border: "1px solid rgb(200,200,200)"
	};
	return (
	<div style={outBorder}>
		<div style={midBorder}>
			<div style={innerBorder}>
				{this.props.contents}
			</div>
		</div>
	</div>
	);
	}
}
class WelcomeText extends React.Component {
	render() {
		return (
		<div id="WelcomeText">
		<p>Hello, this is my page.</p>
		<p>This is the page where I post my progress.</p>
		</div>
		);
	}
}

class TechStack extends React.Component {
	render() {
		return (
		<div id="TechStack">
		<p> My tech stack is as follows: </p>
		<br/><br/>
		<img id="StackImg" className="expandable" width="300px" src="src/explain.png"/>
		</div>
		);
	}
}
class HardStack extends React.Component {
	render() {
		return (
		<div id="HardStack">
		<p> This is a schematic template I have created. </p>
		<br/><br/>
		<img id="HardImg" className="expandable" width="300px" src="src/bvhardware.png"/>
		</div>
		);
	}
}
class LandingPage extends React.Component {
	redirect() {
		location='https://bullvalene.com/landingPage';
	}
	render() {
	return (
	<button onClick={this.redirect}>TEST</button>
	);
	}
}
class Pages extends React.Component {
	render() {
	return (
	<div id="page">
		<div className="fit">
		<FantasticEntry contents={<img width="300px" src="src/dawn.jpg"/>}/>
		</div>
		<div className="fit">
		<FantasticEntry contents={<img width="300px" src="src/bvlogo.png"/>}/>
		</div>
		<div className="fit">
		<FantasticEntry contents={<LandingPage/>}/>	
		</div>
		<div className="fit">
		<FantasticEntry contents={<WelcomeText/>}/>
		</div>
		<div className="fit">
		<FantasticEntry contents={<TechStack/>}/>
		</div>
		<div className="fit">
		<FantasticEntry contents={<HardStack/>}/>
		</div>
		<div className="fit">
		<FantasticEntry contents={<HardStack/>}/>
		</div>

	</div>);
	}
}
class Dragbird extends React.Component {
	render() {
		return (
		<div>
			<p></p>
		</div>
		);
	}
}
ReactDOM.render (<Pages/>, document.getElementById("Intro"));
ReactDOM.render (<Dragbird/>,document.getElementById("Dragbird"));
