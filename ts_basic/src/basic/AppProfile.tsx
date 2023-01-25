import "./App.css";
import { Profile } from "./components/Profile";
import { Avatar } from "./components/Avatar";
import { SyntheticEvent } from "react";

function AppProfile() {
  const handleClick = (event: SyntheticEvent) => {
    console.log(event);
    alert("button clicked");
  };
  return (
    <div>
      <button onClick={handleClick}>button</button>
      <Profile
        image="https://images.unsplash.com/photo-1674353707094-03f2241f3269?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1002&q=80"
        name="James Kim"
        title="Frontend Developer"
        tag="new"
      />
      <Profile
        image="https://images.unsplash.com/photo-1674368777653-bc2bca1c30c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        name="Anna Feinman"
        title="Backend Developer"
        tag="Junior"
      />
      <Avatar
        image="https://plus.unsplash.com/premium_photo-1670519227732-d38f29a0a8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        tag="Avatar"
      />
    </div>
  );
}

export default AppProfile;
