import React from "react";

interface User {
    name: string
}

export class HomePage extends React.Component<User, {}>{
    render(){
    return <h1>This is test for gif-mess. Welcome!!! {this.props.name}</h1>;
    }
}
