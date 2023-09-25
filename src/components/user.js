//to add the things like set state from class component here we use the HOOKS
import React,{useState,useEffect} from "react";

const User = (props) => {

  //initializing the variable planet as earth
    const [planet,setPlanet] = useState("earth");

    //componentDidMount
    //we are using the empty array because the thing should render only once
    useEffect(()=>{
      console.log("mounting completed!");
    },[]);


    //componentDidUpdate
    useEffect(()=>{
      console.log("updated");
    },[planet]);
    

    return (
      <div>
        <h1>
          {props.name}
        </h1>
        <h4>
          {props.description}
        </h4>
        <button onClick={()=>setPlanet("Mars")}>
          {planet}
        </button>
      </div>
    );
  }
  
  export default User;