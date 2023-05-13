import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {

    const loadUser = useLoaderData()

    const [users, setUsers] = useState(loadUser)

    console.log(loadUser);

    const handleDelete = (_id) => {
        console.log("Delete the id:- ", _id);
        fetch(`http://localhost:8000/user/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.deletedCount > 0) {
                    alert("Successfully Deleted");
                    const remaining = users.filter(pd => pd._id !== _id)
                    setUsers(remaining)
                }

            })
    }
    return (
        <div>
            working {users.length}
            {
                users.map(pd => <p key={pd._id}>{pd.name}  :  {pd.email}
                    <Link to={`/user/${pd._id}`}>
                        <button>Update</button>
                    </Link>
                    <button onClick={() => handleDelete(pd._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default User;