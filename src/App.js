import { useEffect, useState } from "react";
import Users from "./Components/users";

function App() {

  const [users, setUsers] = useState([])

  const url = "https://reqres.in/api/users"

  const fetchUser = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setUsers(data.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchUser(url)
  }, [])

  return (
    <div className="container">
      <Users users={users} />
    </div>
  );
}

export default App;
