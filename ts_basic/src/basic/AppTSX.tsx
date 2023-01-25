import logo from "./logo.svg";
import "./App.css";

function AppTSX() {
  const name: string = "ellie";
  const list: string[] = ["milk", "strawbrey", "banana", "yogart"];
  return (
    <div>
      <img style={{ width: "100px", height: "100px" }} src={logo} alt="logo" />
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item: string) => {
          return <li>{item}</li>;
        })}
        <img
          style={{ width: "200px", height: "200px" }}
          src="https://images.unsplash.com/photo-1674231386741-211eec6d6173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="nature"
        />
      </ul>
    </div>
  );
}

export default AppTSX;
