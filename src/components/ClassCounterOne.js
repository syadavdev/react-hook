import React, { Component } from 'react'

class ClassCounterOne extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
            name: ''
		}
	}

	componentDidMount() {
		document.title = `Clicked ${this.state.count} times`
	}

	componentDidUpdate(prevProps, prevState) {
        if(prevState.count != this.state.count){
            console.log('updating document titile')
		    document.title = `Clicked ${this.state.count} times`
        }
	}

	render() {
		return (
			<div>
                <input value={this.state.name} onChange={event => this.setState({ name: event.target.value})} />
				<button onClick={() => this.setState({ count: this.state.count + 1 })}>
					Click {this.state.count} times
				</button>
			</div>
		)
	}
}

export default ClassCounterOne