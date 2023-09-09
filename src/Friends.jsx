import "./Friends.css";
import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function Friends() {
  const [friends, setFriends] = useState([]); // creating a useState

  // using useEffect to fetch data from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data)); // set loaded data to the state
  }, []); // dependency array

  return (
    <div className='box'>
      <h3>Friends : {friends.length} </h3>
      {friends.map((friend) => (
        <Friend friend={friend}></Friend> // sending values of 'Friends' to 'Friend' component
      ))}
    </div>
  );
}

/*
 * 1. state to hold data
 * 2. useEffect with dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the state
 * 5. display data on the component
 */
