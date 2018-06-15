import React from 'react';

const Input = (props) => {

    return (
        <div>
            <h3>{props.name}</h3>
            <input type="text"
                   name ={props.name}
                   onChange={props.onChange}
                   className="textInput" />
        </div>

        )


}



export default Input;
