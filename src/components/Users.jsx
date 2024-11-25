import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = _id => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = users.filter(user => user._id !== _id);
                setUsers(remaining);
            })
    }

    return (
        <div>
            <h2>users: {users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <Link to={`/update/${user._id}`}>
                            <button>Updated</button>
                        </Link>
                        <button onClick={() => handleDelete(user._id)}>X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;