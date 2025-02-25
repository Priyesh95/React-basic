import { useParams } from "react-router-dom";

function User(){
    const { username } = useParams();
    console.log(username);
    return <h1>👤 User Profile: {username}</h1>;
}

export default User;