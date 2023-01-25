export type HumanAvatar = {
  image: string;
  name?: string;
  tag?: string;
  size?: number;
};

export const Avatar = (props: HumanAvatar) => (
  <div className="avatar">
    <img className="photo" src={props.image} alt="avatar" />
    {props.tag && <span className="tag">{props.tag}</span>}
  </div>
);
