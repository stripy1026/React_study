import { PropsWithChildren } from "react";

type TAvatar = {
  image: string;
  name: string;
  size: number;
};

export const AppWrap = () => {
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://images.unsplash.com/photo-1674353707094-03f2241f3269?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1002&q=80"
          name="James Kim"
          size={200}
        />
        <p>Hello!</p>
      </Navbar>
    </div>
  );
};

const Navbar = ({ children }: PropsWithChildren) => {
  return <header style={{ backgroundColor: "yellow" }}>{children}</header>;
};

const Avatar = ({ image, name, size }: TAvatar) => {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
};
