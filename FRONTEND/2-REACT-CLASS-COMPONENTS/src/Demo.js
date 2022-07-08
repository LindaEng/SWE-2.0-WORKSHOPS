import React from 'react'
import Test from './Test'
 
//when you create a class component, you are create a child class from the parent class React.Component
class Demo extends React.Component {
    constructor() {
        super()
        this.state = {
            color: 'Blue',
            names: ['JB', 'Jen','Getu', 'etc'],
            counter: 0
        }
    }

    increment() {
        this.setState(this.state.counter + 1)
    }


    render() {
        //Where you will write your JSX
        return (
            <div>
                <h1>HELLOOO WORLD!!!</h1>
                <p>{this.state.color}</p>
                {/* .map */}
                {this.state.names.map((name) => {
                    return <p>{name}</p>
                })}

                {/* <p>{this.state.counter}</p>  */}
                <Test counter={this.state.counter} color={this.state.color}/>
                <button onClick={this.increment}>Click Me</button>  

            </div>

        )
    }
}

//you must export the class using export default
export default { Demo }