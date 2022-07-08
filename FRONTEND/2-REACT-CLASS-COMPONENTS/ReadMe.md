# React Class Components

## Objectives
- Review of what react components are.
- What is a react Class component?
- Why do we need to learn how to write class components?
- what is this.state
- how to update state
- how to pass props to other components


## React Class Components
- Components are like functions that return HTML elements

- Components are independent reusable bits of code. There are two ways to write components
- Functional components - easier to read and write tests 
- Class components - most react applications still use class components

- When creating a new component file, always capitalize the first letter
- A class component is a child class from the parent React.Component
- you will write your JSX elements within a render method 
- Remember to Return!
- make sure you export the class component!

## Class component state
- this.state to store state

## How to update state
- this.setState() <-will help us update state in a class component


## How do we pass props from a class component to another component???
- to pass down props from parent to child, we give ethe child component a key, followed by the information. If the information is from state ->

-> key={this.state.data}

-> to access props from the child component, we pass in the keyword props within the constructor method + super
-> this.props.nameOfKey 

///Bootstrap///

//1. Counter with an increment + decrement button, the counter value can be another component 

//2. To-do list where you type in a text field, and the task will render on the screen



1. create a new class component in a separte file.

2. pay attention to the synax 

3. exporting / importing correctly

4. Practice state in class components
    - how to access state within the class component -> rendering from state
    - practice updating state 

5. Practice passing down props from one class component to:
    - another class component
    - functional component