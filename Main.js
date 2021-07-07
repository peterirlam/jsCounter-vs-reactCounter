import React from 'react';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numDisplay: 0
		};
	}

	increment = () => {
		this.setState((prevState) => ({
			numDisplay: prevState.numDisplay + 1
		}));
	};

	decrement = () => {
		this.setState((prevState) => ({
			numDisplay: prevState.numDisplay - 1
		}));
	};

	reset = () => {
		this.setState({ numDisplay: 0 });
	};

	render() {
		const counterStyle = {
			marginTop: '250px',
			border: '3px solid black',
			borderRadius: '5px'
		};
		return (
			<div className="row justify-content-center">
				<div className="col-md-5" style={counterStyle}>
					<h1>React Counter</h1>
					<h1>{this.state.numDisplay}</h1>
					<button className="btn btn-success" onClick={this.increment}>
						INCREMENT
					</button>
					<button className="btn btn-danger" onClick={this.decrement}>
						DECREMENT
					</button>
					<button className="btn btn-primary" onClick={this.reset}>
						RESET
					</button>
				</div>
			</div>
		);
	}
}

export default Main;
