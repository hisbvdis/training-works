import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import User from "../../components/User/User";
import { getUsers } from "../../services/api";
import Container from "../Container/Container";
import "./Users.scss";

const Users = () => {
  const [offset, setOffset] = useState(0);
  const [userCount] = useState(6);
  const [data, setData] = useState();
  const [users, setUsers] = useState([]);

  const getData = () => {
    getUsers(userCount, offset).then(response => {
      setData(response.data);
      setUsers(prev => prev.concat(response.data.results));
      setOffset(prev => prev + userCount);
    });
  }

  useEffect(() => getData(userCount, offset), [])

  return (<>
    <section className="users" id="users">
      <Container>
        <h2 className="heading  users__heading">Working with GET request</h2>
        <ul className="users__list">
          {users
            ? users.map(user => <User key={user.id} {...user} />)
            : "loading"}
        </ul>
        {
          (offset <= data?.total)
          ? <Button onClick={getData}>Show more</Button>
          : null
        }
      </Container>
    </section>
  </>);
}

export default Users;