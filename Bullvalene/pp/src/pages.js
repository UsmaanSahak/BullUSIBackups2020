import React from "react";
import ReactDOM from "react-dom";




class FantasticEntry extends React.Component {
	render() {
	var outBorder = {
		display:"inline-block",
		border:"1px solid black",
		height: "100%"
	};
	var midBorder = {
		display:"inline-block",
		border: "5px solid rgb(100,100,100)",
		height: "100%"
	};
	var innerBorder = {
		display:"inline-block",
		border: "1px solid rgb(200,200,200)",
		height: "100%"
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
		<p>+1 (888) 111-9999</p>
		<p>myName@domain.com</p>
		</div>
		);
	}
}
class MLink extends React.Component {
	constructor() {
		super();
		this.state = {
			hover:false,
			clicked:false
		}
	};
	clicked() {
		this.setState({clicked:true});
		window.location=this.props.link;
	}
	
	mouseOver() {
		this.setState({hover:true});
	}
	mouseLeave() {
		this.setState({hover:false});
	}
	render() {
		let color = this.state.hover ? "#777788" : "#aaaa00";
		let boxShadow = this.state.clicked ? "1px 1px 10px #888" : "0 0 0 0 #888";
		var style = {
			marginBottom:"2px",
			fontSize:"13px",
			color:color,
			width:"86px",
			cursor: "pointer",
			boxShadow: boxShadow
		};

		return (
		<p onMouseOver={() => this.mouseOver()} onMouseLeave={() => this.mouseLeave()} onClick={() => this.clicked()} style={style}>{this.props.content}</p>
		);

	}
	
}
class Media extends React.Component {
		render() {

		return (
		<div>
		<MLink content="Linkedin" link="https://linkedin.com"/>
		<MLink content="Github" link="https://github.com"/>
		<MLink content="Facebook" link="https://facebook.com"/>
		</div>
		);
	}
}

class Bullets extends React.Component {
	points() {
		//Make 1 div float left for topic.
		//Make another div float left for points
		var result = [];
		var points = this.props.points;
		for (var i=0; i < this.props.points.length; i++) {
			result.push(points[i]);
		}
		return result;
	}
	render() {
		var topic = {
			float: "left",
			color:"black",
			width: "80px",
			marginRight: "50px"
		};
		var point = {
			float: "left",
			width: this.props.width
		};
		var bullet = {
			display:"inline-block",
			marginBottom: "50px"	
		};
		return (
			<div style={bullet}>
			<div style={topic}>
			{this.props.topic}
			</div>
			<div style={point}>
			{this.points()}
			</div>
			</div>
		);
	}
}
class Brief extends React.Component {
	render() {
		return (
		<div id="brief">
		<Bullets topic="Privacy Policy" points={["The SnapChaching mobile app uses the camera in order to scan barcodes and help with the functionality of the SnapChaching service. This requires permissions to access the camera in one's mobile phone. These permissions is not used for anything else but to provide the key functionalities of the scan routine."]} width="500px"/>
		</div>
		);
	}
}

class Examples extends React.Component {
	render() {
		var topic = {
			float:"left",
			marginRight:"100px"
		};
		var link = {
			float:"left",
			width:"400px"	
		};
		return (
		<div id="examples">
			<h4>Examples</h4>
			<Bullets topic="List" points={["Bullvalene.com"]} width="200px"/>
			<Bullets topic="Forum" points={["Usipun.com"]} width="200px"/>
			<Bullets topic="Shop" points={["SnapChaching.com"]} width="200px"/>
		</div>
		);
	}
}
class Explain extends React.Component {
	render() {
	var style = {
		display:"flex"
	};
	return (
	<div style={style}>
	<Brief/>
	</div>
	);
	}
}

class Pages extends React.Component {
	render() {
	return (
	<div>
		<div id="card">
			<div className="fit">
			<FantasticEntry contents={<img id="pic" width="50px" height="50px" src="src/placeholder.png"/>}/>
			</div>
			<div className="fit">
			<FantasticEntry contents={<img id="logo" width="50px" height="50px" src="src/phlogo.jpg"/>}/>
			</div>
			<div className="fit">
			<FantasticEntry contents={<WelcomeText/>}/>
			</div>
			<div className="fit">
			<FantasticEntry contents={<Media/>}/>
			</div>
			<div className="fit" id="topGap">
			</div>
		</div>
	</div>);
	}
}

class Content extends React.Component {
	render() {
		return (
		<div id="contentContainer">
			<Explain/>
		</div>);
	}
}
ReactDOM.render(<Pages/>, document.getElementById("Intro"));
ReactDOM.render(<Content/>, document.getElementById("Content"));

