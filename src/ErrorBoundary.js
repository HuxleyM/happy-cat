import React from 'react'

class ErrorBoundary extends React.Component{
    state = {error:null}
    static getDerivedStateFromError(error){
        return {error}
    }
    render(){
        const {error} = this.state;
        if(error) return <div>Oh no an error happened in the app!</div>
        return this.props.children
    }
}

export default ErrorBoundary