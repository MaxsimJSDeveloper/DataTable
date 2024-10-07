import scss from "./Avatar.module.scss";

const Avatar: React.FC<{ name: string }> = ({ name }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return <div className={scss.avatar}>{initials}</div>;
};

export default Avatar;
