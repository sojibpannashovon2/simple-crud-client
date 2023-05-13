
import './App.css'

function App() {

  const handleUser = (event) => {

    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;

    const user = { name, email }

    console.log(user);
    fetch("http://localhost:8000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)

    })
      .then(res => res.json())
      .then(data => {
        console.log("new added data", data);
        if (data.insertedId) {
          alert('users added successfully')
          form.reset();
        }
      })
  }

  return (
    <>

      <h1>Simple Crud</h1>

      <form onSubmit={handleUser}>

        <input type="text" name='name' required />
        <br />
        <br />
        <input type="email" name='email' required />
        <br />
        <br />
        <input type="submit" value="Add User" />
      </form>

    </>
  )
}

export default App
