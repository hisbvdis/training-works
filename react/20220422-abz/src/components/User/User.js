import "./User.scss";

const User = ({name, thumbnail}) => {
  const imgSrc = thumbnail.path + "." + thumbnail.extension;
  return (<>
    <li className="user">
      <img className="user__photo" src={imgSrc} width="70" height="70" alt={name} />
      <p className="user__field  user__field--name">{name}</p>
    </li>
  </>)
}

export default User;