import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadedUsers = useLoaderData();

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const UpdatedUser = { name, email };

        fetch(`http://localhost:5000/users/${loadedUsers._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('user updated successfully')
                }
            })
    }

    return (
        <div>
            <h3>Update information of {loadedUsers.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUsers?.name} />
                <br />
                <input type="email" name="email" defaultValue={loadedUsers?.email} />
                <br />
                <input type="submit" value='Update' />
            </form>
        </div>
    );
};

export default Update;