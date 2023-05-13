import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const user = useLoaderData()
    console.log(user);

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;

        const updateUser = { name, email }
        console.log(updateUser);

        fetch(`http://localhost:8000/user/${user._id}`, {

            method: 'PUT',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    return (
        <div>
            <h1>{user.name}</h1>

            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={user?.name} id="" />
                <br />
                <br />
                <input type="email" name="email" defaultValue={user?.email} id="" />
                <br />
                <br />
                <input type="submit" name="" value="Update" id="" />


            </form>
        </div>

    );
};

export default Update;