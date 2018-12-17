import React, { Component } from 'react'

class Test extends Component {

    state = {
        title: '',
        body: ''
    }

    componentDidMount() { //se inicializa el componente
        console.log('componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => this.setState({
                title: data.title,
                body: data.body
            }))
    }

    // //(deprecated)
    // componentWillMount() { //se inicializa antes de DidMount
    //     console.log('componentWillMount');
    // }

    // //(deprecated)
    // componentWillUpdate() { //antes de actualizar el estado
    //     console.log('componentWillUpdate');
    // }

    // componentDidUpdate() { //al cambiar el estado del componente
    //     console.log('componentDidUpdate');
    // }
    // //(deprecated)
    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log('componentWillReceiveProps');
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return {
    //         test: 'something'
    //     };
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('getSnapshotBeforeUpdate');
    // }

    render() {
        const { title, body } = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        )
    }
}
export default Test;