import "./App.css";

function App() {
  const name = "ellie";
  return (
    <div>
      <h1 className="orange">Hello!</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        <li>milk</li>
        <li>strawberry</li>
        <li>banana</li>
      </ul>
      <img
        style={{ width: "200px", height: "200px" }}
        src="https://images.unsplash.com/photo-1674231386741-211eec6d6173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
        alt="nature"
      />
    </div>
  );
}

export default App;
