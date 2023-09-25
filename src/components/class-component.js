import React from "react";

class User extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            State: "Maharashtra" 
        };
    }


    componentDidMount() {
        this.setState({State: "Mumbai"});
        console.log("ComponentDidMount")
    }

    render(){
        return (
            <div>
              <h1>
                {this.props.name}
              </h1>
              <h4>
                {this.props.description}
              </h4>
              <h5>
                {this.state.State}
              </h5>
            </div>
        );
    }

}


export default User;

/*
    LIFE-CYCLE:
    1. MOUNT
        A. CONSTRUCTORS
        B. RENDER
        C. COMPONENTDIDMOUNT
    2. UPDATE
    3. UNMOUNT

*/