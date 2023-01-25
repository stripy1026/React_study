import { HumanAvatar } from "./Avatar";
import { Avatar } from "./Avatar";

type HumanResource = HumanAvatar & {
  name: string;
  title: string;
};

export const Profile = (props: HumanResource) => (
  <div className="profile">
    <Avatar image={props.image} tag={props.tag} />
    <h1>{props.name}</h1>
    <p>{props.title}</p>
  </div>
);
