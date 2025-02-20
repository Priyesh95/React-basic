import { useState } from "react";
import { useEffect } from "react";

function Users(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            setUsers(data)
        })
    }, []);

    return <div>
        <ul>
            {users.map(function(user) {
                return <li key={user.id}>{user.name}</li>
            })}
        </ul>
    </div>

}

export default Users;