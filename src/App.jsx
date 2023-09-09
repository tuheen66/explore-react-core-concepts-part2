import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("button clicked");
  }

  const handleClick2 = () => {
    alert("button 2 clicked");
    alert();
  };

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h3> React Core Concepts 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      {/* onClick event handler */}

      <button onClick={handleClick}>Click Me</button>

      {/* with arrow function */}
      <button onClick={handleClick2}>Click 2</button>

      <button onClick={() => alert("third button clicked")}>third</button>

      {/* when event handler gets parameter it needs to be called by an arrow function  */}
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  );
}

export default App;
