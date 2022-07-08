import React from 'react'

class Test extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1>
                <p>{this.props.color}</p>
            </div>
        )
    }
}

export default { Test }