function User (props) {
    return (
      <div>
        <h1>
          {props.name}
        </h1>
        <h4>
            {props.description}
        </h4>
      </div>
    );
  }
  
  export default User;