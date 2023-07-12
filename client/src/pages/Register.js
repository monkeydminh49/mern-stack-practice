

import { useState } from 'react';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
<<<<<<< HEAD
  const uri = "https://minhdunk.onrender.com/api/register";
  const localUri = "http://localhost:1337/api/register";
=======
  const apiURL = `${process.env.REACT_APP_API_URL}/register`;
>>>>>>> 3bf9ab772ab81ec0d28716147d984e722acb8835

  async function registerUser(e) {
    e.preventDefault();

<<<<<<< HEAD
    const res = await fetch(localUri, {
=======
    const res = await fetch(apiURL, {
>>>>>>> 3bf9ab772ab81ec0d28716147d984e722acb8835
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })

    const data = await res.json();

    if (data.status === 'ok') {
      alert("Register successful")
      window.location.href = "/login"
    } else {
      alert(data.error)
    }



    console.log(data);
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
          type="text"
        />
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          type='email'
        />
        <br />

        <input
          value={password}
          onChange={(e) => setPassowrd(e.target.value)}
          placeholder='Password'
          type='password'
        />
        <br />

        <button type='submit'>Sign up</button>
      </form>
    </div>
  )
}

export default Register;
