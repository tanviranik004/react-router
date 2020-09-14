import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, email,id} = props.friend;
    const history = useHistory();
    const handleClick =(friendId)=>{
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        paddings: '20px',
        borderRadius: '20px'

    }
    const buttonStyle = {
        backgroundColor:'#4CAF50',
        border: '1px solid tomato',
        margin: '5px',
        display: 'inline-block',
        fontSize: '16px',
        paddings: '15px 32px',
        borderRadius: '5px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>email:{email}</p>
            <Link to={`/friend/${id}`}>Show detail of id:{id}</Link>
           <button style={buttonStyle} onClick={()=>handleClick(id)}>Click me</button>
        </div>
    );
};

export default Friend;