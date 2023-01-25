import { PropsWithChildren } from "react";

export const AppCard = () => {
  return (
    <div>
      <Card>
        <p>Card1</p>
      </Card>

      <Card>
        <h1>Card2</h1>
        <p>Content</p>
      </Card>

      <Card>
        <article></article>
      </Card>
    </div>
  );
};

const Card = ({ children }: PropsWithChildren) => {
  return (
    <div
      style={{
        backgroundColor: "black",
        borderRadius: "20px",
        color: "white",
        minHeight: "200px",
        maxWidth: "200px",
        margin: "1rem",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};
